import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';
// copilot keeps randomly adding code here??!!!

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardAnalytics = Loadable(lazy(() => import('views/dashboard/Analytics')));
const DashboardCompany = Loadable(lazy(() => import('views/dashboard/Company')));
const DashboardCoSkill = Loadable(lazy(() => import('views/dashboard/CoSkill')));
const DashboardEmCourse = Loadable(lazy(() => import('views/dashboard/EmCourse')));
const DashboardTraining = Loadable(lazy(() => import('views/dashboard/Training')));
const DashboardEmployee = Loadable(lazy(() => import('views/dashboard/Employee')));
const DashboardReports = Loadable(lazy(() => import('views/dashboard/Reports')));
const DashboardSkill = Loadable(lazy(() => import('views/dashboard/Skill')));

// widget routing

// application - user social & account profile routing
const AppUserSocialProfile = Loadable(lazy(() => import('views/application/users/social-profile')));
const AppUserAccountProfile1 = Loadable(lazy(() => import('views/application/users/account-profile/Profile1')));
const AppUserAccountProfile2 = Loadable(lazy(() => import('views/application/users/account-profile/Profile2')));
const AppUserAccountProfile3 = Loadable(lazy(() => import('views/application/users/account-profile/Profile3')));

// application - user cards & list variant routing
const AppProfileCardStyle1 = Loadable(lazy(() => import('views/application/users/card/CardStyle1')));
const AppProfileCardStyle2 = Loadable(lazy(() => import('views/application/users/card/CardStyle2')));
const AppProfileCardStyle3 = Loadable(lazy(() => import('views/application/users/card/CardStyle3')));
const AppProfileListStyle1 = Loadable(lazy(() => import('views/application/users/list/Style1')));
const AppProfileListStyle2 = Loadable(lazy(() => import('views/application/users/list/Style2')));

// application - customer routing
const AppCustomerList = Loadable(lazy(() => import('views/application/customer/CustomerList')));
const AppCustomerOrderList = Loadable(lazy(() => import('views/application/customer/OrderList')));
const AppCustomerCreateInvoice = Loadable(lazy(() => import('views/application/customer/CreateInvoice')));
const AppCustomerOrderDetails = Loadable(lazy(() => import('views/application/customer/OrderDetails')));
const AppCustomerProduct = Loadable(lazy(() => import('views/application/customer/Product')));
const AppCustomerProductReview = Loadable(lazy(() => import('views/application/customer/ProductReview')));

// application routing
const AppChat = Loadable(lazy(() => import('views/application/chat')));
const AppKanban = Loadable(lazy(() => import('views/application/kanban')));
const AppKanbanBacklogs = Loadable(lazy(() => import('views/application/kanban/Backlogs')));
const AppKanbanBoard = Loadable(lazy(() => import('views/application/kanban/Board')));
const AppMail = Loadable(lazy(() => import('views/application/mail')));
const AppUpload = Loadable(lazy(() => import('views/application/bulkupload')));
const AddStaff = Loadable(lazy(() => import('views/application/add-staff')));
const AppCalendar = Loadable(lazy(() => import('views/application/calendar')));
const AppContactCard = Loadable(lazy(() => import('views/application/contact/Card')));
const AppContactList = Loadable(lazy(() => import('views/application/contact/List')));

// application e-commerce pages
const AppECommProducts = Loadable(lazy(() => import('views/application/e-commerce/Products')));
const AppECommProductDetails = Loadable(lazy(() => import('views/application/e-commerce/ProductDetails')));
const AppECommProductList = Loadable(lazy(() => import('views/application/e-commerce/ProductList')));
const AppECommCheckout = Loadable(lazy(() => import('views/application/e-commerce/Checkout')));

// map routing
const AppMap = Loadable(lazy(() => import('views/application/map')));

// forms component routing
const FrmComponentsTextfield = Loadable(lazy(() => import('views/forms/components/TextField')));
const FrmComponentsButton = Loadable(lazy(() => import('views/forms/components/Button')));
const FrmComponentsCheckbox = Loadable(lazy(() => import('views/forms/components/Checkbox')));
const FrmComponentsRadio = Loadable(lazy(() => import('views/forms/components/Radio')));
const FrmComponentsSwitch = Loadable(lazy(() => import('views/forms/components/Switch')));
const FrmComponentsAutoComplete = Loadable(lazy(() => import('views/forms/components/AutoComplete')));
const FrmComponentsSlider = Loadable(lazy(() => import('views/forms/components/Slider')));
const FrmComponentsDateTime = Loadable(lazy(() => import('views/forms/components/DateTime')));

// forms plugins layout
const FrmLayoutLayout = Loadable(lazy(() => import('views/forms/layouts/Layouts')));
const FrmLayoutMultiColumnForms = Loadable(lazy(() => import('views/forms/layouts/MultiColumnForms')));
const FrmLayoutActionBar = Loadable(lazy(() => import('views/forms/layouts/ActionBar')));
const FrmLayoutStickyActionBar = Loadable(lazy(() => import('views/forms/layouts/StickyActionBar')));

// forms plugins routing
const FrmAutocomplete = Loadable(lazy(() => import('views/forms/plugins/AutoComplete')));
const FrmMask = Loadable(lazy(() => import('views/forms/plugins/Mask')));
const FrmClipboard = Loadable(lazy(() => import('views/forms/plugins/Clipboard')));
const FrmRecaptcha = Loadable(lazy(() => import('views/forms/plugins/Recaptcha')));
const FrmWysiwugEditor = Loadable(lazy(() => import('views/forms/plugins/WysiwugEditor')));
const FrmModal = Loadable(lazy(() => import('views/forms/plugins/Modal')));
const FrmTooltip = Loadable(lazy(() => import('views/forms/plugins/Tooltip')));

// table routing
const TableBasic = Loadable(lazy(() => import('views/forms/tables/TableBasic')));
const TableDense = Loadable(lazy(() => import('views/forms/tables/TableDense')));
const TableEnhanced = Loadable(lazy(() => import('views/forms/tables/TableEnhanced')));
const TableData = Loadable(lazy(() => import('views/forms/tables/TableData')));
const TableCustomized = Loadable(lazy(() => import('views/forms/tables/TablesCustomized')));
const TableStickyHead = Loadable(lazy(() => import('views/forms/tables/TableStickyHead')));
const TableCollapsible = Loadable(lazy(() => import('views/forms/tables/TableCollapsible')));

// forms validation
const FrmFormsValidation = Loadable(lazy(() => import('views/forms/forms-validation')));
const FrmFormsWizard = Loadable(lazy(() => import('views/forms/forms-wizard')));

// chart routing
const ChartApexchart = Loadable(lazy(() => import('views/forms/chart/Apexchart')));
const OrgChartPage = Loadable(lazy(() => import('views/forms/chart/OrgChart')));

// basic ui-elements routing
const BasicUIAccordion = Loadable(lazy(() => import('views/ui-elements/basic/UIAccordion')));
const BasicUIAvatar = Loadable(lazy(() => import('views/ui-elements/basic/UIAvatar')));
const BasicUIBadges = Loadable(lazy(() => import('views/ui-elements/basic/UIBadges')));
const BasicUIBreadcrumb = Loadable(lazy(() => import('views/ui-elements/basic/UIBreadcrumb')));
const BasicUICards = Loadable(lazy(() => import('views/ui-elements/basic/UICards')));
const BasicUIChip = Loadable(lazy(() => import('views/ui-elements/basic/UIChip')));
const BasicUIList = Loadable(lazy(() => import('views/ui-elements/basic/UIList')));
const BasicUITabs = Loadable(lazy(() => import('views/ui-elements/basic/UITabs')));

// advance ui-elements routing
const AdvanceUIAlert = Loadable(lazy(() => import('views/ui-elements/advance/UIAlert')));
const AdvanceUIDialog = Loadable(lazy(() => import('views/ui-elements/advance/UIDialog')));
const AdvanceUIPagination = Loadable(lazy(() => import('views/ui-elements/advance/UIPagination')));
const AdvanceUIProgress = Loadable(lazy(() => import('views/ui-elements/advance/UIProgress')));
const AdvanceUIRating = Loadable(lazy(() => import('views/ui-elements/advance/UIRating')));
const AdvanceUISnackbar = Loadable(lazy(() => import('views/ui-elements/advance/UISnackbar')));
const AdvanceUISkeleton = Loadable(lazy(() => import('views/ui-elements/advance/UISkeleton')));
const AdvanceUISpeeddial = Loadable(lazy(() => import('views/ui-elements/advance/UISpeeddial')));
const AdvanceUITimeline = Loadable(lazy(() => import('views/ui-elements/advance/UITimeline')));
const AdvanceUIToggleButton = Loadable(lazy(() => import('views/ui-elements/advance/UIToggleButton')));
const AdvanceUITreeview = Loadable(lazy(() => import('views/ui-elements/advance/UITreeview')));

// pricing page routing
const PagesPrice1 = Loadable(lazy(() => import('views/pages/pricing/Price1')));
const PagesPrice2 = Loadable(lazy(() => import('views/pages/pricing/Price2')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsAnimation = Loadable(lazy(() => import('views/utilities/Animation')));
const UtilsGrid = Loadable(lazy(() => import('views/utilities/Grid')));
const UtilsEdit = Loadable(lazy(() => import('views/utilities/editinduction')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const Skills = Loadable(lazy(() => import('views/skills')));
const SkillCompany = Loadable(lazy(() => import('views/skill-company')));
const SkillReport = Loadable(lazy(() => import('views/skill-report')));
const EmployeeSkill = Loadable(lazy(() => import('views/employee-skill')));
4;
const FullReport = Loadable(lazy(() => import('views/full-report-monks')));
const Employee = Loadable(lazy(() => import('views/employee')));
const Employeefilter = Loadable(lazy(() => import('views/employeefilter')));
const Foxtable = Loadable(lazy(() => import('views/foxtable')));
const Reports = Loadable(lazy(() => import('views/reports')));
const Foxskills = Loadable(lazy(() => import('views/foxskills')));
const Certificates = Loadable(lazy(() => import('views/certs')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/apps/user/social-profile/:tab',
            element: <AppUserSocialProfile />
        },
        {
            path: '/apps/user/account-profile/profile1',
            element: <AppUserAccountProfile1 />
        },
        {
            path: '/apps/user/account-profile/profile2',
            element: <AppUserAccountProfile2 />
        },
        {
            path: '/apps/user/account-profile/profile3',
            element: <AppUserAccountProfile3 />
        },

        {
            path: '/apps/user/card/card1',
            element: <AppProfileCardStyle1 />
        },
        {
            path: '/apps/user/card/card2',
            element: <AppProfileCardStyle2 />
        },
        {
            path: '/apps/user/card/card3',
            element: <AppProfileCardStyle3 />
        },
        {
            path: '/apps/user/list/list1',
            element: <AppProfileListStyle1 />
        },
        {
            path: '/apps/user/list/list2',
            element: <AppProfileListStyle2 />
        },

        {
            path: '/apps/customer/customer-list',
            element: <AppCustomerList />
        },
        {
            path: '/apps/customer/order-list',
            element: <AppCustomerOrderList />
        },
        {
            path: '/apps/customer/create-invoice',
            element: <AppCustomerCreateInvoice />
        },
        {
            path: '/apps/customer/order-details',
            element: <AppCustomerOrderDetails />
        },
        {
            path: '/apps/customer/product',
            element: <AppCustomerProduct />
        },
        {
            path: '/apps/customer/product-review',
            element: <AppCustomerProductReview />
        },

        {
            path: '/apps/chat',
            element: <AppChat />
        },
        {
            path: '/apps/mail',
            element: <AppMail />
        },
        {
            path: '/apps/bulkupload',
            element: <AppUpload />
        },
        {
            path: '/apps/add-staff',
            element: <AddStaff />
        },
        {
            path: '/apps/kanban',
            element: <AppKanban />,
            children: [
                {
                    path: 'backlogs',
                    element: <AppKanbanBacklogs />
                },
                {
                    path: 'board',
                    element: <AppKanbanBoard />
                }
            ]
        },
        {
            path: '/apps/calendar',
            element: <AppCalendar />
        },
        {
            path: '/apps/contact/c-card',
            element: <AppContactCard />
        },
        {
            path: '/apps/contact/c-list',
            element: <AppContactList />
        },

        {
            path: '/apps/e-commerce/products',
            element: <AppECommProducts />
        },
        {
            path: '/apps/e-commerce/product-details/:id',
            element: <AppECommProductDetails />
        },
        {
            path: '/apps/e-commerce/product-list',
            element: <AppECommProductList />
        },
        {
            path: '/apps/e-commerce/checkout',
            element: <AppECommCheckout />
        },
        {
            path: '/components/text-field',
            element: <FrmComponentsTextfield />
        },
        {
            path: '/components/button',
            element: <FrmComponentsButton />
        },
        {
            path: '/components/checkbox',
            element: <FrmComponentsCheckbox />
        },
        {
            path: '/components/radio',
            element: <FrmComponentsRadio />
        },
        {
            path: '/components/autocomplete',
            element: <FrmComponentsAutoComplete />
        },
        {
            path: '/components/slider',
            element: <FrmComponentsSlider />
        },
        {
            path: '/components/switch',
            element: <FrmComponentsSwitch />
        },
        {
            path: '/components/date-time',
            element: <FrmComponentsDateTime />
        },

        {
            path: '/forms/layouts/layouts',
            element: <FrmLayoutLayout />
        },
        {
            path: '/forms/layouts/multi-column-forms',
            element: <FrmLayoutMultiColumnForms />
        },
        {
            path: '/forms/layouts/action-bar',
            element: <FrmLayoutActionBar />
        },
        {
            path: '/forms/layouts/sticky-action-bar',
            element: <FrmLayoutStickyActionBar />
        },

        {
            path: '/forms/frm-autocomplete',
            element: <FrmAutocomplete />
        },
        {
            path: '/forms/frm-mask',
            element: <FrmMask />
        },
        {
            path: '/forms/map',
            element: <AppMap />
        },
        {
            path: '/forms/frm-clipboard',
            element: <FrmClipboard />
        },
        {
            path: '/forms/frm-recaptcha',
            element: <FrmRecaptcha />
        },
        {
            path: '/forms/frm-wysiwug',
            element: <FrmWysiwugEditor />
        },
        {
            path: '/forms/frm-modal',
            element: <FrmModal />
        },
        {
            path: '/forms/frm-tooltip',
            element: <FrmTooltip />
        },

        {
            path: '/tables/tbl-basic',
            element: <TableBasic />
        },
        {
            path: '/tables/tbl-dense',
            element: <TableDense />
        },
        {
            path: '/tables/tbl-enhanced',
            element: <TableEnhanced />
        },
        {
            path: '/tables/tbl-data',
            element: <TableData />
        },
        {
            path: '/tables/tbl-customized',
            element: <TableCustomized />
        },
        {
            path: '/tables/tbl-sticky-header',
            element: <TableStickyHead />
        },
        {
            path: '/tables/tbl-collapse',
            element: <TableCollapsible />
        },

        {
            path: 'forms/charts/apexchart',
            element: <ChartApexchart />
        },
        {
            path: '/forms/charts/orgchart',
            element: <OrgChartPage />
        },
        {
            path: '/forms/forms-validation',
            element: <FrmFormsValidation />
        },
        {
            path: '/forms/forms-wizard',
            element: <FrmFormsWizard />
        },

        {
            path: '/basic/accordion',
            element: <BasicUIAccordion />
        },
        {
            path: '/basic/avatar',
            element: <BasicUIAvatar />
        },
        {
            path: '/basic/badges',
            element: <BasicUIBadges />
        },
        {
            path: '/basic/breadcrumb',
            element: <BasicUIBreadcrumb />
        },
        {
            path: '/basic/cards',
            element: <BasicUICards />
        },
        {
            path: '/basic/chip',
            element: <BasicUIChip />
        },
        {
            path: '/basic/list',
            element: <BasicUIList />
        },
        {
            path: '/basic/tabs',
            element: <BasicUITabs />
        },

        {
            path: '/advance/alert',
            element: <AdvanceUIAlert />
        },
        {
            path: '/advance/dialog',
            element: <AdvanceUIDialog />
        },
        {
            path: '/advance/pagination',
            element: <AdvanceUIPagination />
        },
        {
            path: '/advance/progress',
            element: <AdvanceUIProgress />
        },
        {
            path: '/advance/rating',
            element: <AdvanceUIRating />
        },
        {
            path: '/advance/snackbar',
            element: <AdvanceUISnackbar />
        },
        {
            path: '/advance/skeleton',
            element: <AdvanceUISkeleton />
        },
        {
            path: '/advance/speeddial',
            element: <AdvanceUISpeeddial />
        },
        {
            path: '/advance/timeline',
            element: <AdvanceUITimeline />
        },
        {
            path: '/advance/toggle-button',
            element: <AdvanceUIToggleButton />
        },
        {
            path: '/advance/treeview',
            element: <AdvanceUITreeview />
        },

        {
            path: '/pages/price/price1',
            element: <PagesPrice1 />
        },
        {
            path: '/pages/price/price2',
            element: <PagesPrice2 />
        },

        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/utils/util-animation',
            element: <UtilsAnimation />
        },
        {
            path: '/utils/util-grid',
            element: <UtilsGrid />
        },
        {
            path: '/utils/edit-induction',
            element: <UtilsEdit />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },
        {
            path: '/skills',
            element: <Skills />
        },
        {
            path: '/skill-company',
            element: <SkillCompany />
        },
        {
            path: '/full-report-monks',
            element: <FullReport />
        },
        {
            path: '/skill-report/:companyId/:skillId/:courseId',
            element: <SkillReport />
        },
        {
            path: '/skill-report/:companyId/:skillId',
            element: <SkillReport />
        },
        {
            path: '/skill-report/:companyId',
            element: <SkillReport />
        },
        {
            path: '/skill-report',
            element: <SkillReport />
        },
        {
            path: '/employee-skill/:companyId/:skillId',
            element: <EmployeeSkill />
        },
        {
            path: '/employee-skill/:companyId',
            element: <EmployeeSkill />
        },
        {
            path: '/employee-skill',
            element: <EmployeeSkill />
        },
        {
            path: '/employee/:Id/:companyId',
            element: <Employee />
        },
        {
            path: '/employee/:Id',
            element: <Employee />
        },
        {
            path: '/employee',
            element: <Employee />
        },
        {
            path: '/employeefilter',
            element: <Employeefilter />
        },
        {
            path: '/foxtable',
            element: <Foxtable />
        },
        {
            path: '/reports',
            element: <Reports />
        },
        {
            path: '/foxskills/:companyId/:skillId',
            element: <Foxskills />
        },

        {
            path: '/foxskills/:companyId',
            element: <Foxskills />
        },

        {
            path: '/foxskills',
            element: <Foxskills />
        },
        {
            path: '/certificates',
            element: <Certificates />
        },

        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/analytics',
            element: <DashboardAnalytics />
        },
        {
            path: '/dashboard/reports',
            element: <DashboardReports />
        },
        {
            path: '/dashboard/emcourse/:employee/:course',
            element: <DashboardEmCourse />
        },
        {
            path: '/dashboard/emcourse/:course',
            element: <DashboardEmCourse />
        },
        {
            path: '/dashboard/emcourse',
            element: <DashboardEmCourse />
        },
        {
            path: '/dashboard/coskill/:company/:skill',
            element: <DashboardCoSkill />
        },
        {
            path: '/dashboard/coskill/:company',
            element: <DashboardCompany />
        },
        {
            path: '/dashboard/training/:companyId',
            element: <DashboardTraining />
        },
        {
            path: '/dashboard/training',
            element: <DashboardTraining />
        },

        {
            path: '/dashboard/employee/:id/:courseId/:companyId',
            element: <DashboardEmployee />
        },

        {
            path: '/dashboard/employee/:id/:courseId',
            element: <DashboardEmployee />
        },

        {
            path: '/dashboard/employee/:id',
            element: <DashboardEmployee />
        },
        {
            path: '/dashboard/employee',
            element: <DashboardEmployee />
        },
        {
            path: '/dashboard/skill/:skillId/:companyId',
            element: <DashboardSkill />
        }
    ]
};

export default MainRoutes;
