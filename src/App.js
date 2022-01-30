import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js'
import Reviews from './pages/Reviews.js'
import Database from './pages/Database.js'

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="database" element={<Database />} />
      </Routes>
    </Router>
  );
}

export default App;
