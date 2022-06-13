import ItemCount from "./components/ItemCount/ItemCount";
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
        <ItemCount stock={5} initial={0} />
      </main>
    </div>
    
  );
}

export default App;
