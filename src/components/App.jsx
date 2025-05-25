import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import SideBar from "./SideBar";
import { initialItem } from "../lib/constants";

function App() {
  const [items, setItems] = useState(initialItem);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    setItems((items) => [...items, newItem]);
  };

  const handleRemoveAll = () => {
    setItems([]);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <SideBar
          handleAddItem={handleAddItem}
          handleRemoveAll={handleRemoveAll}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
