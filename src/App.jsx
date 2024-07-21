import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css'

import {Navbar, VideoDetail, SearchFeed, Feed, ChannelDetail } from './components'


function App() {

  return (
    <BrowserRouter>
    <Box sx={{background:'gray'}}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed/>} />
        <Route path='/video/:id' element={<VideoDetail/>} />
        <Route path='/channel/:id' element={<ChannelDetail/>} />
        <Route path='/search/:id' element={<SearchFeed/>} />
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App
