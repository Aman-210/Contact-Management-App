
import{ AppBar, Toolbar,styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Page1 from '../Contactpage/page1'
import Sidebar from './Sidebar'


const NavBar = styled(Toolbar)(({theme})=>({
    display:"flex",
    justifyContent:'center',
    [theme.breakpoints.down('sm')]:{
    display:"block"
    }
    
})) 
const Heading = styled(Typography)(({theme})=>({
    [theme.breakpoints.down('sm')]:{
        marginTop:"2vh",
        
        }
    
})) 


const Navbar = ()=>{
    return(
   <>
   <Link to="/">
    <AppBar>
        <NavBar >
            <Heading>
                CONTACT PAGE
            </Heading>
        </NavBar>
    </AppBar>
    <Sidebar/>
    <Page1/>
    </Link>
   </>
    )
}
export default Navbar