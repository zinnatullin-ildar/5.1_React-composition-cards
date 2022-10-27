import CardList from './components/molecules/CardList';
import Card from './components/atoms/Card';
import './App.css';
import data from './data.json';

function App() {
  return (
    <div className="cards-container">
      <CardList cards={data}>
      </CardList>
    </div>
  );
}

export default App;
