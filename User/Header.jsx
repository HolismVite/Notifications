import { useState, useEffect } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { app } from '@Panel';
import { HeaderAction } from '@Panel';

let notifs = [];

const Notifications = () => {

    const [lastNotif, setLastNotif] = useState(Date.now());

    useEffect(() => {
        var channel = app.subscribe('notifications');
        channel.bind('notify', function (data) {
            notifs = [data.message, ...notifs];
            setLastNotif(Date.now());
        });
        return () => {
            app.unsubscribe('notifications');
        }
    }, [notifs]);

    useEffect(() => {
        // console.log(notifs);
    }, [notifs]);

    return <div className="fixed top-16 right-10 bg-white px-5 rounded-md">
        {
            notifs.length === 0
                ?
                <div className="py-5">No message</div>
                :
                <>
                    <div>{lastNotif}</div>
                    {
                        notifs.map(notif => {
                            return <div className="py-5 border-bottom">{notif}</div>
                        })
                    }
                </>
        }
    </div>
}

const HeaderNotificationsAction = () => {
    return <>
        <HeaderAction
            title="Notifications"
            icon={NotificationsIcon}
            component={Notifications}
        />
    </>
}

export default HeaderNotificationsAction;