
import './App.css';
// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from './components/Sidebar/Navbar';
import Form from './components/Contactpage/Form';
import Home from './components/Dashboard/Home';
import Update from './components/Contactpage/Update';



function App() {
  return (
   <BrowserRouter>
   
   <Routes>
   
   <Route path='/' element={<Navbar/>}></Route>
  
   <Route path='/form' element={<Form/>}></Route>
   <Route path='/dashboard' element={<Home/>}></Route>
   <Route path='/update/:id' element={<Update/>}></Route>
   
   </Routes>
  </BrowserRouter>
  );
}

export default App;