import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import AddNewAdmin from "./components/AddNewAdmin";
import Doctors from "./components/Doctors";
import Messages from "./components/Messages";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback, useContext, useState } from "react";
import { Context } from "./index";
import axios from "axios";
import { useEffect } from "react";


function App() {
  const{isAuthenticated, setIsAuthenticated, setUser} =useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/admin/me",
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
      <Sidebar/>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/doctor/addnew" element={<AddNewDoctor />} />
        <Route path="/admin/addnew" element={<AddNewAdmin />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/doctors" element={<Doctors/>} />
      </Routes>
      <ToastContainer position='top-center'/>
    </>
  );
}

export default App;
