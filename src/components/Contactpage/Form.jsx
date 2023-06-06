 import { AppBar , Toolbar , Typography , styled, Box} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../Reducers/Reducer';


const Heading = styled(Typography)(({theme})=>({
  display:'flex',
  fontSize:"20px",
  fontWeight:"bold",
  justifyContent:"center",
  alignItems:'center',
  textAlign:'center'
  
}))
const Section = styled(Box)(({theme})=>({
  width:'100vh',
  backgroundColor:"#f5f5f5",
  height:'65vh',
  display:'flex',
  flexDirection:'column',
  marginLeft:'20rem',
  marginTop:"10rem",
  [theme.breakpoints.down('sm')]:{
    width:'78vh',
    marginLeft:'-21vh'

    
    }
}))


const Form = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Status, setStatus] = useState('active');
 
  const handleInActive = ()=>{
    setStatus('Inactive')
  }

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({ id, FirstName, LastName, Status }));
     
    

  };

  return (
    <>
      <AppBar>
        <Toolbar>
      <Heading>Contact Details</Heading>
        </Toolbar>
    </AppBar>
    <Section style={{
        
    }}>
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex' , gap:'15vh' , marginLeft:'20vh', marginTop:"10vh"}}>
          <label htmlFor="firstName" style={{fontSize:'20px'}}>First Name:</label>
          <input
            type="text"
            id="firstName"
            style={{height:'5vh'}}
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div style={{display:'flex' , gap:'15vh' , marginLeft:'20vh', marginTop:"10vh"}}>
          <label htmlFor="lastName" style={{fontSize:'20px'}}>Last Name:</label>
          <input
            type="text"
            id="lastName"
            style={{height:'5vh'}}
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div style={{display:'flex' , gap:'15vh' , marginLeft:'20vh', marginTop:"10vh"}}>
          <label htmlFor="status" style={{fontSize:'20px'}} >Status:</label>
          <select
            id="status"
            value={Status}
            style={{marginLeft:"5vh" , width:'23vh' , height:"5vh"}}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option onClick={()=>handleInActive()} value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit"  style={{display:'flex' , gap:'20vh' , marginLeft:'40vh', marginTop:"10vh" , width:'20vh' , height:"5vh" , fontSize:"20px"  ,alignItems:"center"}}>Submit</button>
        
      </form>
    </Section>
    </>
  );
};

export default Form;
