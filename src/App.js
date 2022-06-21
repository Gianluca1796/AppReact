import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes } from 'react-router-dom'

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
          </Routes>
          <ItemCount stock={5} initial={0} /> 
        </main>
      </BrowserRouter>
    </div>
    
  );
}

export default App;