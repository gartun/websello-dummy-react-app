import { useContext } from 'react';
import Product from "./Product";
import {BookCtx} from "../context/Context";
import SectionTitle from './SectionTitle';

function Products() {
    console.log("Products rendering")
   const cont = useContext(BookCtx);

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

export default Products;