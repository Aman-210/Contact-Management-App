import { Box , styled} from "@mui/material";

import Data1 from "./Data1";
import { FetchData } from "../../Services/Api";
import { useState } from "react";
import { useEffect } from "react";
import Charts from "./Chart";


const Section = styled(Box)(({theme})=>({
  background:"#F0F1F2",
  
}))
const Image = styled('img')(({theme})=>({
 width:'20vh',
 marginTop:"-5vh",
 
}))
const Logo = styled(Box)(({theme})=>({
 display:"flex",
 justifyContent:'center'
 
}))


const Data = ()=>{
  

    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await FetchData();
        setData(result);
      };
  
      fetchData();
    }, []);


  return(
   <Section>
    <Logo>
      <Image src="https://www.icm-mhi.org/sites/default/files/images/COVID19/covid19.png" alt="logo" />
    </Logo>
    {data && <Data1 data={data} />}
    
    <Charts/>
   </Section>
  )
}
export default Data;
