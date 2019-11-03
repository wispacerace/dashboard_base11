<template>
<div id = "state_trans">
    <div id="big_buttons">
        <BigStateButton/>
        <BigStateButton/>
    </div>
    <div id="normal_buttons">
        <StateButton/>
        <StateButton/>
        <StateButton/>
        <StateButton/>
        <StateButton/>
        <StateButton/>
        <StateButton/>
        <StateButton/>
        <StateButton/>
        <StateButton/>
        <StateButton/>
        <StateButton/>
    </div>
</div>

</template>


<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import Plotly from 'plotly.js-dist';
import BigStateButton from '@/components/BigStateButton.vue'
import StateButton from '@/components/StateButton.vue'

export default {
  name: 'state_transition_buttons',
  components: {
    StateButton,
    BigStateButton
  }}
</script>

<style scoped>
#state_trans{
    width:1500px;
    height: 100%;
}
#big_buttons{
    float:left;
    width: 21%;
    height: 100%;
}

</style>