import React from 'react';
import { useSelector } from 'react-redux'; // Or any other state management you are using
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons-react';

const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = () => {
    const userRole = useSelector((state) => state.user.role); // Assuming you have access to the user's role

    return {
        id: 'dashboard',
        title: <FormattedMessage id="dashboard" />,
        icon: icons.IconDashboard,
        type: 'group',
        children: [
            {
                id: 'default',
                title: <FormattedMessage id="default" />,
                type: 'item',
                url: '/dashboard/default',
                icon: icons.IconDashboard,
                breadcrumbs: false
            },
            // Conditionally render the management dashboard only for Managers
            userRole === 'Manager' && {
                id: 'management',
                title: <FormattedMessage id="management" />,
                type: 'item',
                url: '/dashboard/analytics',
                icon: icons.IconDeviceAnalytics,
                breadcrumbs: false
            }
        ].filter(Boolean) // Filter out any undefined values from conditional rendering
    };
};

export default dashboard();
