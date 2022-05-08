
import React from "react";
import { Routes, Route} from "react-router-dom";
import { Box } from '@chakra-ui/react';
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import FilmHome from "./pages/FilmHome";
import FilmAll from "./pages/FilmAll";
import TheLoai from "./pages/TheLoai";
import Showtimes from "./components/Showtimes";
import './App.css';

function App() {
  return (
    <Box fontFamily='Poppins'>
   
      <Box>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Navbar/>}>
            <Route path="" element={<FilmHome />} />
            <Route path="phim" element={<FilmAll />} />
            <Route path="TheLoai" element={<TheLoai />} />
            <Route path="Ve" element={<Showtimes />} />
            <Route path="TuyenDung" element={<TheLoai />} />
            <Route path="tintuc" element={<TheLoai />} />
          </Route>
        </Routes>
      </Box>
      <Footer/>
    </Box>
  );
}

export default App;
