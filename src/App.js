import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ImagesPage from './pages/ImagesPage';
import PostsPage from './pages/PostsPage';
import './App.scss';
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
      <Header username="Davide Scalone"/>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/immagini" element={<ImagesPage />} />
          <Route path="/post" element={<PostsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
