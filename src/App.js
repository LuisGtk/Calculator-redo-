import './App.css';
import Calc from './Components/Calculator/Calc';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Calculator</h1>
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
