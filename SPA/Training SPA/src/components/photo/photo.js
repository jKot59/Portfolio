import React, {Component} from 'react';
import styled from 'styled-components';
import Heart from '../heart/heart';

const PhotoDiv = styled.div`
        display: flex;
        grid-column: 1;
        grid-row: 1;
        border-radius: 20px;
        height: 300px;
        min-width: 300px;
        justify-self: center;
        background: url(${props => props.url}) no-repeat center;
        background-position-y: -50px;
        background-size: cover;
        font-size: 50px;
        font-weight: bold;
        box-shadow: 1px 1px 10px 2px;
        padding-left: -10px;
    `

class Photo extends Component {
    render() {
        return (
            <PhotoDiv url={this.props.url}>
                <Heart/>
            </PhotoDiv>
        )
    }
}

export default Photo