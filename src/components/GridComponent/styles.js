import styled from 'styled-components';

const StyledGrid = styled.div`
	width: 444px;

	@media (min-width: 950px) {
		display: grid;
		grid-template-columns: repeat(4, 270px);
		grid-template-rows: repeat(2, 400);
	}
`;

export { StyledGrid };
