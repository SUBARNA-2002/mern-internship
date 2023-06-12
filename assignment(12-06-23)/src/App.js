import './App.css';
import Data from './components/Data';
import Navbar from './components/Navbar';
import { SearchProvider } from './SearchContext';
function App() {
  return (
    <SearchProvider>
    <div className="App" >
      <div>
        <Navbar/>
          <Data/>
      </div>
    </div>
    </SearchProvider>
  );
}

export default App;
