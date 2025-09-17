import styled from "styled-components"

export const StyledHeader = styled.div`
	background: ${ props => props.$black ? "black" : "yellow" };
	padding: 1rem;

	&:hover {
		background: orange;
	}

	button {
		background: black;
		border: 2pt solid orange;
		padding: 0.5rem 1rem;

		&:hover {
			background: blue;
		}

		span {
			color: yellow;
		}
	}
`
