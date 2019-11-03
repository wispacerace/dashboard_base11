<template>
<div id="charts_section">
    <div id="plots_header">
        Live Plots:
    </div>
  <div id="charts" class="container">
    <div>
      <AltitudeChart />
      <VelocityChart />
    </div>
    <div>
      <AccelerationChart/>
      <AirspeedChart/>
    </div>
  </div>

</div>

</template>


<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import Plotly from 'plotly.js-dist';

import VelocityChart from '@/components/VelocityChart.vue'
import AltitudeChart from '@/components/AltitudeChart.vue'
import AccelerationChart from '@/components/AccelerationChart.vue'
import AirspeedChart from '@/components/AirspeedChart.vue'

export default {
  name: 'charts',
  components: {
    VelocityChart,
    AltitudeChart,
    AccelerationChart,
    AirspeedChart,
  }}
</script>

<style scoped>
#charts_section{
   
}
#charts{
  background-color:#874248;
  width:1020px;
  padding:5px;
  float: left;
}
#plots_header{
    color: black;
    width:1020px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background:	#BDC0BF;
    padding: 5px;
    margin: 0px;
    text-align: left;
    font-size: 20px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
</style>
