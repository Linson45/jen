import React from "react";
import Chart from "react-apexcharts";
function BarChart({width, height}){
    
    return(
        <>
     <Chart 
     type="bar"
     width={width}
     height={height}
     series={[
        
         {
             name:"company1",
             data:[5900,6900,7950,8220,9430,10440,11550,12660,13000,14080,15390,16520,17840,18234,19480,20456,21344],
            
         },
         {
            name:"company2",
            data:[700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700,700],
           
        },

       
        {
            name:"company3",
            data:[1000,1000,1000,1000,1000,1000,1000,1000,1000,1080,1090,1220,1340,1340,1340,1340,1140],
         
        },
        

     ]}
     options={{
        chart: {
          type: "bar",
          stacked:true,
          toolbar: {
            show: false,
          },
          
        },
        colors: ["#F178B6","#FFFFFF", "#F178B6"],
        xaxis:{
            labels:{
                show:false,
               
            },
            axisBorder: {
                show:false,
              },
              axisTicks: {
                show: false,
              },
           
        },
        yaxis:{
            labels:{
                show:false,
            }
        },
        tooltip:{
            enabled:false,
        },
        grid: {
            show: false,
          },
       
        dataLabels:{
         enabled:false,
        },
        legend: {
            show:false,
           
          }
       
    }}
     ></Chart>
        </>
    )
}
export  default BarChart;