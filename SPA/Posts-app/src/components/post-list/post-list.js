import React from 'react';
import PostListItem from '../post-list-item';
import '../post-list/post-list.css';
import { ListGroup } from 'reactstrap';


const PostList = ({posts, onDelete, onToggle}) => {

    const elements = posts.map( item => {
        const {id, like} = item;
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem
                 label={item.label} 
                 important={item.important}
                 like={like}
                 onDelete={() => onDelete(id)}
                 // передаем event в аргументы и вызываем в родителе
                 onToggle={ (e) => onToggle(id, e)}/>
            </li>
        )
    })
    
    return (
        <ListGroup className="app-list">
           {elements}
        </ListGroup>
    )
}

export default PostList;