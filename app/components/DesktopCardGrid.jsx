var React = require('react');

import styled from 'styled-components';
const Card = require('Card');

const StyledGrid = styled.div`
	display: grid;
	grid-row: full;
	grid-column: fill;
	grid-template-columns: repeat(4, [col] 1fr);
	grid-template-rows: auto;
	justify-ttems: center;
	align-items: center;
`;

function DesktopCardGrid(props) {
	return (
		<StyledGrid>
			{props.cards.map((card) =>(
				<Card content={card}/>
			))}
		</StyledGrid>
	)
}
module.exports = DesktopCardGrid;