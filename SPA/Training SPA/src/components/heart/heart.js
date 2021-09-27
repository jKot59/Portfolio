import styled from 'styled-components';
import { connect } from 'react-redux';


const StyledHeart = styled.i`
    display: ${props => props.favorite ? 'auto' : 'none'};
    grid-column: 1;
    grid-row: 1;
    color: red;
    font-size: 55px;
    margin-top: -10px;
    margin-left: -10px;
`
function Heart (props) {
    return (
        <StyledHeart className='fa fa-heart' favorite={props.favorite}/>
    )
}

const mapStateToProps = (state) => {
    return {
        favorite: state.favorite
    }
}

export default connect(mapStateToProps)(Heart)