import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Listado from './pages/Listado';
import Jobs from './pages/Jobs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
}
export default App;