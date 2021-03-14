import {
	useReducer,
	createContext
} from "react";

import {
	reducer,
	booksCopy
} from "./reducer";

export const BookCtx = createContext();

export const Context = ({ children }) => {
	const [list, dispatch] = useReducer(reducer, booksCopy);

	return(
		<BookCtx.Provider value={{ BookList: list, ListChange: dispatch}}>
			{children}
		</BookCtx.Provider>
	)
}