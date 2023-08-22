
import './App.css';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
function App() {
  return (
    <>
      <Banner props={SearchBar}></Banner>
    </>
  );
}

export default App;
