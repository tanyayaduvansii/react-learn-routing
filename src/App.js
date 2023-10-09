import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/main/Home/Home';
import { Signup } from './Components/main/Signup/signup';
import { Login } from './Components/main/Login/Login';
import { Header } from './Components/main/Header/header';
import { HomePage } from './Components/main/HomePage/Homepage';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<HomePage/>} exact />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
