"use client";

import { useState } from "react";
import "./styles.css";

export default function MockTrade() {
  const [showModal, setShowModal] = useState(false);
  const [price, setPrice] = useState("");

  const handleTradeClick = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mock order placed for ${price} USD`);
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleTradeClick} className="button">
        Place Mock Trade
      </button>

      {showModal && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <label>
              Enter price to place order:
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
