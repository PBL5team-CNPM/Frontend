import {React, useState} from "react";
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
import axios from "axios";
import ScrollToTop from "./ScrollToTop";
import Showtime from "./pages/admin/Showtime";
import CinemaRoom from "./pages/admin/CinemaRoom";

function App() {
  const [message,setMessage]= useState('')
  const callbackFunction = (childData) => {
        setMessage(childData)
       }
  const listphimdangchieu = []
  const listphimsapchieu = []
  const [listphim, setListphim] = useState([])
  function xulyphim(item, index, arr){
      if(Date.parse((arr[index].time)) <= Date.now()){
          listphimdangchieu.push(arr[index])
      }
      else {
          listphimsapchieu.push(arr[index])
      }
  }
  if(message==="Update" || message===""){
      axios.get('http://localhost:8000/api/phims/').
      then(
          res => {
              setListphim(res.data.map((dataphim)=>{
                  return(
                      {
                          id: dataphim.id,
                          title: dataphim.ten,
                          trailer: dataphim.trailer,
                          imageUrl: dataphim.poster,
                          time:dataphim.ngay_chieu,
                          length: dataphim.thoiluong,
                          director:dataphim.dao_dien,
                          actor:dataphim.dien_vien,
                          content:dataphim.tom_tat,
                          finish:dataphim.ngay_ketthuc,
                          theloai:dataphim.theloai
                      }
                  )
              }))
          }
      ).catch(error => console.log(error))
      setMessage("wait update")
      }  

  listphim.forEach(xulyphim);
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
            <Route path="" element={<FilmHome listphimdangchieu={listphimdangchieu}
            listphimsapchieu={listphimsapchieu}/>} />
            <Route path="movie-info" element={<FilmAll />} />
            <Route path="categorys/:id" element={<MoviesByCategory />} />
            <Route path="Ve" element={<Showtimes />} />
            <Route path="TuyenDung" element={<SeatSelect />} />
            <Route path="tintuc" element={<Showtimes />} />
            <Route path="movies/now-showing" element={<NowShow 
            listphimdangchieu={listphimdangchieu}/>} />
            <Route path="movies/coming-soon" element={<ComingSoon
            listphimsapchieu={listphimsapchieu}/>} />
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
