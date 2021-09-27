import React, {Component} from 'react'
import { ListGroup, ListGroupItem} from 'reactstrap';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { Container, Row, Col } from 'reactstrap';

const StyledListGroupItem = styled(ListGroupItem)`
    align-self: flex-end;
    span {
        margin-right: 20px;
    }
`
const StyledListGroup = styled(ListGroup)`
    position: absolute;
    top: 55%;
    left: 15%;
    width: 50%;
    /* overflow: hidden; */
    /* height: 100px; */
    // скрываем/раскрываем список работ при нажатии на works
    display: ${props => props.btnWorks ? 'grid' : 'none'};
    /* grid-template-columns: repeat(1, 1fr); */
    grid-auto-rows: minmax(auto, 100px);
    /* font-size: calc(20 * (100vw / 1200));   */
    user-select: none;
    li:first-child {
        justify-self: end;
    }
    li:not(:first-child) {
        grid-column: 1/2;
        transition: .3s;
        :hover{
        background-color: red;
        }
    }
`
class RenderWorks extends Component {
    render() {
        const {sortHeader, errorMessage,  btnWorks} = this.props
        return (
            <>
            <MediaQuery minWidth={1224}>
                <StyledListGroup btnWorks={btnWorks}>
                    <StyledListGroupItem>
                    {sortHeader}
                    </StyledListGroupItem>
                    {errorMessage}
                </StyledListGroup>
            </MediaQuery>
            </>
        )
    }
}


export default RenderWorks;