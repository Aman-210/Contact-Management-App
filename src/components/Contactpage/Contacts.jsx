import { Box , Button, styled, Typography ,Table , TableBody, TableCell , TableContainer , TableHead , TableRow , Paper,   } from "@mui/material";
import { useSelector  , useDispatch} from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";
import { deleteUser } from "../../Reducers/Reducer";

const Section = styled(Box)(({theme})=>({
    width:'100%',
       
}))
const Container = styled(TableContainer)(({theme})=>({
  marginLeft:'25vh',
  width:"170vh",
  marginTop:'5vh',
  
  }))
const Button1 = styled(Button)(({theme})=>({
  marginLeft:'-9vh',
  marginTop:'1vh',
  
 
  }))



  const Contacts = ()=>{

    
    const users = useSelector((state)=> state.users);
 
    const dispatch = useDispatch()

    const handleDelete = (id)=>{
    dispatch(deleteUser({id : id}))
    }
    return(
        
        <Section >

      <Container component={Paper}>
        <Table sx={{ width: '100%' }} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
            <TableCell sx={{fontSize:'15px' , fontWeight:"bold"}}>Index</TableCell>
            <TableCell sx={{fontSize:'15px' , fontWeight:"bold"}}>FirstName</TableCell>
            <TableCell sx={{fontSize:'15px' , fontWeight:"bold"}}>LastName</TableCell>
            <TableCell sx={{fontSize:'15px' , fontWeight:"bold"}}>Status</TableCell>
            <TableCell  sx={{fontSize:'15px' , fontWeight:"bold"}}>Edit</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user , index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell >{user.FirstName}</TableCell>
              <TableCell >{user.LastName}</TableCell>
              <TableCell>{user.Status}</TableCell>
              <Link to={`/update/${user.id}`}><Button1 >Edit</Button1></Link>
              <Button onClick={()=>handleDelete(user.id)} ><CancelIcon/></Button>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>






        
         </Section>
    
)

}
export default Contacts;