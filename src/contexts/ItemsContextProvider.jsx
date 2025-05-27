import React, { createContext, useEffect, useState } from "react";
import { initialItem } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || initialItem
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    setItems((items) => [...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id != id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAll = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItem);
  };

  const handleMarkAllComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };

  const handleMarkAllInComplete = () => {
    setItems(
      items.map((item) => {
        return { ...item, packed: false };
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAll,
        handleResetToInitial,
        handleMarkAllComplete,
        handleMarkAllInComplete,
      }}
    >
      {children}
    </ItemsContext>
  );
}
