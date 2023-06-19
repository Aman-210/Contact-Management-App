import { Box , Card , CardContent , Typography , styled} from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios"
import { useEffect  , useState} from "react"
import CountUp from 'react-countup';


// Styling
const Section = styled(Box)(({theme})=>({
  display:"flex",
   gap:'10vh',
   justifyContent:'center',
   [theme.breakpoints.down('sm')]:{
  
    display:"block"
      
   }
  }))
const Cards = styled(Card)(({theme})=>({
   
   [theme.breakpoints.down('sm')]:{
    width:"40vh",
    marginTop:'2vh',
    marginLeft:"5vh"
      
   }
  }));

const Number = styled(Typography)(({theme})=>({
   
  fontSize:"25px",
   [theme.breakpoints.down('sm')]:{
    fontSize:"20px"
      
   }
  }))

const API = 'https://disease.sh/v3/covid-19/all'

const Data1 = ()=>{
  const [detail, setDetail] = useState({});

  const getData = async (url) => {
    try {
      const res = await axios.get(url);
      setDetail(res.data);
    } catch (error) {
      console.log("error");
    }
  };
  
  useEffect(() => {
    getData(API);
  }, []);
  
  return (
    <Section>
      
      {Object.keys(detail).length === 0 ? (
        <CircularProgress color="inherit" />
      ) : (
        <>
        <Cards variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Infected
            </Typography>
            <Number  component="div">
              <CountUp start={0} end={detail.cases} duration={2.5} seperation = "," />
            </Number>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Total-Population -  
            <CountUp start={0} end={detail.population} duration={2.5} seperation = "," />
            </Typography>
            <Typography variant="body2">
              Number of active cases<br/> of Covid-19
            </Typography>
          </CardContent>
        </Cards>
      
            
          {/* card2 */}
        <Cards variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Recovered
            </Typography>
            <Number component="div">
            <CountUp start={0} end={detail.recovered} duration={2.5} seperation = "," />
            </Number>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Total-Population - 
            <CountUp start={0} end={detail.population} duration={2.5} seperation = "," />
            </Typography>
            <Typography variant="body2">
              Number of  recoveries from <br/> Covid-19
            </Typography>
          </CardContent>
        </Cards>
          {/* card3 */}
        <Cards variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Deaths
            </Typography>
            <Number component="div">
            <CountUp start={0} end={detail.deaths} duration={2.5} seperation = "," />
            </Number>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Total-Population - 
            <CountUp start={0} end={detail.population} duration={2.5} seperation = "," />
            </Typography>
            <Typography variant="body2">
              Number of deaths because<br/> Covid-19
            </Typography>
          </CardContent>
        </Cards>
             </>
             )}
        </Section>
    )
}
export default Data1