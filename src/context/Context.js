import { useReducer, createContext, useContext } from "react";

import { reducer, booksCopy } from "./reducer";

const BookCtx = createContext();

export const useBookCtx = () => useContext(BookCtx);

export const Context = ({ children }) => {
  const [list, dispatch] = useReducer(reducer, booksCopy);

  return (
    <BookCtx.Provider value={{ BookList: list, ListChange: dispatch }}>
      {children}
    </BookCtx.Provider>
  );
};
