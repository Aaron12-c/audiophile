import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import HeadphonePage from './Pages/HeadphonePage';
import SpeakerPage from './Pages/SpeakerPage'; // Import SpeakerPage
// import EarphonesPage from './Pages/EarphonesPage';
// import ProductDetailPage from './Pages/ProductDetailPage';
// import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/headphones" element={<HeadphonePage />} />
          <Route path="/speakers" element={<SpeakerPage />} /> {/* Now using SpeakerPage */}
          <Route path="/earphones" element={<HomePage />} /> {/* Change to EarphonesPage when ready */}
          
          {/* Product detail routes - currently using HomePage as placeholder */}
          <Route path="/product/:productId" element={<HomePage />} /> {/* Change to ProductDetailPage when ready */}
          
          {/* Catch-all 404 route */}
          <Route path="*" element={<HomePage />} /> {/* Change to NotFoundPage when ready */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;