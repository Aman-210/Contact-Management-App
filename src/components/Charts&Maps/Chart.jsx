import { Box, styled } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: 'center',
  marginTop: '3vh',
  
  [theme.breakpoints.down('sm')]:{
   
    marginLeft:'-3vh'      
   }
}));

const Chartt = styled(Chart)(({ theme }) => ({
  
 width:'40rem',
 height:'30rem',
 [theme.breakpoints.down('sm')]:{
  
  width:'30rem',
  height:"20rem"
    
 }

}))

const URL = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";

const Charts = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            fontSize: '12px',
            color:["#fff"],
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '12px',
            color:["#fff"],
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy'
        }
      },
      colors: ['#007BFF', '#FF0000', '#28A745'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      legend: {
        fontSize: '12px',
        markers: {
          radius: 4,
          width: 12,
          height: 12
        }
      }
    },
    series: [
      {
        name: 'Cases',
        data: []
      },
      {
        name: 'Deaths',
        data: []
      },
      {
        name: 'Recovered',
        data: []
      }
    ]
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(URL);
        const data = response.data;
        const cases = Object.entries(data.cases).map(([date, count]) => ({ x: new Date(date), y: count }));
        const deaths = Object.entries(data.deaths).map(([date, count]) => ({ x: new Date(date), y: count }));
        const recovered = Object.entries(data.recovered).map(([date, count]) => ({ x: new Date(date), y: count }));

        setState(prevState => ({
          ...prevState,
          options: {
            ...prevState.options,
            xaxis: {
              ...prevState.options.xaxis,
              
              min: new Date(Object.keys(data.cases)[0]).getTime(),
              max: new Date(Object.keys(data.cases)[Object.keys(data.cases).length - 1]).getTime()
            }
          },
          series: [
            {
              ...prevState.series[0],
              data: cases
            },
            {
              ...prevState.series[1],
              data: deaths
            },
            {
              ...prevState.series[2],
              data: recovered
            }
          ]
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <Section>
      <Chartt
        options={state.options}
        series={state.series}
        type="area"
        
      />
    </Section>
  );
};

export default Charts