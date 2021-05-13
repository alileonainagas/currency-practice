import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultDiv = styled.div`
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    border: 1px solid rgba(255,255,255,0.2);
	border-radius: 1rem;
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 1.5rem;
`;
const Info = styled.p`
    font-size: 1rem;
    span {
        font-weight: bold;
    }
    `;
const Price = styled.p`
    font-size: 1.8rem;
    span {
        font-weight: bold;
    }
`;

const Cotization = ({ resume }) => {

    //Si el objeto llega vacio
    if (Object.keys(resume).length === 0) return null;

    return (
        <ResultDiv>
            <Price>Precio general: <span>{resume.PRICE}</span></Price>
            <Info>Precio más alto: <span>{resume.HIGHDAY}</span></Info>
            <Info>Precio más bajo: <span>{resume.LOWDAY}</span></Info>
            <Info>Variación en 24h: <span>{resume.CHANGEPCT24HOUR}%</span></Info>
            <Info>Última actualización: <span>{resume.LASTUPDATE}</span></Info>
        </ResultDiv>
    );
}

Cotization.propTypes = {
    resume: PropTypes.object.isRequired,
}

export default Cotization;