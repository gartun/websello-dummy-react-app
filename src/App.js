import React, { useReducer } from 'react';
import { Switch, Route} from "react-router-dom";

import {
    Head,
    Cart,
    Products,
    Details,
    Default
} from "./components/";


import {reducer,
        booksCopy} from "./components/Reducer";


import './App.css';

export const BookContext = React.createContext();

function App() {
    const [list, dispatch] = useReducer(reducer, booksCopy);
    return ( 
        <BookContext.Provider value={{BookList:list, ListChange:dispatch }}>
        <Head/>
        <main>
        <Switch>
                <Route exact path="/" component={Products} />
                <Route exact path="/cart" component={Cart } />
                <Route exact path="/products" component={Products } />
                <Route exact path="/details/:id" component={Details } />
                <Route  component={Default } />
            </Switch>
        </main>
    </BookContext.Provider>
    );
}

export default App;