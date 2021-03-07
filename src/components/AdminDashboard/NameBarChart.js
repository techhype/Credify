import React from 'react'
import {Bar} from 'react-chartjs-2'

const LevelBarChart = (props) => {
  console.log(props);
  return (
    <>
    <h1>Bar chart</h1>
    <Bar
      data={{
        labels:props.certNames,
        datasets:[
          {
            label:'#Certification level Count',
            data:props.certNamesTotal,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
          }
        ]
      }}
      width={100}
      height={50}
      options={{
        responsive:true,
        // maintainAspectRatio:false,
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero:true,
              stepSize:1
            }
          }]
        }
      }}
    />
    </>
  );
}

export default LevelBarChart;