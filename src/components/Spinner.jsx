import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const skRotate = keyframes`
    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
`;
const skBounce = keyframes`
    0%,
    100% {
        transform: scale(0);
        -webkit-transform: scale(0);
    }
    50% {
        transform: scale(1);
        -webkit-transform: scale(1);
    }
`;
const SpinnerContainer = styled.div`
    margin: 70px auto;
    width: 40px;
    height: 40px;
    position: relative;
    text-align: center;
    -webkit-animation: ${skRotate} 2s infinite linear;
    animation: ${skRotate} 2s infinite linear;
    div {
        width: 60%;
        height: 60%;
        display: inline-block;
        position: absolute;
        top: 0;
        background-color: #66a2fe;
        border-radius: 100%;
        -webkit-animation: ${skBounce} 2s infinite ease-in-out;
        animation: ${skBounce} 2s infinite ease-in-out;
    }
    .dot2 {
        top: auto;
        bottom: 0;
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
    }
`;

const Spinner = () => {
    return (
        <SpinnerContainer>
            <div class="dot1"></div>
            <div class="dot2"></div>
        </SpinnerContainer>
    );
}

export default Spinner;