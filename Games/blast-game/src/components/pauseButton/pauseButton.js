import styled from "styled-components";
import pause from '../../imgs/pause.png';


const StyledPauseButton = styled.div`
    position: absolute;
    top: 0;
    left: 91%;
    width: 7.3%;
    height: 7.3%;
    background: url(${props => props.bg}) no-repeat;
    background-size: contain;
    background-position: center;
    cursor: pointer;
`

function PauseButton (props) {
    return (
        <StyledPauseButton bg={pause} onClick={props.setAPause}/>
    )
}

export default PauseButton