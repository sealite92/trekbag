// import { useContext } from "react";
import Button from "./Button";
// import { ItemsContext } from "../contexts/itemsContextProvider";
import { itemStore } from "../stores/itemsStore";

// export default function ButtonGroup({
//   handleRemoveAll,
//   handleResetToInitial,
//   handleMarkAllComplete,
//   handleMarkAllInComplete,
// }) {
//   return (
//     <div className="button-group">
//       <Button onClick={handleMarkAllComplete} buttonType="secondary">
//         {" "}
//         Mark all as complete
//       </Button>
//       <Button onClick={handleMarkAllInComplete} buttonType="secondary">
//         {" "}
//         Mark all as incomplete
//       </Button>
//       <Button onClick={handleResetToInitial} buttonType="secondary">
//         {" "}
//         Reset to initials
//       </Button>
//       <Button buttonType="secondary" onClick={handleRemoveAll}>
//         {" "}
//         Remove all items
//       </Button>
//     </div>
//   );
// }

/// USING CONTEXT API
// export default function ButtonGroup() {
//   const {
//     handleRemoveAll,
//     handleResetToInitial,
//     handleMarkAllComplete,
//     handleMarkAllInComplete,
//   } = useContext(ItemsContext);
//   return (
//     <div className="button-group">
//       <Button onClick={handleMarkAllComplete} buttonType="secondary">
//         {" "}
//         Mark all as complete
//       </Button>
//       <Button onClick={handleMarkAllInComplete} buttonType="secondary">
//         {" "}
//         Mark all as incomplete
//       </Button>
//       <Button onClick={handleResetToInitial} buttonType="secondary">
//         {" "}
//         Reset to initials
//       </Button>
//       <Button buttonType="secondary" onClick={handleRemoveAll}>
//         {" "}
//         Remove all items
//       </Button>
//     </div>
//   );
// }

///USING ZUSTAND
export default function ButtonGroup() {
  const markAllComplete = itemStore((state) => state.markAllComplete);
  const markAllInComplete = itemStore((state) => state.markAllInComplete);
  const resetToInitial = itemStore((state) => state.resetToInitial);
  const removeAllItems = itemStore((state) => state.removeAllItems);
  return (
    <div className="button-group">
      <Button onClick={markAllComplete} buttonType="secondary">
        {" "}
        Mark all as complete
      </Button>
      <Button onClick={markAllInComplete} buttonType="secondary">
        {" "}
        Mark all as incomplete
      </Button>
      <Button onClick={resetToInitial} buttonType="secondary">
        {" "}
        Reset to initials
      </Button>
      <Button buttonType="secondary" onClick={removeAllItems}>
        {" "}
        Remove all items
      </Button>
    </div>
  );
}
