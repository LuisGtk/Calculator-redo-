import './App.css';
import Calc from './Components/Calculator/Calc';
import Facts from './Components/Facts/Facts';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1>React-Calculator</h1>
        </Link>
      </header>
      <Link to="/Calculator">
        <button className='calc'>Calculator</button>
      </Link>
      <Link to="/Facts">
        <button className='facts'>Number Facts</button>
      </Link>
      {/* switch components*/}
      <main>
        <Routes>
          <Route path='/Facts' element={<Facts />} />
          <Route path='/Calculator' element={<Calc />} />
        </Routes>
      </main>
    </div >
  );
}
export default App;
