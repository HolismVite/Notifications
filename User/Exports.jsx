import NotificationsIcon from '@mui/icons-material/Notifications';
import Notifications from './List'
import HeaderNotificationsAction from './Header'

const NotificationsRoutes = [
    {
        path: "/notifications",
        component: Notifications
    }
]

const NotificationsMenu = [
    {
        title: "Notifications",
        icon: NotificationsIcon,
        url: "/notifications"
    }
]

export { NotificationsRoutes }
export { NotificationsMenu }
export { Notifications }
export { HeaderNotificationsAction }