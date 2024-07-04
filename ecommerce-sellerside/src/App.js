import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Auth/Login/Login';
import SignUp from './Components/Auth/SignUp/SignUp';
import Layout from './Components/Layout ';

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        {/* Direct route to Login without Layout */}
        <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
