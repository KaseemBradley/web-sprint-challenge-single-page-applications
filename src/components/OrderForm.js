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
    </form>
  );
}
