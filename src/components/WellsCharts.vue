
 <template> 
    <div class="container-fluid text-center"> 

        <img src="../assets/unnamed.png"  class="d-inline" alt="Ruths Logo" >  

         <div class="row d-flex justify-content-around mt-4" id="vue">
             <button type="button" class="col-3 btn btn-primary btn-border" id="100041807911W600" v-on:click="select($event)">100041807911W600</button>
             <button type="button" class="col-3 btn btn-primary btn-border" id="100042407712W600" v-on:click="select($event)">100042407712W600</button>
             <button type="button" class="col-3 btn btn-primary btn-border" id="100042007811W600" v-on:click="select($event)">100042007811W600</button>
         </div>

        <div class="container mt-4">
            <div id="chart" style="width: 100%; height: 700px"></div>
        </div>
 
    </div>
</template> 


<style>
 * {
     background-color: #E3E3E3;
     color: #3A3A3C;
 }

 .btn-border {
     border: solid white 3px;
     border-radius: 25px;
     background-color: #79AECA;
     color: white;
 }

    .pointer {
        cursor: pointer;
    } 

.title-padding {
    height: 67px;
    font-size: 3rem;
}

</style>

 

<script>
import Vue from 'vue' 
import IEcharts from 'vue-echarts-v3' 
import axios from 'axios'
import VueAxios from 'vue-axios'
import WellJson from '../wellResponse.json' 
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'   
import * as echarts from 'echarts' 




function drawChart (targetId) {
        var wellData = WellJson.data;  
        var filteredById = wellData.filter(wellData => wellData.wellId === targetId); 
        var gasRate = [];
        var oilRate = [];
        var prodDate = [];
 
        filteredById.map(function(obj){  
            gasRate.push(obj.gasRate.value);
            oilRate.push(obj.oilRate.value); 
            prodDate.push(obj.prodDate);  
        })

        var gasMax = gasRate.reduce(function(a, b) {
            return Math.max(a, b);
        });
 
        var oilMax = oilRate.reduce(function(a, b) {
            return Math.max(a, b);
        });

        var max = oilMax > gasMax ? oilMax : gasMax;
 
   		var chart = document.getElementById('chart');
        var myChart = echarts.init(chart);
        var option = {
            title: {
                text: "Well ID: " + targetId,
                textstyle: {
                    color: 'white'
                }
            },
            tooltip: {
                formatter: '{a0}: {c0} <br /> {d0}'
            },
            xAxis: { 
                data: prodDate,
                // axisLabel: {
                //     color: 'black'
                // }
                axisLabel: {
                    formatter: function (prodDate, index) {
                        // Formatted to be month/day; display year only in the first label
                        var date = new Date(prodDate);
                        var texts = [(date.getMonth() + 1), date.getDate(), date.getFullYear()];
                        // if (prodDate === 0) {
                        //     texts.unshift(date.getYear());
                        // }
                        return texts.join('/');
                    }
                } 
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: max,
                axisLabel: {
                    color: 'black'
                }
            },
            series: [
                {
                    name: 'Oil Rate',
                    type: 'line', 
                    data: oilRate
                },
                {
                    name: 'Gas Rate',
                    type: 'line', 
                    data: gasRate
                }
            ]
        };
        myChart.setOption(option);

}
 
export default { 
    name: 'WellsCharts',
    methods: {
        select: function(event) {
            var targetId = event.currentTarget.id; 
            drawChart(targetId);
        }
    }
} 
        

</script>