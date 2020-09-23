import React, { useContext } from 'react';
import Rating from "./Rating";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import {BookContext} from "../App";
 
const Details = () => {
    const {id} = useParams();
    const cont = useContext(BookContext);
    
    const product = cont.BookList.find(book => book.id === +id );
    
    
    return (
        <>
            {
                product ? 
                <section className="detail-section">

                    <h2 className="section-title">{product.title}</h2>
                    <fieldset className="detail-img-container">
                        <img src={product.img} alt={`${product.title}`}/>
                    </fieldset>
                    <p className="detail-info"><strong>Açıklama</strong>: {product.info}</p>
                    <p className="detail-author"><strong>Yazar</strong>: {product.author}</p>
                    <Rating rating={product.rating} cont={cont} id={product.id}/>
            <p className="detail-price"><strong>Fiyat:</strong> {product.price} para birimi</p>
                    <button style={{marginTop: "1em"}} className="bib-btn turn" 
                    disabled={product.inCart}
                    onClick={() => cont.ListChange({
                        type: "addtocart",
                        payload:{
                            id: product.id
                        }
                    })}
                    >
                        {
                            product.inCart ? <span>Ürün Sepette</span> : "Sepete Ekle"
                        }
                    </button>
                </section> : 
                <p className="detail-error">
                    Ürün Bulunamadı {"\u{1f615}"} <br/> <br/> <br/>
                    <Link to="/products" style={{textDecoration: "none"}}>
                        <button className="bib-btn turn">Ürünlere Git</button>
                    </Link>
                </p>
            }
        </>
    )
}

export default Details;
