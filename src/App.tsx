
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
            
          <Route path="/" element={<HomePage />} />
          <Route path="/headphones" element={<HomePage />} />
          <Route path="/speakers" element={<HomePage />} />
          <Route path="/earphones" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;