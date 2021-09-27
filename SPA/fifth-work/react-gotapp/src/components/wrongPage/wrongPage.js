import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Message = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    font-size: 26px;
    margin-top: 250px;
    align-items: center;
    button {
        margin-top: 20px;
        width: 300px;
    }

`
const WrongPage = () => {
    return (
        <>
        <Message><span>No such page</span>
        <Button color='warning'>
            <Link to='/'>Back to main page</Link>
        </Button>
        </Message>
        </>
    )
}

export default WrongPage;