import { List, ListAction, EntityAction } from '@List';

const card = (item) => {
    return <div>
        {item.userGuid}
    </div>
}

const entityActions = (item) => {
    return <EntityAction
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
        //entityActions={entityActions}
    />
}

export default Notifications;