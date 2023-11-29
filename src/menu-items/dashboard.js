// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconChartInfographic, IconDeviceAnalytics } from '@tabler/icons-react';

const icons = {
    IconDashboard,
    IconChartInfographic,
    IconDeviceAnalytics
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'dashboard',
    title: <FormattedMessage id="dashboard" />,
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'admin',
            title: <FormattedMessage id="Admin" />,
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false,
            roles: ['admin'] // Only accessible by admins
        },
        {
            id: 'management',
            title: <FormattedMessage id="Management" />,
            type: 'item',
            url: '/dashboard/analytics',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false,
            roles: ['manager'] // Only accessible by managers
        },
        {
            id: 'training',
            title: <FormattedMessage id="My Company" />,
            type: 'item',
            url: '/dashboard/training/3',
            icon: icons.IconChartInfographic,
            breadcrumbs: false,
            roles: ['employee', 'manager', 'admin'] // Accessible by employees, managers, and admins
        }
    ]
};

export default dashboard;
