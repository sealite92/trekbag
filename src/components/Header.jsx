// import React, { useContext } from "react";
import { itemStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";
// import { useItemsContext } from "../lib/hooks";

// USING PROP DRILLING
// export default function Header({ numberOfItemsPacked, totalNumberOfItems }) {
//   return (
//     <header>
//       <Logo />
//       <Counter
//         numberOfItemsPacked={numberOfItemsPacked}
//         totalNumberOfItems={totalNumberOfItems}
//       />
//     </header>
//   );
// }

///USING CONTEXT API
// export default function Header() {
//   const { items } = useItemsContext();

//   return (
//     <header>
//       <Logo />
//       <Counter
//         numberOfItemsPacked={items.filter((item) => item.packed).length}
//         totalNumberOfItems={items.length}
//       />
//     </header>
//   );
// }
///USING ZUSTAND

export default function Header() {
  const items = itemStore((state) => state.items);
  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
  );
}

///USING CHILDREN COMPOSITION TO AVOID PROP DRILLING
// export default function Header({ children }) {
//   return <header>{children}</header>;
// }
