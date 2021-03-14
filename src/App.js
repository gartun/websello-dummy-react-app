import {
    lazy,
    Suspense
} from 'react';

import { Switch, Route } from "react-router-dom";

import {Context} from "./context/Context";

import {
    Head,
    Cart,
    Products,
    Default,
    Footer,
    Spinner
} from "./components/";
import './App.css';

const Details = lazy(() => import("./components/Details"));

function App() {

    return ( 
        <Context>
                <Suspense fallback={<Spinner />}>
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
                </Suspense>
            </Context>
    );
}

export default App;