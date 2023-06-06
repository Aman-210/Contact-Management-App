import { styled , Box, Button } from "@mui/material"

// components
import Contacts from "./Contacts"
import { Link } from "react-router-dom"

// Styling
const Section = styled(Box)(({theme})=>({
display:'flex',
flexDirection:"column",
justifyContent:'center',
textAlign:'center',
marginTop:"15vh",

}))
const Heading = styled(Button)(({theme})=>({
border:".1px solid black",
backgroundColor:'rgb(0,0,0,0.5)',
color:'black',

":hover":{
    backgroundColor:"#0080ff",
    color:"#fff"
},
[theme.breakpoints.down('sm')]:{
    marginTop:"-10vh",
   marginLeft:"15vh"
},
[theme.breakpoints.down('md')]:{
   
}
}))

const Page1 = ()=>{
   

    return(
        <>
        <Link to='/'>
    <Section>
        <Box>
            <Link to='/form' ><Heading>Create Contact</Heading></Link>
        </Box>
        
        
        <Contacts/>

    </Section>
    </Link>
    </>
    )
}
export default Page1