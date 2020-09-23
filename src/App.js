import React, { useReducer } from 'react';
import { Switch, Route} from "react-router-dom";

import Head from "./components/Head";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Details from "./components/Details";
import Default from "./components/Default";
import {reducer} from "./components/Reducer";
import {booksCopy} from "./components/Reducer";

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