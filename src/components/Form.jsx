import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import PropTypes from 'prop-types';
import Errory from './Errory';
import useCoin from '../hooks/useCoin';
import useCrypto from '../hooks/useCrypto';

const Button = styled.input`
    font-family: 'Noto Sans JP', sans-serif;
    letter-spacing: 2px;
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    width: 100%;
    color: #fff;
    border: 1px solid rgba(255,255,255,0.2);
	border-radius: .5rem;
    background: rgba(255,255,255,0.4);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    transition: background-color .3s ease;
    &:hover {
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Form = ({ saveCoin, saveCrypto }) => {

    const COINS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ]

    //Estado del formulario para las crytomonedas
    const [crytoList, saveCrytoList] = useState([]);
    const [error, setError] = useState(false);

    //Uso de custom Hook de Coin
    const [coin, SelectCoin] = useCoin('Elige tu Moneda Local', '', COINS);

    //Uso de custom Hook de Cryptos
    const [crypto, SelectCrypto] = useCrypto('Elige Criptomoneda', '', crytoList);

    //Ciclo de vida del componente llamando a la API 
    useEffect(() => {
        const consultAPI = async () => {
            try {
                const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
                const result = await axios.get(url);
                saveCrytoList(result.data.Data);
            } catch (error) {
                console.log(error);
            }
        }
        consultAPI();
    }, []);

    //Cuando el usuario haga submit
    const cotizaCoin = e => {
        e.preventDefault();

        //Validar existencia de data en los campos
        if (coin === '' || crypto === '') {
            setError(true);
            return;
        }

        //Pasar data a componente principal
        setError(false);
        saveCoin(coin);
        saveCrypto(crypto);
    }

    return (
        <form
            onSubmit={cotizaCoin}
        >
            {
                error &&
                <Errory message='Todos los campos son obligatorios' />
            }
            <SelectCoin />
            <SelectCrypto />
            <Button
                type='submit'
                value='Calcular'
            />
        </form>
    );
}

Form.propTypes = {
    saveCoin: PropTypes.func.isRequired,
    saveCrypto: PropTypes.func.isRequired
}

export default Form;