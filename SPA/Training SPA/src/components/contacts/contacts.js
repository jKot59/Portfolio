import React, {Component} from 'react';
import {ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import StyledListGroup from '../contentContacts/contentContacts';
import ErrorMessage from '../errorMessage';
import { connect } from 'react-redux';
import { getContacts1 } from '../redux/action';
import getResource from '../../services/fetch/getResource';
import { Spinner } from 'reactstrap';

const StyledListGroupItem = styled(ListGroupItem)`
            span {
                font-weight: bold;
            }
        `

class Contacts extends Component {
    state = {
        loaded: false,
        error: false
    }
    componentDidMount () {
        const getContacts = new getResource()
        getContacts.getContacts()
        .then( res => this.props.getContacts1(res))
        .then( () => this.setState({
            loaded: true
        }))
    }
    componentDidCatch () {
        this.setState({
            error: true
        })
    }

    render() {
        const {id, error} = this.props

        const btnContacts = id === 'contacts' ? true : false;
        const {Email, phone, city} = this.props.contacts;
        //если данные не знагружены еще, то выводим спинер
        
        
        const contentContacts = (
            <>
                <StyledListGroupItem><span>E-mail: </span>{Email}</StyledListGroupItem>
                <StyledListGroupItem><span>Phone: </span>{phone}</StyledListGroupItem>
                <StyledListGroupItem><span>City: </span>{city}</StyledListGroupItem>
            </>
        )
        const errorMessage = error ? <ErrorMessage/> : contentContacts;
        return (
            // паттерн JSX как пропс
            <StyledListGroup 
                btnContacts={btnContacts}
                errorMessage={this.state.loaded ? errorMessage : <Spinner/>}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contactsStore
    }
}

const mapDispatchToProps = {
    getContacts1
}

export default connect (mapStateToProps, mapDispatchToProps)(Contacts)