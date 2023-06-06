import { AppBar , Toolbar , styled , Box, Button, } from "@mui/material"
import { Link } from "react-router-dom"

const Sidenav = styled(AppBar)(({theme})=>({
    marginTop:'8.6vh',
    width:'25vh',
    left:0,
    height:'100%',
    border:'1px solid black',
    backgroundColor:'#fff',
    color:'black',
    [theme.breakpoints.down('sm')]:{
        width:'12vh',
        marginTop:'6.5vh',
    },
    [theme.breakpoints.down('md')]:{
        width:'15vh',
        marginTop:'7.5vh',
    }
})) 
const Menu = styled(Toolbar)(({theme})=>({
    display:"flex",
    flexDirection:'column'
    
})) 
const Button1 = styled(Button)(({theme})=>({
  marginTop:'10vh',
 borderBottom:'2px solid black',
 fontSize:'20px',
 fontWeight:'bold',
 ":hover":{
    backgroundColor:'rgb(0, 0, 0, 0.5)',
    color:'#fff'
 },
 [theme.breakpoints.down('sm')]:{
   fontSize:'10px'
},
[theme.breakpoints.down('md')]:{
    fontSize:'15px'
}
    
})) 
const Button2 = styled(Button)(({theme})=>({
    marginTop:'10vh',
    borderBottom:'2px solid black',
    fontSize:'15px',
    fontWeight:'bold',
    height:"8vh",
    width:'15vh',
    ":hover":{
        backgroundColor:'rgb(0, 0, 0, 0.5)',
        color:'#fff'
     }
    
})) 

const Sidebar = ()=>{
    return(
        <>
      
        <Sidenav>
            <Menu>
               <Link to='/'> <Box><Button1>Contacts</Button1></Box></Link>
             
             <Link to='/dashboard'> <Box><Button2>Maps and Charts</Button2></Box></Link>
            
            </Menu>
        </Sidenav>
       
        </>
    )
}
export default Sidebar