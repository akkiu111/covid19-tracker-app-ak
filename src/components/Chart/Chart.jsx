import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({data : {confirmed, recovered, deaths}, country}) =>{
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {

        const fetchAPI = async () => {
            
            const initialDailyData = await fetchDailyData();

            setDailyData(initialDailyData);
        };

        fetchAPI();
    }, []);

console.log(recovered, deaths, confirmed);
    const lineChart = (
           dailyData.length
           ? ( 
           <Line
                data = {{
                 labels: dailyData.map(({date}) => new Date(date).toDateString()),
                 datasets: [
                    {
                    data: dailyData.map(({confirmed}) => confirmed),
                    label : 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                    },

                   {
                    data: dailyData.map(({recovered}) => recovered),
                    label : 'Recovered',
                    borderColor: 'green',
                    backgroundColor: 'rgba(0, 255, 0, 0.5)',
                    fill: true
                   },
                
                 {
                    data: dailyData.map(({deaths}) => deaths),
                    label : 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                 }
                ]
              }}
            />) : null
    );


    const barChart = (
        confirmed
        ? ( 
        <Bar
             data = {{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [{
                 label : 'People',
                 backgroundColor: ['blue', 'green', 'red'],
                 data : [confirmed.value, recovered.value, deaths.value]
              },],
           }}

           options={{
               legend: { display: false },
               title: { display: true,
                text:`Current situation in ${country}`},
           }}
         />) : null
 );

    return(
        <div className = {styles.container}>
            
            { country ? barChart : lineChart}

            </div>
    );
};

export default Chart;