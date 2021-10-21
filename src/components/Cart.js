import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import { useBookCtx } from "../context/Context";
import BookInBasket from "./BookInBasket";
import SectionTitle from "./SectionTitle";

function Cart() {
  const { BookList } = useBookCtx();
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const bookArray = BookList.filter(
    (book) => book.inCart && book.quantity > 0
  );

  const sum = bookArray
    .map((book) => book.quantity * book.price)
    .reduce((firstPri, secondPri) => firstPri + secondPri, 0);

  return (
    <div>
      {showModal && (
        <div className="modal-wrapper">
          <span
            onClick={() => setShowModal(false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 15,
              right: 20,
              color: "orangered",
              fontWeight: 900,
              fontSize: "1.4rem",
            }}
          >
            X
          </span>
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
          <form>
            <label htmlFor="ccnumber">Kredi Kartı Numaranız:</label>
            <input
              type="number"
              placeholder="Kredi kartı numaranızı giriniz..."
              name="ccnumber"
              id="ccnumber"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(name)}
            />

            <label htmlFor="name">İsminiz:</label>
            <input
              name="name"
              id="name"
              placeholder="İsminiz..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(name)}
            />

            <label htmlFor="expiry">Son kullanma tarihi:</label>
            <input
              name="expiry"
              id="expiry"
              type="text"
              placeholder="Son kullanma tarihi..."
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(name)}
            />

            <label htmlFor="cvc">CVC:</label>
            <input
              name="cvc"
              id="cvc"
              type="number"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(name)}
            />
          </form>
        </div>
      )}
      <SectionTitle>Sepetteki Ürünleriniz</SectionTitle>

      <section className="section-body">
        {bookArray.length === 0 ? (
          <h1 className="basket-error">Henüz Kitap Eklemediniz</h1>
        ) : (
          bookArray.map(
            (b) =>
              b.inCart && (
                <BookInBasket
                  key={b.id}
                  id={b.id}
                  title={b.title}
                  author={b.author}
                  img={b.img}
                  quantity={b.quantity}
                  info={b.info}
                  price={b.price}
                  rating={b.rating}
                />
              )
          )
        )}
      </section>
      {sum !== 0 && (
        <div className="pay">
          <p className="sum">
            <strong>Toplam:</strong> {sum} para birimi
          </p>
          <button className="bib-btn turn" onClick={() => setShowModal(true)}>
            Ödemeyi Kredi Kartı İle Yap
          </button>
        </div>
      )}
    </div>
  );
}
export default Cart;
