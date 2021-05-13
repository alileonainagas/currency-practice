import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ErrorMessage = styled.p`
    background-color: #b7322b;
    padding: 1rem;
    color: #fff;
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Errory = ({ message }) => {
    return (
        <ErrorMessage>
            {message}
        </ErrorMessage>
    );
}

Errory.propTypes = {
    message: PropTypes.string.isRequired
}

export default Errory;