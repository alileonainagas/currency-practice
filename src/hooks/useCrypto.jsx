import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 2px;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
    `;
const Select = styled.select`
    font-family: 'Noto Sans JP', sans-serif;
    display: block;
    font-size: 1.2rem;
    width: 100%;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
`;

const useCypto = (label, stateInitial, crytoOptions) => {

    //State del Custom Hook
    const [state, actState] = useState(stateInitial);

    const selectorCrypto = () => (
        <>
            <Label>{label}</Label>
            <Select
                onChange={e => actState(e.target.value)}
                value={state}
            >
                <option value=''>-- Seleccione --</option>
                {
                    crytoOptions.map(option => (
                        <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                    ))
                }
            </Select>
        </>
    );

    //Retorno de estado, interfaz y funcion que modifica el estado
    return [state, selectorCrypto, actState];
}

useCypto.propTypes = {
    label: PropTypes.string.isRequired,
    stateInitial: PropTypes.string.isRequired,
    crytoOptions: PropTypes.array.isRequired,
}

export default useCypto;