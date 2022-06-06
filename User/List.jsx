import { List, ListAction, ItemAction } from '@List';

const card = (item) => {
    return <div>
        {item.userGuid}
    </div>
}

const itemActions = (item) => {
    return <ItemAction
        icon="Check"
    />
}

const Notifications = () => {
    return <List
        title="Notifications"
        entityType='notification'
        // listActions={listActions}
        //filters={filters}
        //sorts={sorts}
        card={card}
        //itemActions={itemActions}
    />
}

export default Notifications;