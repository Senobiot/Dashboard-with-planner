import {
  AppstoreAddOutlined,
  DashboardOutlined,
  FileTextOutlined,
  EnvironmentOutlined,
  MailOutlined,
  ShoppingCartOutlined,
  LockOutlined,
  TeamOutlined,
  GroupOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  AimOutlined,
  SettingOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { ROUTES_NAV } from 'constants/Routes';

const mainNavTree = [
  {
    key: 'main',
    path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}`,
    title: 'Основные',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: 'dashboard',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.dashboard}`,
        title: 'Дашбоард',
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'planner',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.planner}`,
        title: 'Планировщик',
        icon: AppstoreAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'catalogue',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.catalogue.inner}`,
        title: 'Каталог',
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'goods',
            path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.catalogue.inner}${ROUTES_NAV.main.catalogue.goods}`,
            title: 'Товары',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'catagory',
            path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.catalogue.inner}${ROUTES_NAV.main.catalogue.category}`,
            title: 'Категории',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'collections',
            path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.catalogue.inner}${ROUTES_NAV.main.catalogue.collections}`,
            title: 'Коллекции',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'combo',
            path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.catalogue.inner}${ROUTES_NAV.main.catalogue.combo}`,
            title: 'Комбо',
            icon: '',
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'orders',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.orders}`,
        title: 'Заказы',
        icon: LockOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'clients',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.clients.inner}`,
        title: 'Клиенты',
        icon: TeamOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: 'clients-list',
            path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.clients.inner}${ROUTES_NAV.main.clients.list}`,
            title: 'Список клиентов',
            icon: UserOutlined,
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'clients-groips',
            path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.clients.inner}${ROUTES_NAV.main.clients.groups}`,
            title: 'Группы клиентов',
            icon: GroupOutlined,
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'banners',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.banners}`,
        title: 'Баннеры',
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'promocodes',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.promocodes}`,
        title: 'Промокоды',
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'offline',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.offline.inner}`,
        title: 'Оффлайн точки',
        icon: '',
        breadcrumb: true,
        submenu: [
          {
            key: 'adresses',
            path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.offline.inner}${ROUTES_NAV.main.offline.adresses}`,
            title: 'Адреса',
            icon: EnvironmentOutlined,
            breadcrumb: false,
            submenu: [],
          },
          {
            key: 'geozones',
            path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.offline.inner}${ROUTES_NAV.main.offline.geozones}`,
            title: 'Геозоны',
            icon: AimOutlined,
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: 'personal',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.personal}`,
        title: 'Сотрудники',
        icon: TeamOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'mailers',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}${ROUTES_NAV.main.mailers}`,
        title: 'Рассылки',
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemNavTree = [
  {
    key: 'system',
    path: `${APP_PREFIX_PATH}${ROUTES_NAV.system.inner}`,
    title: 'СИСТЕМНЫЕ',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'preferences',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.system.inner}${ROUTES_NAV.system.preferences}`,
        title: 'Настройки',
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'mobile-app',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.system.inner}${ROUTES_NAV.system.mobile}`,
        title: 'Мобильное приложение',
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: 'logs',
        path: `${APP_PREFIX_PATH}${ROUTES_NAV.system.inner}${ROUTES_NAV.system.logs}`,
        title: 'Логи',
        icon: FileTextOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...mainNavTree, ...systemNavTree];

export default navigationConfig;
