import React from 'react';
import {ListGroupItem, ListGroupItemHeading, ListGroupItemText} from 'reactstrap';

const ItemOfWork = ({item : {name, date, description}}) => {
    return (
        <ListGroupItem>
            <ListGroupItemHeading> {name} ({date}) </ListGroupItemHeading>
            <ListGroupItemText> {description} </ListGroupItemText>
        </ListGroupItem>
    )
}


export default ItemOfWork;