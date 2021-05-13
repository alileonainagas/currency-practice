import React from 'react';
import styled from '@emotion/styled';
import CPLogo from '../assets/CPLogo.svg';

const Header = styled.header`
    padding: 1rem 5rem;
    text-align: center;
`;


const AppHeader = () => {
    return (
        <Header>
            <img src={CPLogo} alt='currency-practice' />
        </Header>
    );
}

export default AppHeader;