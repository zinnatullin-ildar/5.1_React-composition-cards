import CardList from './components/molecules/CardList';
import './App.css';
import data from './data/data.json';

function App() {
  return (
    <div className="cards-container">
      <CardList cards={data}>
      </CardList>
    </div>
  );
}

export default App;
