import React from 'react';
import { useSelector } from 'react-redux'; // Or any other state management you are using
import { FormattedMessage } from 'react-intl';

// assets
import { IconApps, IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons-react';

// constant
const icons = {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc
};

const application = () => {
    // Assuming you're using Redux, you can get the user role from the state
    const userRole = useSelector((state) => state.user.role);

    return {
        id: 'application',
        title: <FormattedMessage id="application" />,
        icon: icons.IconApps,
        type: 'group',
        children: [
            {
                id: 'users',
                title: <FormattedMessage id="users" />,
                type: 'collapse',
                icon: icons.IconUserCheck,
                children: [
                    // Only show this section if the user is a Manager
                    userRole === 'Manager' && {
                        id: 'posts',
                        title: <FormattedMessage id="social-profile" />,
                        type: 'item',
                        url: '/apps/user/social-profile/posts'
                    },
                    {
                        id: 'account-profile',
                        title: <FormattedMessage id="account-profile" />,
                        type: 'collapse',
                        children: [
                            {
                                id: 'profile1',
                                title: (
                                    <>
                                        <FormattedMessage id="profile" /> 01
                                    </>
                                ),
                                type: 'item',
                                url: '/apps/user/account-profile/profile1'
                            },
                            {
                                id: 'profile2',
                                title: (
                                    <>
                                        <FormattedMessage id="profile" /> 02
                                    </>
                                ),
                                type: 'item',
                                url: '/apps/user/account-profile/profile2'
                            },
                            {
                                id: 'profile3',
                                title: (
                                    <>
                                        <FormattedMessage id="profile" /> 03
                                    </>
                                ),
                                type: 'item',
                                url: '/apps/user/account-profile/profile3'
                            }
                        ]
                    },
                    {
                        id: 'user-card',
                        title: <FormattedMessage id="cards" />,
                        type: 'collapse',
                        children: [
                            {
                                id: 'card1',
                                title: (
                                    <>
                                        <FormattedMessage id="style" /> 01
                                    </>
                                ),
                                type: 'item',
                                url: '/apps/user/card/card1'
                            },
                            {
                                id: 'card2',
                                title: (
                                    <>
                                        <FormattedMessage id="style" /> 02
                                    </>
                                ),
                                type: 'item',
                                url: '/apps/user/card/card2'
                            },
                            {
                                id: 'card3',
                                title: (
                                    <>
                                        <FormattedMessage id="style" /> 03
                                    </>
                                ),
                                type: 'item',
                                url: '/apps/user/card/card3'
                            }
                        ]
                    },
                    {
                        id: 'user-list',
                        title: <FormattedMessage id="list" />,
                        type: 'collapse',
                        children: [
                            {
                                id: 'list1',
                                title: (
                                    <>
                                        <FormattedMessage id="style" /> 01
                                    </>
                                ),
                                type: 'item',
                                url: '/apps/user/list/list1'
                            },
                            {
                                id: 'list2',
                                title: (
                                    <>
                                        <FormattedMessage id="style" /> 02
                                    </>
                                ),
                                type: 'item',
                                url: '/apps/user/list/list2'
                            }
                        ]
                    }
                ]
            },
            {
                id: 'customer',
                title: <FormattedMessage id="customer" />,
                type: 'collapse',
                icon: icons.IconBasket,
                children: [
                    userRole === 'Manager' && {
                        id: 'customer-list',
                        title: <FormattedMessage id="customer-list" />,
                        type: 'item',
                        url: '/apps/customer/customer-list',
                        breadcrumbs: false
                    },
                    userRole === 'Manager' && {
                        id: 'order-list',
                        title: <FormattedMessage id="order-list" />,
                        type: 'item',
                        url: '/apps/customer/order-list',
                        breadcrumbs: false
                    }
                    // Other items...
                ].filter(Boolean) // Remove any falsey values (undefined or null) due to conditional rendering
            },
            {
                id: 'chat',
                title: <FormattedMessage id="chat" />,
                type: 'item',
                icon: icons.IconMessages,
                url: '/apps/chat'
            },
            {
                id: 'kanban',
                title: 'Kanban',
                type: 'item',
                icon: icons.IconLayoutKanban,
                url: '/apps/kanban/board'
            },
            {
                id: 'mail',
                title: <FormattedMessage id="mail" />,
                type: 'item',
                icon: icons.IconMail,
                url: '/apps/mail'
            },
            {
                id: 'calendar',
                title: <FormattedMessage id="calendar" />,
                type: 'item',
                url: '/apps/calendar',
                icon: icons.IconCalendar,
                breadcrumbs: false
            },
            {
                id: 'contact',
                title: <FormattedMessage id="contact" />,
                type: 'collapse',
                icon: icons.IconNfc,
                children: [
                    {
                        id: 'c-card',
                        title: <FormattedMessage id="cards" />,
                        type: 'item',
                        url: '/apps/contact/c-card',
                        breadcrumbs: false
                    },
                    {
                        id: 'c-list',
                        title: <FormattedMessage id="list" />,
                        type: 'item',
                        url: '/apps/contact/c-list',
                        breadcrumbs: false
                    }
                ]
            },
            {
                id: 'e-commerce',
                title: <FormattedMessage id="e-commerce" />,
                type: 'collapse',
                icon: icons.IconBasket,
                children: [
                    {
                        id: 'products',
                        title: <FormattedMessage id="products" />,
                        type: 'item',
                        url: '/apps/e-commerce/products'
                    },
                    {
                        id: 'product-details',
                        title: <FormattedMessage id="product-details" />,
                        type: 'item',
                        url: '/apps/e-commerce/product-details/1',
                        breadcrumbs: false
                    },
                    {
                        id: 'product-list',
                        title: <FormattedMessage id="product-list" />,
                        type: 'item',
                        url: '/apps/e-commerce/product-list',
                        breadcrumbs: false
                    },
                    {
                        id: 'checkout',
                        title: <FormattedMessage id="checkout" />,
                        type: 'item',
                        url: '/apps/e-commerce/checkout'
                    }
                ]
            }
        ]
    };
};

export default application();
