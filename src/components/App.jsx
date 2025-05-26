import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import SideBar from "./SideBar";
import { initialItem } from "../lib/constants";

function App() {
  const [items, setItems] = useState(() =>
    initialItem.map((item) => ({ ...item }))
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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          numberOfItemsPacked={items.filter((item) => item.packed).length}
          totalNumberOfItems={items.length}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <SideBar
          handleAddItem={handleAddItem}
          handleRemoveAll={handleRemoveAll}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllComplete={handleMarkAllComplete}
          handleMarkAllInComplete={handleMarkAllInComplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
