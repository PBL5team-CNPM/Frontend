
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Box, Flex, Stack } from '@chakra-ui/react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <Box fontFamily='Poppins'>
      <Header/>
      <Box>
         <Login/>
      {/* <Navbar/> */}
      </Box>
      <Footer/>
    </Box>
  );
}

export default App;
