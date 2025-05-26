import React from "react";

export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} packed
    </p>
  );
}
