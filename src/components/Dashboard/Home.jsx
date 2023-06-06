import { AppBar, Box, Toolbar , Table , TableBody, TableCell , TableContainer , TableHead , TableRow , Paper, styled, Typography,  } from "@mui/material"


import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";

 
  const Container = styled(TableContainer)(({theme})=>({
    marginTop:"10vh"
  }))
  const Heading = styled(Typography)(({theme})=>({
    display:'flex',
    fontSize:"20px",
    fontWeight:"bold",
    
    
  }))
  
  // Api call with the help of axios
   
  const API = "https://disease.sh/v3/covid-19/countries"
  
const Home = ()=>{
    const [detail, setDetail] = useState([]);
    const getData = async(url)=>{
        try{const res = await axios.get(url);
        const data = await res.data
        setDetail(data);
        }catch(error){
            console.log('Error While calling the API' , error.message);
            return error
        }
    }

     useEffect(()=>{
        getData(API)
     },)


    return(
     <>
   <Box>
    <AppBar>
        <Toolbar>
      <Heading>Covid19 Worldwide Current Dashboard</Heading>
        </Toolbar>
    </AppBar>
   <Container component={Paper}>
      <Table sx={{ minWidth: '100%' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">TotalConfirmed</TableCell>
            <TableCell align="right">TotalRecovered&nbsp;</TableCell>
            <TableCell align="right">TotalDeaths&nbsp;</TableCell>
            <TableCell align="right">NewRecovered&nbsp;</TableCell>
            <TableCell align="right">ActiveCases&nbsp;</TableCell>
            <TableCell align="right">Popuulation&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {detail.map((data) => (
            <TableRow
              key={detail.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.country}
              </TableCell>
              <TableCell align="right">{data.cases}</TableCell>
              <TableCell align="right">{data.recovered}</TableCell>
              <TableCell align="right">{data.deaths}</TableCell>
              <TableCell align="right">{data.todayRecovered}</TableCell>
              <TableCell align="right">{data.active}</TableCell>
              <TableCell align="right">{data.population}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
   </Box>
   
   
   </>

    )
}
export default Home