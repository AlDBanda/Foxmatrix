import PropTypes from 'prop-types';
import React, { createContext, useEffect, useReducer } from 'react';

// third-party
import { CognitoUser, CognitoUserPool, CognitoUserAttribute, AuthenticationDetails } from 'amazon-cognito-identity-js';

// project imports
import Loader from 'ui-component/Loader';

import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// constant
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

export const userPool = new CognitoUserPool({
    UserPoolId: process.env.REACT_APP_AWS_POOL_ID || '',
    ClientId: process.env.REACT_APP_AWS_APP_CLIENT_ID || ''
});

const setSession = (serviceToken) => {
    if (serviceToken) {
        localStorage.setItem('serviceToken', serviceToken);
    } else {
        localStorage.removeItem('serviceToken');
    }
};

// ==============================|| AWS Cognito CONTEXT & PROVIDER ||============================== //

const AWSCognitoContext = createContext(null);

export const AWSCognitoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    useEffect(() => {
        const init = async () => {
            try {
                const serviceToken = window.localStorage.getItem('serviceToken');
                if (serviceToken) {
                    setSession(serviceToken);
                    const currentUser = userPool.getCurrentUser();
                    if (currentUser) {
                        currentUser.getSession((err) => {
                            if (err) {
                                dispatch({ type: LOGOUT });
                            } else {
                                currentUser.getUserAttributes((err, attributes) => {
                                    if (err) {
                                        dispatch({ type: LOGOUT });
                                    } else {
                                        // Fetch role from user attributes or via API
                                        const roleAttribute = attributes.find((attr) => attr.Name === 'custom:role');
                                        const role = roleAttribute ? roleAttribute.Value : 'User'; // Default role if not found

                                        dispatch({
                                            type: LOGIN,
                                            payload: {
                                                isLoggedIn: true,
                                                user: {
                                                    name: currentUser.getUsername(),
                                                    role: role
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                } else {
                    dispatch({
                        type: LOGOUT
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: LOGOUT
                });
            }
        };

        init();
    }, []);

    const login = async (email, password) => {
        const usr = new CognitoUser({
            Username: email,
            Pool: userPool
        });

        const authData = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        usr.authenticateUser(authData, {
            onSuccess: (session) => {
                setSession(session.getAccessToken().getJwtToken());

                usr.getUserAttributes((err, attributes) => {
                    if (err) {
                        dispatch({ type: LOGOUT });
                    } else {
                        // Fetch role from user attributes
                        const roleAttribute = attributes.find((attr) => attr.Name === 'custom:role');
                        const role = roleAttribute ? roleAttribute.Value : 'User'; // Default role if not found

                        dispatch({
                            type: LOGIN,
                            payload: {
                                isLoggedIn: true,
                                user: {
                                    email: authData.getUsername(),
                                    name: 'John Doe',
                                    role: role
                                }
                            }
                        });
                    }
                });
            },
            onFailure: () => {},
            newPasswordRequired: () => {}
        });
    };

    const register = (email, password, firstName, lastName) =>
        new Promise((success, rej) => {
            userPool.signUp(
                email,
                password,
                [
                    new CognitoUserAttribute({ Name: 'email', Value: email }),
                    new CognitoUserAttribute({ Name: 'name', Value: `${firstName} ${lastName}` }),
                    new CognitoUserAttribute({ Name: 'custom:role', Value: 'User' }) // Default role on registration
                ],
                [],
                async (err, result) => {
                    if (err) {
                        rej(err);
                        return;
                    }
                    success(result);
                }
            );
        });

    const logout = () => {
        const loggedInUser = userPool.getCurrentUser();
        if (loggedInUser) {
            setSession(null);
            loggedInUser.signOut();
            dispatch({ type: LOGOUT });
        }
    };

    const forgotPassword = async (email) => {
        const user = new CognitoUser({
            Username: email,
            Pool: userPool
        });
        user.forgotPassword({
            onSuccess: function () {},
            onFailure: function () {}
        });
    };

    const resetPassword = async (verificationCode, newPassword) => {
        const email = localStorage.getItem('email');
        if (email) {
            const user = new CognitoUser({
                Username: email,
                Pool: userPool
            });
            return new Promise((resolve, reject) => {
                user.confirmPassword(verificationCode, newPassword, {
                    onSuccess: function (data) {
                        localStorage.removeItem('email');
                        resolve(data);
                    },
                    onFailure: function (error) {
                        reject(error.message);
                    }
                });
            });
        } else {
            return new Promise((resolve, reject) => {
                reject('Token expired try again');
            });
        }
    };

    const updateProfile = () => {};

    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
    }

    return (
        <AWSCognitoContext.Provider value={{ ...state, login, logout, forgotPassword, resetPassword, updateProfile, register }}>
            {children}
        </AWSCognitoContext.Provider>
    );
};

AWSCognitoProvider.propTypes = {
    children: PropTypes.node
};

export default AWSCognitoContext;
