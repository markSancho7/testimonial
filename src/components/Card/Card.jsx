import {
	StyledCardName,
	StyledCardPictureAndName,
	StyledImg,
	StyledGlobalAttributes,
	StyledCardVerified,
	StyledCardOpinion,
	StyledCardDescription
} from './styles';

const Card = props => {
	return (
		<StyledGlobalAttributes
			$gridColumn={props.$gridColumn}
			$gridRow={props.$gridRow}
			$backgroundColor={props.$backgroundColor}
		>
			<StyledCardPictureAndName>
				<StyledImg src={props.link} alt='' />
				<div>
					<StyledCardName $colorName={props.$colorName}>
						{props.cardName}
					</StyledCardName>
					<StyledCardVerified $colorVerified={props.$colorVerified}>
						{props.cardVerified}
					</StyledCardVerified>
				</div>
			</StyledCardPictureAndName>

			<StyledCardOpinion $colorOpinion={props.$colorOpinion}>
				{props.cardOpinon}
			</StyledCardOpinion>
			<StyledCardDescription $colorDescription={props.$colorDescription}>
				{props.cardDescription}
			</StyledCardDescription>
		</StyledGlobalAttributes>
	);
};

export default Card;
