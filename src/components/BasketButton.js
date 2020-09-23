import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css";
import {FaShoppingBasket} from "react-icons/fa";
import {BookContext} from "../App";

export const numbersInBasket = (cont) =>{
    let n = 0;
    cont.BookList.forEach(b => {
        if(b.inCart) n++;
    })
    return n;
};

const BasketButton = () => {
    const cont = useContext(BookContext);
    const tooltip = () => {
        return ``
    }
    return (
        <>
         {/* Sepete sepetteki ürün sayısını gösteren tooltip eklendi */}

         <Tippy content={<span>{numbersInBasket(cont) ? `${numbersInBasket(cont)} adet ürün` : "Ürün Yok"}</span>}>
         <Link to="/cart" style={{textDecoration:"none"}}>
             <span id="link" className="navlink btn">
                 <FaShoppingBasket style={{verticalAlign: "bottom", marginRight:"3px"}}/>
                 Sepet {numbersInBasket(cont) ? `(${numbersInBasket(cont)})` : ""}
             </span>
         </Link>
     </Tippy>
     </>
    )
}

export default BasketButton
