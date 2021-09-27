import React, {Component} from 'react';
import '../app/app.css'
import AppHeader from '../app-header'
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state= { 
            data : [
                {label: 'Going to learn React', important: true, like: false, id:1},
                {label: 'That is so good', important: false, like: false, id:2},
                {label: 'I need a break', important: false, like: false, id:3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    addItem = (body) => {
        // создаем новый пост
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        //добавляем его в стэйт
        this.setState(({data}) => {
            //делаем клон стэйта, потому что его нельзя менять и добавляем новый пост
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })


    }

    onToggle = (id, e) => {
        this.setState(({data}) => {
            const target = e.target
            const index = data.findIndex(item => item.id === id)
            const old = data[index];
            let newItem = {...old}
            if(target.matches('.app-list-item-label')) {
                newItem = {...old, like: !old.like};
            }
            if(target.matches('.btn-star')) {
                newItem = {...old, important: !old.important}
            }
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }


    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter( item => {
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter( item => item.like)
        } else {
            return items
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter}) // filter: filter
    }
    render() {
        const {data, term, filter} = this.state;
        
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter)
    return (
        <AppBlock>
            <AppHeader
            liked={liked}
            allPosts={allPosts}/>
            <div className='search-panel d-flex'>
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>
            <PostList 
            posts={visiblePosts}
            onDelete={this.deleteItem}
            onToggle={this.onToggle}
            />
            <PostAddForm
            //получаем функцию с кнопки удалить с аргументом
            onAdd={this.addItem}/>
        </AppBlock>
    )
    }
}