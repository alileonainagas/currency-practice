import React from 'react';
import styled from '@emotion/styled';
import footerLogo from '../assets/ALA_Logo.svg';
import GithubLogo from '../assets/GitHubLogo.svg';
import FacebookLogo from '../assets/FacebookLogo.svg';
import LinkedLogo from '../assets/LinkedLogo.svg';
import CryptoLogo from '../assets/CryptoLogo.png';

const Footer = styled.footer`
    min-height: 25vh;
    background-color: #000;
    color: #F6E8EA;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media(max-width: 767px) {
        flex-direction: column;
    }
`;
const FooterLogo = styled.img`
    max-height: 284px;
    max-width: 231px;
    @media(max-width: 767px) {
        max-height: 234px;
        max-width: 181px;
        margin: 1rem auto;
    }
`;
const MediaList = styled.ul`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    li {
        margin: 0 1rem;
        list-style: none;
        text-decoration: none;
    }
    @media(max-width: 767px) {
        margin: 1.5rem auto;
    }
`;
const APILink = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        font-family: 'Bebas Neue', cursive;
	    letter-spacing: 3px;
        color: #F6E8EA;
        text-transform: uppercase;
        font-size: 1.25rem;
    }
    ul {
        margin-top: 1rem;
        li {
            list-style: none;
            text-decoration: none;
        }
    }
    @media(max-width: 767px) {
        margin: 1rem auto;
    }
`;

const AppFooter = () => {
    return (
        <Footer>
            <FooterLogo src={footerLogo} alt='ALA' />
            <MediaList>
                <li>
                    <a href="https://github.com/alileonainagas" rel="noreferrer" target="_blank" aria-label="Github">
                        <img src={GithubLogo} alt='github-img' />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/alí-león-ainagas-943333190/" rel="noreferrer" target="_blank" aria-label="LinkedIn">
                        <img src={LinkedLogo} alt='linked-img' />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/ali.leon.ainagas/" rel="noreferrer" target="_blank" aria-label="Facebook">
                        <img src={FacebookLogo} alt='facebook-img' />
                    </a>
                </li>
            </MediaList>
            <APILink>
                <h3>Powered by:</h3>
                <ul>
                    <li>
                        <a href="https://www.cryptocompare.com" rel="noreferrer" target="_blank" aria-label="CryptoCompare">
                            <img src={CryptoLogo} alt='cryptocompare-img' />
                        </a>
                    </li>
                </ul>
            </APILink>
        </Footer>
    );
}

export default AppFooter;