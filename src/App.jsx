import { useState } from 'react'
import Home from './Home'
import './App.css'
import Introduction from './Introduction.jsx'
import {HashRouter as Router, Routes, Route } from 'react-router-dom'
import PopularSongs from './PopularSongs.jsx'
import LoginPage from './LoginPage.jsx'
import SongDiscussion from './SongDiscussion.jsx'
import AlbumCreateForm from './AlbumCreateForm.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <Home />
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/popular" element={<PopularSongs />} />
          <Route path="/signup" element={<LoginPage />} />
          <Route path="/discuss" element={<SongDiscussion />} />
          <Route path="/create" element={<AlbumCreateForm/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
