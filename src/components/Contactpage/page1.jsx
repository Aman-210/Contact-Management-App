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
backgroundColor:"#344A5F",
    color:"#fff",
    ":hover":{
      
      background:'#2A94D6',
      color:"#fff"
  },
[theme.breakpoints.down('sm')]:{
    marginTop:"-1s0vh",
   
},

}))

const Page1 = ()=>{
   

    return(
        <>
       
    <Section>
        <Box>
            <Link to='/form' style={{textDecoration:'none'}} ><Heading>Create Contact</Heading></Link>
        </Box>
        
        
        <Contacts/>

    </Section>
    
    </>
    )
}
export default Page1