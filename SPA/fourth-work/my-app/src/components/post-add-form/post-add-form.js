import React, {Component} from 'react';
import '../post-add-form/post-add-form.css';

export default class PostAddForm extends Component{ 
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        this.props.onAdd(this.state.text)
    }
    render() {
        
        return (
            <form className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
            <input
            className="form-control new-post-label"
            type="text"
            placeholder="О чем вы думаете сейчас?"
            onChange={this.onValueChange}
            />
            <button
                type='submit'
                className="btn btn-outline-secondary">
                Добавить</button>
            </form>
        )
    }
}