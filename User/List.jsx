import { List } from '@List';

const card = (item) => {
    return <div>
        {item.userGuid}
    </div>
}

const Notifications = () => {
    return <List
        title="Notifications"
        entityType='notification'
        card={card}
    />
}

export default Notifications;