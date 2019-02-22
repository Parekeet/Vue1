
 <template> 
    <div > 
        <IEcharts :option="line" :loading="loading" id="chart"></IEcharts>
    </div>
</template> 




<script> 
    // export default {
    //     name: 'WellsCharts',
    //     props: [ "wellData" ] 
    // }

// <template>
//     <div>
//         <div v-bind:key="well.wellId" v-for="well in wellData">
//             <h1>Hi, fuckshit, here's the well ID: {{ well.wellId }}</h1>
//             <h1>Hi, shit head, here's the oil rate: {{ well.oilRate.value }}</h1>
//             <h1>Hi, fuck head, here's the gas rate: {{ well.gasRate.value }}</h1>
//             <br>  
//         </div>   
//     </div>
// </template>
 

</script>
 

<script>

import IEcharts from 'vue-echarts-v3' 
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line' 
import axios from 'axios'
import VueAxios from 'vue-axios'
 

getWellData ()

export default {



    name: 'WellsCharts',
    props: [ "wellData" ], 
    data (props) {

        var wellData = props._props.wellData; 

        var wellId = [];
        var gasRate = [];
        var oilRate = [];
        var prodDate = [];

        wellData.map(function(obj){
            wellId.push(obj.wellId);
            gasRate.push(obj.gasRate.value);
            oilRate.push(obj.oilRate.value); 
            prodDate.push(obj.prodDate); 
        })

        console.log(wellId);
        console.log(gasRate);
        console.log(oilRate);
        console.log(prodDate);

        return {
            loading: false,
            line: {
                title: {
                    text: 'ECharts'
                },
                tooltip: {},
                xAxis: {
                    data: prodDate
                    // data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']
                },
                yAxis: {},
                series: [{
                    name: 'Bleep Bloop Blap',
                    type: 'line', 
                    data: oilRate
                    // data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }
        },
        components: {
            IEcharts
        },
}


function getWellData () {
    console.log("SUP this is getwell data")
    axios.get('/wellResponse.json')
    .then((response) => {
        console.log(response.data)
    })
    .catch((err) => {
        console.log(err);
    })
}
 
</script>