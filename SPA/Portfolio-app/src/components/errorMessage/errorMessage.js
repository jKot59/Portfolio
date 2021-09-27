import {ListGroupItem} from 'reactstrap';
import styled from 'styled-components';

const StyledListGroupItem = styled(ListGroupItem)`
    position: absolute;
    left: 50px;
    top: 50px;
`

const ErrorMessage = () => {
    return (
        <StyledListGroupItem>Something was going wrong</StyledListGroupItem>
    )
}
export default ErrorMessage;