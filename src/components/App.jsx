// // import { useEffect, useState } from "react";
// import { useContext } from "react";
// import ItemsContextProvider from "../contexts/itemsContextProvider";

import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import SideBar from "./SideBar";
// import { initialItem } from "../lib/constants";
// import Counter from "./Counter";
// import Logo from "./Logo";
// import ButtonGroup from "./ButtonGroup";
// import AddItemForm from "./AddItemForm";

function App() {
  // const [items, setItems] = useState(
  //   JSON.parse(localStorage.getItem("items")) || initialItem
  // );

  // const handleAddItem = (newItemText) => {
  //   const newItem = {
  //     id: new Date().getTime(),
  //     name: newItemText,
  //     packed: false,
  //   };

  //   setItems((items) => [...items, newItem]);
  // };

  // const handleDeleteItem = (id) => {
  //   const newItems = items.filter((item) => item.id != id);
  //   setItems(newItems);
  // };

  // const handleToggleItem = (id) => {
  //   const newItems = items.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, packed: !item.packed };
  //     }
  //     return item;
  //   });
  //   setItems(newItems);
  // };

  // const handleRemoveAll = () => {
  //   setItems([]);
  // };

  // const handleResetToInitial = () => {
  //   setItems(initialItem);
  // };

  // const handleMarkAllComplete = () => {
  //   const newItems = items.map((item) => {
  //     return { ...item, packed: true };
  //   });
  //   setItems(newItems);
  // };

  // const handleMarkAllInComplete = () => {
  //   setItems(
  //     items.map((item) => {
  //       return { ...item, packed: false };
  //     })
  //   );
  // };

  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(items));
  // }, [items]);

  return (
    // <>
    /// USING PTOP DRILLING
    //   <BackgroundHeading />
    //   <main>
    //     <Header
    //       numberOfItemsPacked={items.filter((item) => item.packed).length}
    //       totalNumberOfItems={items.length}
    //     />
    //     <ItemList
    //       items={items}
    //       handleDeleteItem={handleDeleteItem}
    //       handleToggleItem={handleToggleItem}
    //     />
    //     <SideBar
    //       handleAddItem={handleAddItem}
    //       handleRemoveAll={handleRemoveAll}
    //       handleResetToInitial={handleResetToInitial}
    //       handleMarkAllComplete={handleMarkAllComplete}
    //       handleMarkAllInComplete={handleMarkAllInComplete}
    //     />
    //   </main>
    //   <Footer />
    // </>

    ///USING CONTEXT API
    // <>
    //   <BackgroundHeading />
    //   <main>
    //     <ItemsContextProvider>
    //       <Header />
    //       <ItemList />
    //       <SideBar />
    //     </ItemsContextProvider>
    //   </main>
    //   <Footer />
    // </>

    //USING ZUSTAND
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList />
        <SideBar />
      </main>
      <Footer />
    </>

    /// USING CHILDREN COMPOSITION TO AVOID PROP DRILLING
    // <>
    //   <BackgroundHeading />
    //   <main>
    //     <Header>
    //       <Logo />
    //       <Counter
    //         numberOfItemsPacked={items.filter((item) => item.packed).length}
    //         totalNumberOfItems={items.length}
    //       />
    //     </Header>

    //     <ItemList
    //       items={items}
    //       handleDeleteItem={handleDeleteItem}
    //       handleToggleItem={handleToggleItem}
    //     />
    //     <SideBar>
    //       <AddItemForm onAddItem={handleAddItem} />
    //       <ButtonGroup
    //         handleRemoveAll={handleRemoveAll}
    //         handleResetToInitial={handleResetToInitial}
    //         handleMarkAllComplete={handleMarkAllComplete}
    //         handleMarkAllInComplete={handleMarkAllInComplete}
    //       />
    //     </SideBar>
    //   </main>
    //   <Footer />
    // </>
  );
}

export default App;
