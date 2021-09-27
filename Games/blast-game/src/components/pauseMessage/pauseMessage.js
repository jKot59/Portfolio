import styled from "styled-components"

const StyledPause = styled.div`
    display: ${props => props.hidden};
`
export default function PauseMessage(props) {
    return (
        <StyledPause hidden={props.hidden}>
            <h3>PAUSED</h3>
            <span>Ни на что не влияет. Для демонтрации</span>
        </StyledPause>
    )
}