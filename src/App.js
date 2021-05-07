import './App.css';
import TitleCard from './components/TitleCard/TitleCard';
import CharacterTable from './components/CharacterTable/CharacterTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TitleCard />
      <CharacterTable />
    </div>
  );
}

export default App;
