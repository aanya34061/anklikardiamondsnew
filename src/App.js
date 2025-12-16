import React, { useEffect } from 'react';
import Navbar from './Components/common/Navbar/navbar';
import Footer from './Components/common/Footer/footer';
import ScrollToTop from './Scrolltotop/scrolltotop';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './Routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
      easing: "ease-in-out",
      offset: 120,
      once: false, // animation repeats while scrolling
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
