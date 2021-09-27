import React, {Component} from 'react';
import styled from 'styled-components';
import { ListGroup} from 'reactstrap';


class StyledListGroup extends Component { 
    render () {
        const {btnContacts, x, errorMessage} = this.props
        
        const Test = styled(ListGroup)`
            position: absolute;
            display: ${btnContacts ? '' : 'none'};
            right: 10px;
            top: 700px;
            width: 300px;
        `
        return (
            <Test>
                {errorMessage}
                {x}
            </Test>
        )
}
}
export default StyledListGroup;