
import Modal from "./Components/Modal/Modal";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import BooksLib from "./Components/BooksLib/BooksLib";
import Header from "./Components/Header/Header";

export const Context = createContext()
function App() {
  const [search, setSearch] = useState();
  const [fetchArray, setFetchArray] = useState();
  const [active,setActive] = useState(false)
  const [modalData, setModalData] = useState({});
  useEffect(() =>{
    if(!search)return;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyC1CssZU0CxdP_sZi8RLEpbswbVN5chWXk`)
      .then(resp => resp.json())
      .then(res => setFetchArray(res))
      
  }, [search])
  return (
    <div className="App">
      <Context.Provider value={{fetchArray,setSearch,setModalData, modalData, active,setActive}}>
      <Header  />
      <BooksLib/>
      <Modal />
      </Context.Provider>
    </div>
  );
}

export default App;
