import React, { useState, useCallback } from "react";
import Form from "usetheform";
import { Cart } from "./Cart";
import ReactJson from "react-json-view";

import "bulma/css/bulma.css";
import "./styles.css";

export default function App() {
  const [formState, setFormState] = useState({});
  const [items, setCartItem] = useState([]);

  const onRemoveItem = useCallback(
    (idToRemove) =>
      setCartItem((prev) => prev.filter(({ id }) => id !== idToRemove)),
    []
  );
  const onAddItem = useCallback(() => {
    const item = createRandomItem();
    setCartItem((prev) => [...prev, item]);
  }, []);

  return (
    <div className="App">
      <div className="box">
        <Form
          onSubmit={(state) => console.log(state)}
          onChange={(state) => setFormState(state)}
        >
          <Cart items={items} onRemoveItem={onRemoveItem} />
          <button type="submit" className="button is-small is-link">
            Submit
          </button>
        </Form>
        <br />
        <button
          type="button"
          className="button is-small is-success"
          onClick={onAddItem}
        >
          Add item to cart
        </button>
      </div>
      <div className="box">
        <ReactJson src={formState} />
      </div>
    </div>
  );
}

let id = 0;
const createRandomItem = () => {
  id = id + 1;
  return {
    id,
    qty: 1,
    desc: `Item number: ${id}`,
    price: Number((Math.random() * 10 + 1).toFixed(2))
  };
};
