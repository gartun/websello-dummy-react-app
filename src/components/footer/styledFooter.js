import styled from "styled-components";

export const StyledFooter = styled.footer`
	@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

	background: linear-gradient(blue, deepskyblue);
	border-top: 2px solid black;
		
	> .footer-brand {
		padding: 1em 0;
		text-align: center;
		background: linear-gradient(beige 5%, #333 45%);
		color: ghostwhite;
		font-family: 'Source Code Pro';
		font-size: 0.9rem;
		letter-spacing: .1em;	
	}
`

export const StyledFooterContainer = styled.div`
	width: 100%;
	max-width: 600px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin: 0 auto;

	> div {
		flex: 1 0 50%;
		padding: .5em;
		> a {
			display: block;
			margin: 0 0 1em;
			color: #fff;
			font-size: .9rem;
			transition: color .5s, font .5s;
			&:hover {
				color: #ff0;
				font-size: .92rem;
			}
			&:hover::before {
				background-color: #ff0;
			}
			&::before{
				content: "";
				display: inline-block;
				margin-right: 0.1em;
				width: 0.4em;
				height: 0.4em;
				border-radius: 50%;
				background: #fff;
			}
		}
	}

	> div:first-child {
		border-right: 2px solid gray;
	}
`