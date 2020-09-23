import React,{ useContext } from 'react';
import Product from "./Product";
import {BookContext} from "../App";
import SectionTitle from './SectionTitle';

function Products() {
   const cont = useContext(BookContext);

    return (
        <>
            <SectionTitle>Kitaplarımız</SectionTitle>
        <section className="booklist-section">
            {cont.BookList.map(bo => 
            <Product key={bo.id} id={bo.id} title={bo.title} author={bo.author} img={bo.img} price={bo.price} inCart={bo.inCart} />
            )}
        </section>
        </>
    )
}

export default React.memo(Products);