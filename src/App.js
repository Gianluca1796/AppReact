
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer greetings = "Bienvenidos a Geek Zone!"/>} />
            <Route path="/category/:categoryId"  element={<ItemListContainer greetings = "Categorías"/>}  />
            <Route path="/item/:itemId" element= {<ItemDetailContainer greetings = "Detalle del producto"/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
    
  );
}

export default App;