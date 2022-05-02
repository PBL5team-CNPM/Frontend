
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon} from '@chakra-ui/icons'
import Header from "./components/Header";
import SwitchDarkMode from "./components/SwitchDarkMode";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <div className="">
      <Header/>
      <Navbar/>
      <div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
