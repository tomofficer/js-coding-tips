import React, { useRef } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Home from './Home';
import Resources from './Resources';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
