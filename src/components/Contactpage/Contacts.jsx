import { Box , Button, styled,Table , TableBody, TableCell , TableContainer , TableHead , TableRow , Paper,   } from "@mui/material";
import { useSelector  , useDispatch} from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import { Link } from "react-router-dom";
import { deleteUser } from "../../Reducers/Reducer";

const Section = styled(Box)(({theme})=>({
    width:'100%',
    
}))
const Container = styled(TableContainer)(({theme})=>({
 
  marginTop:'5vh',
  background:"#344A5F",
  
 
  }))
const Button1 = styled(Button)(({theme})=>({
  marginLeft:'-2.5vh',
  marginTop:'1vh',
  color:"#2A94D6",
  [theme.breakpoints.down('sm')]:{
    marginLeft:'-10.5vh',
    fontSize:"10px",
    marginTop:'1.5vh',
      
   }
 
  }));

 const TableCells = styled(TableCell)(({theme})=>({
  color:"#fff",
  [theme.breakpoints.down('sm')]:{
   
   fontSize:"10px"
   
  }
 
  }))

 const Div = styled(Box)(({theme})=>({
 
  [theme.breakpoints.down('sm')]:{
   display:"flex",
   marginLeft:"8vh",
  
     
  }
 
  }))
 const CancelButton = styled(CancelIcon)(({theme})=>({
  color:"#2A94D6",
  [theme.breakpoints.down('sm')]:{
   
  fontSize:"15px",
  marginLeft:"-7vh"
     
  }
 
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
            <TableCells sx={{fontSize:'15px' , fontWeight:"bold"}}>Index</TableCells>
            <TableCells sx={{fontSize:'15px' , fontWeight:"bold"}}>FirstName</TableCells>
            <TableCells sx={{fontSize:'15px' , fontWeight:"bold"}}>LastName</TableCells>
            <TableCells sx={{fontSize:'15px' , fontWeight:"bold"}}>Status</TableCells>
            <TableCells  sx={{fontSize:'15px' , fontWeight:"bold"}}>Edit</TableCells>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user , index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             <TableCells component="th" scope="row">
                {user.id}
              </TableCells>
              <TableCells >{user.FirstName}</TableCells>
              <TableCells >{user.LastName}</TableCells>
              <TableCells>{user.Status}</TableCells>
              <TableCell>
              <Div>
              <Link to={`/update/${user.id}`} style={{textDecoration:"none"}}><Button1 >Edit</Button1></Link>
              <Button onClick={()=>handleDelete(user.id)} ><CancelButton/></Button>
              </Div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>






        
         </Section>
    
)

}
export default Contacts;