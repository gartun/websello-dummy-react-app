import Product from "./Product";
import SectionTitle from "./SectionTitle";
import { useBookCtx } from "../context/Context";

function Products() {

  const { BookList } = useBookCtx();

  return (
    <>
      <SectionTitle>Kitaplarımız</SectionTitle>
      <section className="booklist-section">
        {BookList.map((bo) => (
          <Product
            key={bo.id}
            id={bo.id}
            title={bo.title}
            author={bo.author}
            img={bo.img}
            price={bo.price}
            inCart={bo.inCart}
          />
        ))}
      </section>
    </>
  );
}

export default Products;
