import styled, { keyframes } from "styled-components";

export const LoadingBG = styled.div`
	background: rgba(255, 240, 200, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
`

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

export const SpinnerBox = styled.div`
	height: 100px;
	width: 100px;
	border-radius: 50%;
	border-bottom: 3px solid crimson;
	animation: ${rotate} 1s ease-in infinite;
`