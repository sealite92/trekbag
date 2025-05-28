import React from "react";

// export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
//   return (
//     <p>
//       <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} packed
//     </p>
//   );
// }

/// USING CONTEXT API
export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
  return (
    <p>
      <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} packed
    </p>
  );
}

///USING CHILDREN COMPOSITION TO AVOID PROP DRILLING
// export default function Counter({ numberOfItemsPacked, totalNumberOfItems }) {
//   return (
//     <p>
//       <b>{numberOfItemsPacked}</b> / {totalNumberOfItems} packed
//     </p>
//   );
// }
