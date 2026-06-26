import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import HeadphonePage from './Pages/HeadphonePage'; // Import this
// Import these when you create them
// import SpeakersPage from './Pages/SpeakersPage';
// import EarphonesPage from './Pages/EarphonesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/headphones" element={<HeadphonePage />} /> {/* Changed from HomePage to HeadphonePage */}
          <Route path="/speakers" element={<HomePage />} /> {/* Change to SpeakersPage when ready */}
          <Route path="/earphones" element={<HomePage />} /> {/* Change to EarphonesPage when ready */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;