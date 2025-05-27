import React, { useContext } from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { ItemsContext } from "../contexts/itemsContextProvider";
import { useItemsContext } from "../lib/hooks";

// export default function SideBar({
//   handleAddItem,
//   handleRemoveAll,
//   handleResetToInitial,
//   handleMarkAllComplete,
//   handleMarkAllInComplete,
// }) {
//   return (
//     <div className="sidebar">
//       <AddItemForm onAddItem={handleAddItem} />
//       <ButtonGroup
//         handleRemoveAll={handleRemoveAll}
//         handleResetToInitial={handleResetToInitial}
//         handleMarkAllComplete={handleMarkAllComplete}
//         handleMarkAllInComplete={handleMarkAllInComplete}
//       />
//     </div>
//   );
// }

/// USING CONTEXT API
export default function SideBar() {
  const { handleAddItem } = useItemsContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}

//USING CHILD COMPOSITION TO AVOID PROP DRILLING
// export default function SideBar({ children }) {
//   return <div className="sidebar">{children}</div>;
// }
