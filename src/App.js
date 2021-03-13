import React, { useReducer } from 'react';
import { Switch, Route } from "react-router-dom";

import {
    Head,
    Cart,
    Products,
    Details,
    Default,
    Footer
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
                <Route path="/cart" component={Cart } />
                <Route path="/products" component={Products } />
                <Route path="/details/:id" component={Details } />
                <Route component={Default } />
            </Switch>
        </main>
        <Footer />
    </BookContext.Provider>
    );
}

export default App;