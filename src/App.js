import './App.css';
import Sidebar from './components/Sidebar'
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Sidebar/>} />
            <Route path='/dashboard' element={<Sidebar/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
