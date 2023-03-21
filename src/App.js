import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Auth from './components/Auth';
import TodayTask from './components/TodayTask';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';


function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [userId, setUserId] = useState("");
  const [username, setUserName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projects, setProjects] = useState([])


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

  const createProject = async () => {
    await fetch("http://localhost:3000/project/createproject", {
      method: 'POST',
      body: JSON.stringify({
        project: {
          projectName: projectName
        }
      }),
      headers: new Headers({
        'Content-type': 'application/json',
        Authorization: `${localStorage.getItem("Authorization")}`
      })
    })
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setProjectId(data.id)
      })
  }


  const getProjects = async () => {
    try {
      const response = await fetch(`http://localhost:3000/project/allprojects/${userId}`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `${localStorage.getItem('Authorization')}`,
        }),
      })
      const { projects } = await response.json()
      if (projects) {
        setProjects(projects)
      }
    } catch {

    }
  }

  const projectDropDown = () => {
    return projects.map((project, index) => (
      <li key={index}>
        <a className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" href="">{project.projectName}</a>
      </li>
    ))
  }

  useEffect(() => {
    setUserId(userId)
    getProjects()
    if (localStorage.getItem('Authorization')) {
      setSessionToken(localStorage.getItem('Authorization'))
    }
  }, [sessionToken])


  return (
    <>
      <Sidebar projectDropDown={projectDropDown} createProject={createProject} getProjects={getProjects} sessionToken={sessionToken} clearToken={clearToken} showModal={showModal} setShowModal={setShowModal} createProject={createProject} />
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
