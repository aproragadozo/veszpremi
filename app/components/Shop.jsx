var React = require('react');

import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 3s linear infinite;
  padding: 2rem 1rem;
	font-size: 1.2rem;
`;

const ShoeImage = styled.div`
        grid-row: wrapperNav 3 / span 10;
				grid-column: wrapperCol 1 / span 6;
				background: white;
        background-size: cover;
        background-position: center;
				background-repeat: no-repeat;
				display: flex;
				justify-content: center;
				align-items: center;

        @media only screen and (min-width: 760px) {
            grid-row: meat;
            grid-column: cal / span 7;
				}
			}
    `;

function Shop(props){
    return (
			<ShoeImage>
				<Rotate>
					<img src={props.spinner} style={{maxWidth: "30vw"}}/>
				</Rotate>
				<p style={{fontSize: "13vmin", textTransform: "uppercase", position: "absolute", textAlign: "center"}}>Webshop coming soon</p>
			</ShoeImage>
    )
   } 
module.exports = Shop;