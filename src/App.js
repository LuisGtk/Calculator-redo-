import './App.css';
import Calc from './Components/Calculator/Calc';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Calculator</h1>
    </header>
        <a className='links'>
          <Link to="/">
          <p id='calc'>Calculator</p>
        </Link>
      </a>

      {/* switch components*/ }
  <main>
    <Routes>
      <Route path='/' element={<Calc />} />
    </Routes>
  </main>
    </div >
  );
}
export default App;
