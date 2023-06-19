
import{ AppBar, Toolbar,styled, Typography , Box } from '@mui/material'
import { Link } from 'react-router-dom'
import Page1 from '../Contactpage/page1'



const NavBar = styled(Toolbar)(({theme})=>({
    
    
})) 
const Nav = styled(Box)(({theme})=>({
    display:'flex',
    gap:"10vh",
    marginLeft:"40vh",
    [theme.breakpoints.down('sm')]:{
  
        marginLeft:"6vh",
         gap:"2vh"
           
        }
    
})) ;

const Logo = styled(Typography)(({theme})=>({
    fontSize:"25px",
    color:"#344A5F",
    fontWeight:"bold",
    [theme.breakpoints.down('sm')]:{
  
       fontSize:"15px",
       }
})) ;

const Tab1 = styled(Typography)(({theme})=>({
    fontSize:"20px",
    color:"#344A5F",
    [theme.breakpoints.down('sm')]:{
  
       fontSize:"13px",
       }
})) 



const Navbar = ()=>{
    return(
   <>
   <Link to="/">
    <AppBar sx={{ background:"#2A94D6"}}>
        <NavBar >
            <Logo >Covid-Tracker</Logo>
            <Nav>
            <Link to='/' style={{textDecoration:'none'}}>  <Tab1>Contacts</Tab1></Link>
            <Link to='/dashboard' style={{textDecoration:'none'}}>  <Tab1>Charts/Dashboard</Tab1></Link>
            <Link to='/data' style={{textDecoration:'none'}}> <Tab1>Maps</Tab1></Link>
            </Nav>
            
        </NavBar>
    </AppBar>
   
    <Page1/>
    </Link>
   </>
    )
}
export default Navbar