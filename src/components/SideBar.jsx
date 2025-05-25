import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function SideBar({ handleAddItem, handleRemoveAll }) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup removeAllItems={handleRemoveAll} />
    </div>
  );
}
