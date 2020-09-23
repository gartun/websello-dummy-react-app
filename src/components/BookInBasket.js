import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {BookContext} from "../App";
import Rating from "./Rating";
import {FaPlusCircle, FaMinusCircle} from "react-icons/fa";

  

const BookInBasket = ({ img, title, author, id,rating, info, price, quantity}) => {
    const cont = useContext(BookContext);
    
    
    return ( 
         <div className="bib-wrapper">
            <div className="bib-img-container">
                <img src={img} alt={`${title}`}/>
            </div>
            <div className="bib-info-container">
    <p className="bib-title">{title}</p>
    <p className="bib-author"><strong>Yazar:</strong> {author}</p>
    
    <Rating rating={rating} id={id} cont={cont}/>
    <p className="bib-info">{info}</p>
    <p className="bib-price"><strong>Fiyat: </strong>{`${price * quantity} para birimi`}</p>
    <div className="quantity-wrapper"> <span><strong>Adet:</strong></span>
        <button 
        onClick={() => cont.ListChange({type: "oneless", payload: {id}})}
        >
            <FaMinusCircle />
        </button>
        
        <span>{quantity}</span>
        
         <button 
        onClick={() => cont.ListChange({type: "onemore", payload: {id}})}
        >
            <FaPlusCircle  />
        </button>
        
    </div>
            </div>

            <div className="btn-container">
                <button className="bib-btn del" 
                onClick={() => cont.ListChange({type:"deletefromcart", payload:{ id } })}
                >Kaldır
                </button>

                <Link to="/products" style={{textDecoration:"none"}}>
                    <button className="bib-btn turn" 
                    >Ürünler sayfasına dön
                    </button>
                </Link>
            </div>

        </div>
            )

} 

export default BookInBasket;
