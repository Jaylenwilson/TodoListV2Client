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
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [refreshProjects, setRefreshProjects] = useState(false);


  const navigate = useNavigate();


  const updateToken = (newToken, uName, uId) => {
    localStorage.setItem("Authorization", newToken);
    localStorage.setItem("username", uName);
    localStorage.setItem("userId", uId);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
    setUserId('');
    navigate('/')
  }

  const createProject = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/project/projectcreate", {
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
        setRefreshProjects(prevState => !prevState);
      })
      .catch(err => console.log(err))

  }


  const getProjects = async () => {
    await fetch(`http://localhost:3000/project/allprojects/${userId}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('Authorization')}`,
      }),
    })
      .then(data => data.json())
      .then(data => {
        console.log(data)
        console.log(data.projects)
        setProjects(data.projects)
        console.log(projects)
      })
      .catch(err => console.log(err))

  }

  useEffect(() => {
    if (userId) {
      getProjects();
    }
  }, [userId, refreshProjects]);

  useEffect(() => {
    console.log('Projects updated:', projects);
  }, [projects]);


  const projectDropDown = () => {
    return projects.map((project, index) => (
      <li key={project.id}>
        <a className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" href="">{project.projectName}</a>
      </li>
    ))
  }

  useEffect(() => {
    if (localStorage.getItem('Authorization')) {
      setSessionToken(localStorage.getItem('Authorization'));
      setUserId(localStorage.getItem('userId'));
    }
    console.log(userId)
  }, [sessionToken])

  // useEffect(() => {
  //   getProjects()
  // })


  return (
    <>
      <Sidebar projectName={projectName} setProjectName={setProjectName} projectDropDown={projectDropDown} createProject={createProject} getProjects={getProjects} sessionToken={sessionToken} clearToken={clearToken} showModal={showModal} setShowModal={setShowModal} createProject={createProject} userId={userId} tasks={tasks} />
      <Routes>
        <Route path='/' element={
          <Auth sessionToken={sessionToken} userId={userId} setSessionToken={setSessionToken} updateToken={updateToken} setUserId={setUserId} />
        } />

        <Route path='/today' element={
          <TodayTask showModal={showModal} setShowModal={setShowModal} tasks={tasks} setTasks={setTasks} userId={userId} />
        } />


      </Routes>
    </>
  );
}

export default App;
