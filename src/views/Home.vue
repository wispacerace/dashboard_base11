<template>
  <div id="home" class="container">
  <div class="columns module">
      <ChartWrapper1 />
      <ChartWrapper2 />
      <List />
  </div>
  </div>
</template>


<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import Plotly from 'plotly.js-dist';

import ChartWrapper1 from '@/components/ChartWrapper1.vue'
import ChartWrapper2 from '@/components/ChartWrapper2.vue'
import List from './components/List.vue'

export default {
  name: 'home',
  components: {
    ChartWrapper1,
    ChartWrapper2,
    List
  }}
</script>
