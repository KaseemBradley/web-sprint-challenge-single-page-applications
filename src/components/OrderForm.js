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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(orderData);
    setOrderData({
      name: "",
      size: "",
      onions: false,
      pineapple: false,
      beef: false,
      mushrooms: false,
      special: "",
    });
  };

  const handleChange = (event) => {
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setOrderData({ ...orderData, [event.target.name]: value });
  };

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          id="name-input"
          name="name"
          value={orderData.name}
          onChange={handleChange}
        />
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
          checked={orderData.onions}
          onChange={handleChange}
        />
      </label>
      <label>
        Pineapple
        <input
          type="checkbox"
          name="pineapple"
          checked={orderData.pineapple}
          onChange={handleChange}
        />
      </label>
      <label>
        Beef
        <input
          type="checkbox"
          name="beef"
          checked={orderData.beef}
          onChange={handleChange}
        />
      </label>
      <label>
        Mushrooms
        <input
          type="checkbox"
          name="mushrooms"
          checked={orderData.mushrooms}
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
