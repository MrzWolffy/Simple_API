import { Route, Routes } from "react-router-dom"
import './App.css';
import Login from './login.js';
import Register from './register.js'
import Userprofile from './userprofile.js'

function App() {
  return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/userprofile" element={<Userprofile />}/>
        </Routes>
  );
}

export default App;
