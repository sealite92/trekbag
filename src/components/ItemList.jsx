import Select from "react-select";

import EmptyView from "./EmptyView";
import { useContext, useMemo, useState } from "react";
import { ItemsContext } from "../contexts/itemsContextProvider";
import { useItemsContext } from "../lib/hooks";

const sortingOptions = [
  { value: "default", label: "Sort Default" },
  { value: "packed", label: "Sort by Packed Status" },
  { value: "unpacked", label: "Sort by unpacked" },
];

// export default function ItemList({
//   items,
//   handleDeleteItem,
//   handleToggleItem,
// }) {
//   const [sortBy, setSortBy] = useState("default");

//   const sortedItems = useMemo(
//     () =>
//       [...items].sort((a, b) => {
//         if (sortBy === "packed") {
//           return b.packed - a.packed;
//         }
//         if (sortBy === "unpacked") {
//           return a.packed - b.packed;
//         }
//         return;
//       }),
//     [items, sortBy]
//   );

//   return (
//     <ul className="item-list">
//       {items.length === 0 && <EmptyView />}
//       {items.length > 0 && (
//         <section className="sorting">
//           {" "}
//           <Select
//             defaultValue={sortingOptions[0]}
//             onChange={(option) => setSortBy(option.value)}
//             options={sortingOptions}
//           />
//         </section>
//       )}
//       {sortedItems.map((item) => {
//         return (
//           <Item
//             handleDeleteItem={handleDeleteItem}
//             handleToggleItem={handleToggleItem}
//             key={item.id}
//             item={item}
//           />
//         );
//       })}
//     </ul>
//   );
// }

// function Item({ item, handleDeleteItem, handleToggleItem }) {
//   return (
//     <li className="item">
//       <label>
//         <input
//           onChange={() => handleToggleItem(item.id)}
//           checked={item.packed}
//           readOnly
//           type="checkbox"
//         />{" "}
//         {item.name}
//       </label>
//       <button onClick={() => handleDeleteItem(item.id)}>❌</button>
//     </li>
//   );
// }

///USING CONTEXT API
export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  const { items, handleDeleteItem, handleToggleItem } = useItemsContext();

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          {" "}
          <Select
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
            options={sortingOptions}
          />
        </section>
      )}
      {sortedItems.map((item) => {
        return (
          <Item
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
            key={item.id}
            item={item}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleItem(item.id)}
          checked={item.packed}
          readOnly
          type="checkbox"
        />{" "}
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
