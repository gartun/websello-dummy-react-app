import { Link } from "react-router-dom";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { useBookCtx } from "../context/Context";
import Rating from "./Rating";

const BookInBasket = ({
  img,
  title,
  author,
  id,
  rating,
  info,
  price,
  quantity,
}) => {
  const { ListChange } = useBookCtx();

  return (
    <div className="bib-wrapper">
      <div className="bib-img-container">
        <img src={img} alt={`${title}`} />
      </div>
      <div className="bib-info-container">
        <p className="bib-title">{title}</p>
        <p className="bib-author">
          <strong>Yazar:</strong> {author}
        </p>

        <Rating rating={rating} id={id} />
        <p className="bib-info">{info}</p>
        <p className="bib-price">
          <strong>Fiyat: </strong>
          {`${price * quantity} para birimi`}
        </p>
        <div className="quantity-wrapper">
          {" "}
          <span>
            <strong>Adet:</strong>
          </span>
          <button
            onClick={() =>
              ListChange({ type: "oneless", payload: { id } })
            }
          >
            <FaMinusCircle />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() =>
              ListChange({ type: "onemore", payload: { id } })
            }
          >
            <FaPlusCircle />
          </button>
        </div>
      </div>

      <div className="btn-container">
        <button
          className="bib-btn del"
          onClick={() =>
            ListChange({ type: "deletefromcart", payload: { id } })
          }
        >
          Kaldır
        </button>

        <Link to="/products" style={{ textDecoration: "none" }}>
          <button className="bib-btn turn">Ürünler sayfasına dön</button>
        </Link>
      </div>
    </div>
  );
};

export default BookInBasket;
