 import { AppBar , Toolbar , Typography , styled, Box ,Button} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../Reducers/Reducer';


const Heading = styled(Typography)(({theme})=>({
  color:"#344A5F",
  fontSize:"20px",
  fontWeight:"bold",
 marginLeft:'80vh',
 [theme.breakpoints.down('sm')]:{
 marginLeft:'16vh'

  },

 
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
const Box1 = styled(Box)(({theme})=>({
  display:'flex' ,
  gap:'15vh' ,
  marginLeft:'20vh',
  marginTop:"10vh",
  [theme.breakpoints.down('sm')]:{
   marginTop:"7.3vh"
},
 
}));

const Btn = styled(Button)(({theme})=>({
  display:'flex' ,
  gap:'20vh' ,
  marginLeft:'40vh', 
  marginTop:"10vh" ,
  width:'20vh' , 
  height:"5vh" ,
  fontSize:"20px",
  alignItems:"center",
  background:'rgb(0,0,0,0.5)',
  color:"black",
  background:'#2A94D6',
    color:"black",
    ":hover":{
      backgroundColor:"#344A5F",
      color:"#fff"
  },
  [theme.breakpoints.down('sm')]:{
   
},
 
}));

const Warning = styled(Typography)(({theme})=>({
  width:'250px',
  height:"48px",
  position:'absolute',
  right:0,
  top:"10%",
  background:'#2A94D6',
  color:"#fff",
  fontSize:'1.1rem',
  fontFamily:"cursive",
  padding:"5px",
  borderRadius:"5px",
  
  
  }));

const Form = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Status, setStatus] = useState('active');
  const [warning, setWarning] = useState('');
 
  const handleInActive = ()=>{
    setStatus('Inactive')
  }

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({ id, FirstName, LastName, Status  }));
     
    
  };

  const handleOnClick = ()=>{
    setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return handleOnClick
  }

  return (
    <>
      <AppBar sx={{background:'#2A94D6',}}>
        <Toolbar>
      <Heading>Contact Details</Heading>
        </Toolbar>
    </AppBar>
    <Section style={{
        
    }}>
      <form onSubmit={handleSubmit}>
        <Box1 >
          <label htmlFor="firstName" style={{fontSize:'20px'}}>First Name:</label>
          <input
            type="text"
            id="firstName"
            style={{height:'5vh'}}
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Box1>
        <Box style={{display:'flex' , gap:'15vh' , marginLeft:'20vh', marginTop:"10vh"}}>
          <label htmlFor="lastName" style={{fontSize:'20px'}}>Last Name:</label>
          <input
            type="text"
            id="lastName"
            style={{height:'5vh'}}
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <Box style={{display:'flex' , gap:'15vh' , marginLeft:'20vh', marginTop:"10vh"}}>
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
        </Box>
        <Btn type="submit" onClick={()=>handleOnClick()} >Submit</Btn>
        
      </form>
      {
      warning && <Warning>Contact Added Successfully</Warning>
      }
    </Section>
    </>
  );
};

export default Form;
