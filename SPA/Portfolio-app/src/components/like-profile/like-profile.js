import React, {Component} from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getFavorite } from '../redux/action';

const StyledButton = styled(Button)`
    grid-column: 1;
    /* grid-row: 3; */
    height: 40px;
    min-width: 300px;
    
    justify-self: center;
    align-self: start;
`
class LikeProfile extends Component {
    componentDidUpdate() {
        // записываем в локал значение "понравилось"
        localStorage.setItem('likeProfile', this.props.favorite)
    }

    render() {
        return (
                <StyledButton 
                color='primary'
                // запускаем экшн для получения в пропсы значения "понравилось" из стор
                onClick={this.props.getFavorite}
                >Like my portfolio</StyledButton>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favorite: state.favorite
    }
}

const mapDispatchToProps = {
    getFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeProfile);