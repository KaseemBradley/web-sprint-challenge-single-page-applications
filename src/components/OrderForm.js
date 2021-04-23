import React from "react";

export default function OrderForm() {
  return (
    <form id="pizza-form">
      <label>
        Name
        <input id="name-input" name="name" />
      </label>

      <br />

      <select id="size-dropdown">
        <option>--Size?--</option>
        <option> Small </option>
        <option> Med </option>
        <option> Large </option>
      </select>

      <p>Toppings</p>

      <label>
        Onions
        <input type="checkbox" name="onions" />
      </label>
      <label>
        Pineapple
        <input type="checkbox" name="pineapple" />
      </label>
      <label>
        Beef
        <input type="checkbox" name="beef" />
      </label>
      <label>
        Mushrooms
        <input type="checkbox" name="mushrooms" />
      </label>
    </form>
  );
}
