import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Auth from './components/Auth';
import TodayTask from './components/TodayTask';
import Sidebar from './components/Sidebar';


function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [userId, setUserId] = useState("");
  const [username, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();


  const updateToken = (newToken, uName,) => {
    localStorage.setItem("Authorization", newToken);
    localStorage.setItem("username", uName,);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    setUserId('');
    navigate('/')
  }

  useEffect(() => {
    setUserId(userId)
    if (localStorage.getItem('Authorization')) {
      setSessionToken(localStorage.getItem('Authorization'))
    }
  }, [sessionToken])


  return (
    <>
      <Sidebar sessionToken={sessionToken} clearToken={clearToken} showModal={showModal} setShowModal={setShowModal} />
      <Routes>
        <Route path='/' element={
          <Auth sessionToken={sessionToken} userId={userId} setSessionToken={setSessionToken} updateToken={updateToken} setUserId={setUserId} />
        } />

        <Route path='/today' element={
          <TodayTask showModal={showModal} setShowModal={setShowModal} />
        } />


      </Routes>
    </>
  );
}

export default App;
