import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';

// third-party
import { Auth0Client } from '@auth0/auth0-spa-js';

// project imports
import Loader from 'ui-component/Loader';

import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// constant
let auth0Client;

const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

// ==============================|| AUTH0 CONTEXT & PROVIDER ||============================== //

const Auth0Context = createContext(null);

export const Auth0Provider = ({ children }) => {
    const [state, dispatch] = useReducer(accountReducer, initialState);

    useEffect(() => {
        const init = async () => {
            try {
                auth0Client = new Auth0Client({
                    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
                    domain: process.env.REACT_APP_AUTH0_DOMAIN,
                    authorizationParams: {
                        redirect_uri: window.location.origin
                    }
                });

                await auth0Client.checkSession();
                const isLoggedIn = await auth0Client.isAuthenticated();

                if (isLoggedIn) {
                    const user = await auth0Client.getUser();

                    // Fetch the user role from your backend API or Auth0
                    const role = await fetchUserRole(user?.sub); // This should be implemented to fetch the role

                    dispatch({
                        type: LOGIN,
                        payload: {
                            isLoggedIn: true,
                            user: {
                                id: user?.sub,
                                email: user?.email,
                                name: user?.name,
                                role: role // Store the role in the state
                            }
                        }
                    });
                } else {
                    dispatch({
                        type: LOGOUT
                    });
                }
            } catch (err) {
                dispatch({
                    type: LOGOUT
                });
            }
        };

        init();
    }, []);

    const fetchUserRole = async (userId) => {
        // Implement this function to fetch the user's role from your backend API or another source
        // This is just a placeholder for the logic you would use to get the role
        const response = await fetch(`/api/users/${userId}/role`);
        const data = await response.json();
        return data.role; // Assuming the role is returned in this structure
    };

    const login = async (options) => {
        await auth0Client.loginWithPopup(options);
        const isLoggedIn = await auth0Client.isAuthenticated();

        if (isLoggedIn) {
            const user = await auth0Client.getUser();
            const role = await fetchUserRole(user?.sub); // Fetch the role after login
            dispatch({
                type: LOGIN,
                payload: {
                    isLoggedIn: true,
                    user: {
                        id: user?.sub,
                        avatar: user?.picture,
                        email: user?.email,
                        name: user?.name,
                        role: role, // Store the role in the state
                        tier: 'Premium'
                    }
                }
            });
        }
    };

    const logout = () => {
        auth0Client.logout();

        dispatch({
            type: LOGOUT
        });
    };

    const resetPassword = async () => {};

    const updateProfile = () => {};

    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
    }

    return (
        <Auth0Context.Provider value={{ ...state, login, logout, resetPassword, updateProfile }}>
            {children}
        </Auth0Context.Provider>
    );
};

Auth0Provider.propTypes = {
    children: PropTypes.node
};

export default Auth0Context;
