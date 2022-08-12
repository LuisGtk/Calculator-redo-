import './App.css';
import Calc from './Components/Calculator/Calc';
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
      {/* switch components*/}
      <main>
        <Routes>
          <Route path='/Calculator' element={<Calc />} />
        </Routes>
      </main>
    </div >
  );
}
export default App;
