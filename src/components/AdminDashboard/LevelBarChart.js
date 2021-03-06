import React from 'react'
import {Bar} from 'react-chartjs-2'

const LevelBarChart = (props) => {
  // console.log(props);
  return (
    <>
    <h1>Bar chart</h1>
    <Bar
      data={{
        labels:props.levelNames,
        datasets:[
          {
            label:'#Certification level Count',
            data:props.levelTotal,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
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
      height={100}
      width={180}
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