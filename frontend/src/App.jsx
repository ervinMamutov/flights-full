import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
