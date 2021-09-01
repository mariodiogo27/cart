import React from "react";
import { Input, Collection } from "usetheform";

const preventNegativeQty = (val) => (val < 1 ? 1 : val);
export function CartItem({ qty, price, onRemoveItem, id, desc }) {
  return (
    <div className="box control">
      <Collection object>
        <Input type="hidden" name="id" value={id} />
        <div className="field">
          <label className="label is-small">Item</label>
          <Input
            className="input is-small"
            type="text"
            name="item"
            readOnly
            value={desc}
          />
        </div>
        <div className="field">
          <label className="label is-small">Quantity</label>
          <Input
            reducers={preventNegativeQty}
            className="input is-small"
            type="number"
            name="qty"
            value={qty}
          />
        </div>
        <div className="field">
          <label className="label is-small">Price €</label>
          <Input
            className="input is-small"
            type="text"
            disabled
            name="price"
            readOnly
            value={price}
          />
        </div>
        <div className="field">
          <button
            type="button"
            className="button is-small is-danger"
            onClick={() => onRemoveItem(id)}
          >
            Remove
          </button>
        </div>
      </Collection>
    </div>
  );
}
