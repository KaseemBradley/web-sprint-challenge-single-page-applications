import React, { useState } from "react";

export default function OrderForm() {
  const [orderData, setOrderData] = useState({
    name: "",
    size: "",
    onions: false,
    pineapple: false,
    beef: false,
    mushrooms: false,
    special: "",
  });

  console.log(orderData);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setOrderData({ ...orderData, [event.target.name]: event.target.value });
  };

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input id="name-input" name="name" />
      </label>

      <br />

      <select
        id="size-dropdown"
        value={orderData.size}
        onChange={handleChange}
        name="size"
      >
        <option>--Size?--</option>
        <option> Small </option>
        <option> Med </option>
        <option> Large </option>
      </select>

      <p>Toppings</p>

      <label>
        Onions
        <input
          type="checkbox"
          name="onions"
          value={orderData.onions}
          onChange={handleChange}
        />
      </label>
      <label>
        Pineapple
        <input
          type="checkbox"
          name="pineapple"
          value={orderData.pineapple}
          onChange={handleChange}
        />
      </label>
      <label>
        Beef
        <input
          type="checkbox"
          name="beef"
          value={orderData.beef}
          onChange={handleChange}
        />
      </label>
      <label>
        Mushrooms
        <input
          type="checkbox"
          name="mushrooms"
          value={orderData.mushrooms}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Special Requests?
        <textarea
          id="special-text"
          name="special"
          value={orderData.special}
          onChange={handleChange}
        />
      </label>

      <br />

      <button id="order-button">Order</button>
    </form>
  );
}
