import { AppBar, Box, styled, Toolbar, Typography , Button } from "@mui/material"
import { useState } from "react"
import { useSelector , useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "../../Reducers/Reducer"


const Section = styled(Box)(({theme})=>({
    width:"100vh",
    height:"70vh",
    background:"#f5f5f5",
    display:"flex",
    flexDirection:'column',
    marginLeft:'20rem',
    marginTop:'10rem',
    [theme.breakpoints.down('sm')]:{
        width:'78vh',
        marginLeft:'-21vh',
        marginTop:"10rem"
        
        }
}))
const Heading = styled(Typography)(({theme})=>({
    display:'flex',
    fontSize:"20px",
    fontWeight:"bold",
    color:"#344A5F",
    
  }));
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
    background:'#2A94D6',
    color:"black",
    ":hover":{
      backgroundColor:"#344A5F",
      color:"#fff"
  },
    [theme.breakpoints.down('sm')]:{
     marginLeft:'38vh'
  },
   
  }));



const Update = ()=>{
  const {id} = useParams();
  const users = useSelector((state) => state.users);
 const existingUser = users.filter(f => f.id == id);
 const {FirstName , LastName , Status} = existingUser[0];
 const [UFirstName, setFirstName] = useState(FirstName);
 const [ULastName, setLastName] = useState(LastName);
 const [UStatus, setStatus] = useState(Status);


 const dispatch = useDispatch();
 const navigate = useNavigate()
 

 const handleUpdate=(event)=>{
  event.preventDefault();
  dispatch(updateUser({
    id:id,
  FirstName:UFirstName,
  LastName:ULastName,
  Status:UStatus
  }))
  navigate('/')
 }

 

 
    return(
        <>
        <AppBar sx={{background:'#2A94D6',}}>
            <Toolbar>
                <Heading>
                    Update Contact details
                </Heading>
            </Toolbar>
        </AppBar>
        <Section>
        <form onSubmit={handleUpdate} >
        <Box1 >
          <label htmlFor="firstName" style={{fontSize:'20px'}}>First Name:</label>
          <input
            type="text"
            id="firstName"
            style={{height:'5vh'}}
            value={UFirstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </Box1>
        <Box style={{display:'flex' , gap:'15vh' , marginLeft:'20vh', marginTop:"10vh"}}>
          <label htmlFor="lastName" style={{fontSize:'20px'}}>Last Name:</label>
          <input
            type="text"
            id="lastName"
            style={{height:'5vh'}}
            value={ULastName}
            onChange={e => setLastName(e.target.value)}
          />
        </Box>
        <Box style={{display:'flex' , gap:'15vh' , marginLeft:'20vh', marginTop:"10vh"}}>
          <label htmlFor="status" style={{fontSize:'20px'}} >Status:</label>
          <select
            id="status"
            value={UStatus}
            style={{marginLeft:"5vh" , width:'23vh' , height:"5vh"}}
            onChange={e => setStatus(e.target.value)}
          >
            <option value="active">Active</option>
            <option  value="inactive">Inactive</option>
          </select>
        </Box>
        <Btn type="submit"  >Update</Btn>
        
      </form>
      
        </Section>
        </>
    )
}
export default Update