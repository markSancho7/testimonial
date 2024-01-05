import { StyledCardName } from './styles';

const Card = props => {
	return (
		<div>
			<img src={props.link} alt='' />
			<StyledCardName>{props.cardName}</StyledCardName>
			<h4>{props.cardVerified}</h4>
			<h2>{props.cardOpinon}</h2>
			<h3>{props.cardDescription}</h3>
		</div>
	);
};

export default Card;
