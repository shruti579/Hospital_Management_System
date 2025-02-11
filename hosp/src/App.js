// import logo from './logo.svg';
import './App.css';
import {useContext, useEffect } from 'react';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import axios from 'axios';
import { Context } from './index';


function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/patient/me",
        {
          withCredentials: true,
        }
      );
      setIsAuthenticated(true);
      setUser(response.data.user);
    } catch (error) {
      setIsAuthenticated(false);
      setUser({});
    }
  };
  fetchUser();
}, [isAuthenticated]);

  return (
   <>
   <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/appointment' element={<Appointment/>}/>
     <Route path='/about' element={<AboutUs/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
    <ToastContainer position='top-center'/>
   
   </>
  );
}

export default App;
