
import './App.css';
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from './components/Sidebar/Navbar';
import Form from './components/Contactpage/Form';
import Home from './components/Dashboard/Home';
import Update from './components/Contactpage/Update';
import Data from './components/Charts&Maps/Data';




function App() {
  
  

  
  return (

   <BrowserRouter  basename='/Contact-Management-App'>

   <Routes>
   <Route path='/' element={<Navbar/>}></Route>
   
  
   <Route path='/form' element={<Form/>}></Route>
   <Route path='/dashboard' element={<Home/>}></Route>
   <Route path='/update/:id' element={<Update/>}></Route>
   <Route path='/data' element={<Data />}></Route>
   
   </Routes>
  </BrowserRouter>
  );
}

export default App;