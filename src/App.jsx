import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Preload from './components/Home/Preload';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Preload />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </div>
    
  );
}

export default App;