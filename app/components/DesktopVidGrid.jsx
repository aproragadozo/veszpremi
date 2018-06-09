var React = require('react');

import styled from 'styled-components';
const Vid = require('Vid');

const StyledGrid = styled.div`
	display: grid;
	grid-row: full;
	grid-column: fill;
	grid-template-columns: repeat(4, [col] 1fr);
	grid-template-rows: auto;
	justify-items: center;
	align-items: center;
`;

function DesktopVidGrid(props) {
	return (
		<StyledGrid>
			{props.vids.map((vid) =>(
				<Vid key={vid.id} content={vid}/>
			))}
		</StyledGrid>
	)
}
module.exports = DesktopVidGrid;