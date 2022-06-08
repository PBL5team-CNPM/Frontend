import {React, useEffect, useState} from "react";
import { Routes, Route} from "react-router-dom";
import { Box} from '@chakra-ui/react';
import Login from "./pages/website/Login";
import Welcome from "./pages/website/Welcome";
import Signup from "./pages/website/Signup";
import Navbar from "./components/website/Navbar";
import FilmHome from "./pages/website/FilmHome";
import FilmAll from "./pages/website/FilmAll";
import Showtimes from "./components/website/Showtimes";
import Dashboard from "./pages/admin/Dashboard";
import Revenue from "./pages/admin/Revenue";
import Film from "./pages/admin/Film";
import Category from "./pages/admin/Category";
import Users from "./pages/admin/Users";
import './App.css';
import Profile from "./pages/website/Profile";
import ViewProfile from "./components/website/ViewProfile";
import EditProfile from "./components/website/EditProfile";
import MyTickets from "./components/website/MyTickets";
import ChangePassword from "./components/website/ChangePassword";
import SeatSelect from "./pages/website/SeatSelect";
import ComingSoon from "./pages/website/ComingSoon";
import NowShow from "./pages/website/NowShow";
import MoviesByCategory from "./pages/website/MoviesByCategory";
import ScrollToTop from "./ScrollToTop";
import Showtime from "./pages/admin/Showtime";
import CinemaRoom from "./pages/admin/CinemaRoom";
import FoodDrinkSelect from "./pages/website/FoodDrinkSelect";
import Payment from "./pages/website/Payment";

function App() {
  const [message,setMessage]= useState('')
  const callbackFunction = (childData) => {
        setMessage(childData)
       }
 
  useEffect(()=>{
     console.log(message)
  },[message])
  return (
      <Box>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/admin" element={<Dashboard/>}>
            <Route path="revenue" element={<Revenue />} />
            <Route path="film" element={<Film parentCallback={callbackFunction}/>} />
            <Route path="category" element={<Category parentCallback={callbackFunction}/>} />
            <Route path="users" element={<Users />}  />
            <Route path="cinema-room" element={<CinemaRoom/>} />
            <Route path="showtime" element={<Showtime/>}  />
          </Route>
          <Route path="/home" element={<Navbar/>}>
            <Route path="" element={<FilmHome/>} />
            <Route path="movie-info" element={<FilmAll />} />
            <Route path="movie-info/lich-chieu" element={<Showtimes />} />
            <Route path="movie-info/lich-chieu/chon-ghe" element={<SeatSelect />} />
            <Route path="movie-info/lich-chieu/chon-ghe/chon-food-drink" element={<FoodDrinkSelect />} />
            <Route path="categorys/:id" element={<MoviesByCategory />} />
            <Route path="Ve" element={<Showtimes />} />
            <Route path="TuyenDung" element={<SeatSelect />} />
            <Route path="tintuc" element={<Payment />} />
            <Route path="movies/now-showing" element={<NowShow/>} />
            <Route path="movies/coming-soon" element={<ComingSoon/>} />
          </Route>
          <Route path="/profile" element={<Profile/>}>
            <Route path="viewprofile" element={<ViewProfile/>} />
            <Route path="editprofile" element={<EditProfile />} />
            <Route path="mytickets" element={<MyTickets />} />
            <Route path="changepassword" element={<ChangePassword />} />
          </Route>
        </Routes>
      </Box>
  );
}

export default App;
