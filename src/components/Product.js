import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FaCartPlus } from "react-icons/fa";

import { useBookCtx } from "../context/Context";

function Product({ id, title, author, img, price, inCart }) {

  const { ListChange } = useBookCtx();

  return (
    <div className="book-card" key={id}>
      <div className="book-img-wrapper">
        <Link to={`/details/${id}`}>
          <img src={img} alt={`the book ${title}`} />
        </Link>

        <Tippy content="Sepete ekle">
          <button
            className="add-to-cart-btn"
            aria-label="Ürünü sepete ekle"
            disabled={inCart}
            onClick={() => {
              ListChange({ type: "addtocart", payload: { id } });
            }}
          >
            {inCart ? (
              <span style={{ color: "#565656" }} className="basket">
                Sepete Ekli
              </span>
            ) : (
              <FaCartPlus />
            )}
          </button>
        </Tippy>
      </div>
      <div className="book-info-wrapper">
        <p className="book-title">
          <strong>Kitap ismi:</strong> <em>{title}</em>
        </p>
        <p className="book-author">
          <strong>Yazar:</strong> {author}
        </p>
        <p className="book-price">
          <strong>Fiyat:</strong> {price} para birimi
        </p>
      </div>
    </div>
  );
}

export default Product;
