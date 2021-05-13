import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global, css } from '@emotion/react';

ReactDOM.render(
	<React.StrictMode>
		<Global
			styles={css`
				* {
				    margin: 0;
				    padding: 0;
				    box-sizing: border-box;
				}
      			body {
      			  background: linear-gradient(
      			      90deg,
      			      rgba(159, 68, 42, 1) 4%,
      			      rgba(177, 83, 57, 1) 25%,
      			      rgba(92, 32, 16, 1) 46%,
      			      rgba(13, 30, 46, 1) 54%,
      			      rgba(24, 57, 87, 1) 75%,
      			      rgba(13, 34, 53, 1) 91%
      			  );
      			}   
    		`}
		/>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
