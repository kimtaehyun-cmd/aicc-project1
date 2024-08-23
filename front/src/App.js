import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Footer from './Components/Footer';
// import Itempannel from './Components/Itempanel';
// import Navbar from './Components/Navbar';
// import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Map from './Components/Map/index';
import Planner from './Components/Planner/index';
import Project from './Components/Project/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="map" element={<Map />} />
        <Route path="planner" element={<Planner />} />
        <Route path="project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
