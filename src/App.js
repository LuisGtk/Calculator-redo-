import './App.css';
import Calc from './Components/Calculator/Calc';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React-Calculator
      </header>








{/* switch */}
      <main>
        <Routes>
          <Route path='/' element={<Calc />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
