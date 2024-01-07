import styled from 'styled-components';

const StyledGlobalAttributes = styled.div`
	box-sizing: border-box;
	background-color: ${props => props.$backgroundColor};
	padding: 30px;
	border-radius: 10px;
	margin: 20px;
	grid-column: ${props => props.$gridColumn};
	grid-row: ${props => props.$gridRow};
`;

const StyledCardPictureAndName = styled.div`
	display: flex;
`;

const StyledImg = styled.img`
	border-radius: 100%;
	height: 40px;
`;

const StyledCardName = styled.h4`
	margin: 0px;
	margin-left: 30px;
	color: ${props => props.$colorName};
`;
const StyledCardVerified = styled.h4`
	margin-top: 5px;
	margin-left: 30px;
	color: ${props => props.$colorVerified};
	opacity: 0.4;
	font-weight: 50;
`;
const StyledCardOpinion = styled.p`
	color: ${props => props.$colorOpinion};
`;

const StyledCardDescription = styled.p`
	color: ${props => props.$colorDescription};
	opacity: 0.5;
`;
export {
	StyledCardName,
	StyledCardPictureAndName,
	StyledImg,
	StyledGlobalAttributes,
	StyledCardVerified,
	StyledCardOpinion,
	StyledCardDescription
};
