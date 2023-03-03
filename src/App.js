import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Auth from './components/Auth';


function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [userId, setUserId] = useState("");
  const [username, setUserName] = useState("");
  const navigate = useNavigate();


  const updateToken = (newToken, uName, rName) => {
    localStorage.setItem("Authorization", newToken);
    localStorage.setItem("firstname", uName);
    localStorage.setItem("role", rName);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    setUserId('');
    navigate('/')
  }


  return (
    <>
      <Routes>
        <Route path='/' element={
          <Auth sessionToken={sessionToken} userId={userId} setSessionToken={setSessionToken} updateToken={updateToken} setUserId={setUserId} />
        }></Route>
      </Routes>
    </>
  );
}

export default App;
