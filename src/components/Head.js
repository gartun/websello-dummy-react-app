import React  from 'react';
import BasketButton from "./BasketButton";
import {Link} from "react-router-dom";
import {FaBookReader} from "react-icons/fa";


const Head = () => {

    return (
        <header>
            {/* Ana sayfaya yani ürünlere dönmek için logoya link eklendi. */}
            <Link to="/">
                <div className="logo-wrapper">
                    <img src="/img/webtep-logo.svg" alt="logo"/>
                </div>
            </Link>


            <Link to="/products" style={{textDecoration:"none"}}>
                <span className="navlink">
                    <FaBookReader style={{verticalAlign: "bottom", marginRight:"3px"}}/>Kitaplar
                </span>
            </Link>

            <BasketButton/>
           
        </header>
    )
}

export default Head;
