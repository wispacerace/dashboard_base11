<template>
  <div id="home" class="container">
  <div class="columns module">
    <div id="top_portion">
      <ChartsSection/>
      <ListsSection />
    </div>
    <div id="bottom_portion">
      <StateTransitionButtons/>
    </div>
      <Data />
      <List />
  </div>
  </div>
</template>


<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import Plotly from 'plotly.js-dist';

import ChartsSection from '@/components/ChartsSection.vue'
import ListsSection from '@/components/ListsSection.vue'
import List from '@/components/List.vue'
import Data from '@/components/Data.vue'
import StateTransitionButtons from "@/components/StateTransitionButtons"

export default {
  name: 'home',
  components: {
    ChartsSection,
    ListsSection,
    List,
    Data,
    StateTransitionButtons
  }}
</script>

<style>
#top_portion{
  width: 100%;
  height: 665px;
}

#bottom_portion{
  width: 100%;
  height: 275px;
  background: white;
}

@font-face {
    font-family: 'aldrich';
    src: url('/src/assests/Aldrich-Regular.ttf');
}
</style>
