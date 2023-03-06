/* 
   Para probar, reemplazar todo el codigo en App.js 
*/

import React from 'react'
import {Chart, registerables} from 'chart.js'

Chart.register(...registerables)

export default class Graficas extends React.Component {
   grafica = React.createRef()

   componentDidMount(){
      const ctx = this.grafica.current.getContext('2d')

      const myChart = new Chart(ctx, {
         type: 'bar',
         data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
               label: '# of Votes',
               data: [12, 19, 3, 5, 2, 3],
               
               borderWidth: 1
            }]
         },
         options: {
            scales: {
               y: {
                  beginAtZero: true
               }
            }
         }
      });
   }

   render(){
      return (
         <div>
            <canvas 
               ref={this.grafica}
               width='200' 
               height='100'>
            </canvas>
         </div>
      )
   }
}