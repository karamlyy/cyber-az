import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceRequestModal from './components/ServiceRequestModal';
import ServiceDetail from './components/ServiceDetail';
import './App.css';

const HomePage = () => (
  <>
    <div id="home"><Hero /></div>
    <div id="services"><Services /></div>
    <div id="about"><About /></div>
    <div id="industries"><Industries /></div>
    <div id="contact"><Contact /></div>
  </>
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleRequestService = (serviceName) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service/:slug" element={<ServiceDetail onRequestService={handleRequestService} />} />
        </Routes>

        <Footer />

        <ServiceRequestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          serviceName={selectedService}
        />
      </div>
    </Router>
  );
}

export default App;
