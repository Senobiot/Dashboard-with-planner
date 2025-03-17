import { DashboardOutlined } from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { ROUTES_NAV } from 'constants/Routes';

const dashBoardNavTree = [
  {
    key: 'home',
    path: `${APP_PREFIX_PATH}${ROUTES_NAV.home}`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: 'planner',
    path: `${APP_PREFIX_PATH}${ROUTES_NAV.planner}`,
    title: 'planner',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;
