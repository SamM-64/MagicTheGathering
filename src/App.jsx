import './App.css';
import './magicCards';
import Header from './component/Header';
import magicCards from './magicCards';
import Cards from './component/Animation';



function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards">
        {magicCards.map((magic) => (
          <Cards key={magic.id} img={magic.img} />
        ))}
      </div>
    </div>
  );
}

export default App;


