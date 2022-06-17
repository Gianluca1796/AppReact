import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greetings = "Bienvenidos a Geek Zone!"/>
        <ItemDetailContainer greetings = "Detalle del producto"/>
        <ItemCount stock={5} initial={0} />
      </main>
    </div>
    
  );
}

export default App;
