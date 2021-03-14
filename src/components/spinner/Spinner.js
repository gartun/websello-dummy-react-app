import {
	LoadingBG,
	SpinnerBox
} from "./spinner-styles";

const Spinner = () => {
	return(
		<LoadingBG
			data-testid="spinnerBG">
			<SpinnerBox />
		</LoadingBG>
	)
}

export default Spinner;