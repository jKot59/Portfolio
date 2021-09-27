import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
    line-height: 500px;
`
const ErrorMessage = () => {
    return <Span as = 'div'>Something was going wrong</Span>
}

export default ErrorMessage;