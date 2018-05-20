var React = require('react');

function Card(props) {
	return (
		<div className="cardContainer">
				<img className="cardImage" src={props.content.image}/>
					<div class="cardOverlay">
						<div class="cardText">
							<a href={props.content.link}>{props.content.text}</a>
						</div>
					</div>
				</div>
	)
}

module.exports = Card;