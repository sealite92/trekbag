import React from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function SideBar({
  handleAddItem,
  handleRemoveAll,
  handleResetToInitial,
  handleMarkAllComplete,
  handleMarkAllInComplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAll={handleRemoveAll}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllComplete={handleMarkAllComplete}
        handleMarkAllInComplete={handleMarkAllInComplete}
      />
    </div>
  );
}
