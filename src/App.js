import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home/home';
import './App.css';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
     <Route path='/' element={<Home/>}></Route> 
   </Routes> 
   </>
  );
}

export default App;
