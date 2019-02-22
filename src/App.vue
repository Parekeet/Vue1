<template>
  <div id="app">
    <WellsCharts v-bind:wellData="wellData" />
  </div>
</template>

<script> 

import WellsCharts from './components/WellsCharts'; 

export default {
  name: 'app',
  components: { 
    WellsCharts
  },
  data() {
    return {
      wellData: [
        {
          "wellId": "100041807911W600",
          "prodDate": "2017-01-01T07:00:00Z",
          "oilRate": {
            "value": 0.73,
            "uom": "m3/d"
          },
          "gasRate": {
            "value": 17.42,
            "uom": "m3/d"
          }
        },
        {
          "wellId": "100041807911W600",
          "prodDate": "2012-02-01T07:00:00Z",
          "oilRate": {
            "value": 1.02,
            "uom": "m3/d"
          },
          "gasRate": {
            "value": 39.64,
            "uom": "m3/d"
          }
        },
        {
          "wellId": "100041807911W600",
          "prodDate": "2018-04-01T06:00:00Z",      
          "oilRate": {
            "value": 0.2,
            "uom": "m3/d"
          },
          "gasRate": {
            "value": 14.91,
            "uom": "m3/d"
          }
        }

        ]
    }
  }
}
</script>

<style> 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
