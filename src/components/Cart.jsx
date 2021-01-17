import React, { useState } from "react";

export default function Cart({ items }) {
  if (items.length === 0) {
    return <div></div>;
  }
  const subTotal = items.reduce(
    (acc, item) => Number(acc) + Number(item.price),
    0
  );

  const gst = subTotal * 0.07;

  const total = subTotal + gst;

  return (
    <div>
      <h2>Cart</h2>
      {items.map((item, index) => (
        <div key={item.id}>
          {item.quantity} | {item.name} ${item.price}
        </div>
      ))}
      <div>
        <h3>Sub Total: ${subTotal}</h3>
        <h3>GST: ${gst.toFixed(2)}</h3>
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}
