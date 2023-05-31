import './App.css';
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes , Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from './components/Navbar';
import Cart from './components/cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Signup from './components/signup';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/cart' exact Component={Cart}/>
        <Route path='/signup' exact Component={Signup}/>
        <Route path='/contact' exact Component={Contact}/>
        <Route path='/not-found' Component={NotFound}/>
        <Route path='/' exact Component={Home}/>
        {/* <Navigate to='/not-found'/>  */}
        <Route path="*" element={<Navigate replace to="/not-found" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
