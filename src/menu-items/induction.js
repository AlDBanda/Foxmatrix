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
    title: <FormattedMessage id="Induction" />,
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'admin',
            title: <FormattedMessage id="Induction" />,
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'management',
            title: <FormattedMessage id="Management" />,
            type: 'item',
            url: '/dashboard/analytics',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        },
        {
            id: 'training',
            title: <FormattedMessage id="My Company" />,
            type: 'item',
            url: '/dashboard/training',
            icon: icons.IconChartInfographic,
            breadcrumbs: false
        },
        {
            id: 'edit-induction',
            title: <FormattedMessage id="Induction Pages" />,
            type: 'item',
            url: 'utils/edit-induction',
            icon: icons.IconLayoutGridAdd,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
