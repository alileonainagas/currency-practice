import React, { useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import axios from 'axios';

//Assets
import image from '././assets/cryptomonedas.png';
import favicon from '././assets/CPFavicon.svg'

//App Components
import Form from './components/Form';
import Cotization from './components/Cotization';
import Spinner from './components/Spinner';
import AppFooter from './components/Footer';
import AppHeader from './components/Header';

const Container = styled.div`
	min-height: 80vh;
  	max-width: 900px;
  	margin: 0 auto;
  	margin-bottom: 5rem;
  	text-align: center;
	padding: 20px;
	@media (min-width: 992px) {
		display: grid;
    	grid-template-columns: repeat(2, 1fr);
    	gap: 4rem;
	}
	`;
const CotizaContainer = styled.div`
	text-align: center;
	max-width: 450px;
	margin: 5vh auto;
	@media(max-width: 767px) {
		padding: 20px;
    } 
`;
const Image = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;
const Title = styled.h1`
	font-family: 'Bebas Neue', cursive;
	letter-spacing: 2px;
	color: #fff;
	text-align: left;
	font-weight: 700;
	font-size: 3rem;
	margin-bottom: 50px;
	margin-top: 80px;
	&::after {
		content: '';
		width: 100px;
		height: 6px;
		background-color: #66a2fe;
		display: block;
	}
	@media(max-width: 767px) {
		text-align: center;
        margin: 1.5rem auto;
    }
`;

function App() {

	const [coins, saveCoin] = useState('');
	const [cryptos, saveCrypto] = useState('');
	const [resume, saveResume] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const cotizeCryto = async () => {

			//Evitar ejecucion la primera vez
			if (coins === '') return;

			//Consultar API para obtener cotizacion
			try {
				const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptos}&tsyms=${coins}`;
				const result = await axios.get(url);

				//Mostrar Spinner de carga
				setLoading(true);

				//Ocultar Spinner y mostrar resultado
				setTimeout(() => {
					setLoading(false);

					//Guardar cotizacion
					saveResume(result.data.DISPLAY[cryptos][coins]);

				}, 4000);

			} catch (error) {
				console.log(error);
			}
		}
		cotizeCryto();
	}, [coins, cryptos]);

	return (
		<HelmetProvider>
			<>
				<Helmet>
					{/* Public Metadata implementation */}
					<link rel="icon" type="image/svg+xml" href={favicon} />
					<meta name="description" content="Single Page Application to primarily check upon crypto's pricing in real time." />
					<title>Currency Practice</title>
				</Helmet>
				<AppHeader />
				<Container>
					<div>
						<Image
							src={image}
							alt='image-crypto'
						/>
					</div>
					<div>
						<Title>Cotización de Criptomonedas</Title>
						<Form
							saveCoin={saveCoin}
							saveCrypto={saveCrypto}
						/>
					</div>
				</Container>
				<CotizaContainer>
					{
						loading ?
							<Spinner />
							: <Cotization
								resume={resume}
							/>
					}
				</CotizaContainer>
				<AppFooter />
			</>
		</HelmetProvider>

	);
}

export default App
