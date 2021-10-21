import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FaShoppingBasket } from "react-icons/fa";

import { useBookCtx } from "../context/Context";


export const numbersInBasket = (list) => {
  let n = 0;
  list.forEach((b) => {
    if (b.inCart) n++;
  });
  return n;
};

const BasketButton = () => {

const { BookList } = useBookCtx();

  return (
    <>
      {/* Sepete sepetteki ürün sayısını gösteren tooltip eklendi */}

      <Tippy
        content={
          <span>
            {numbersInBasket(BookList)
              ? `${numbersInBasket(BookList)} adet ürün`
              : "Ürün Yok"}
          </span>
        }
      >
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <span id="link" className="navlink btn">
            <FaShoppingBasket
              style={{ verticalAlign: "bottom", marginRight: "3px" }}
            />
            Sepet {numbersInBasket(BookList) ? `(${numbersInBasket(BookList)})` : ""}
          </span>
        </Link>
      </Tippy>
    </>
  );
};

export default BasketButton;
