import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import VideoUploadPage from './pages/VideoUploadPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:id" element={<HomePage />} />
        <Route path="/upload" element={<VideoUploadPage />} />
      </Routes>
      <ToastContainer /> {/* (TOAST) = Notification for the upload page */}
    </Router>
  );
}

export default App;





























