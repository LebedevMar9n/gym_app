import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';

import './App.css';
import { ExerciseDetail, Home } from './pages';
import { Footer, Navbar } from './components';

function App() {
  return (
    <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path={'/gym_app'} element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
