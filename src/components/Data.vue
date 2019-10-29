<template>
    
</template>

<script>
    import {ipcRenderer} from 'electron'
    const DataEnum = require('../Enums/DataEnum.json');
    var quantity = [ ];
    export default {
        name: "Data",
        mounted(){
            this.setup();
        },
        methods:{
            setup: ()=>{
                ipcRenderer.on('broadcast', (event, data) => {
                    console.log("id: " + data.id + " Value: " + data.value);
                    quantity[data.id].values.push(data.value);
                    if(quantity[data.id].values.length > 5){
                        quantity[data.id].values.shift();
                    }
                });
                for (var i = 0; i < Object.keys(DataEnum).length; i++){
                    quantity.push({ name: DataEnum[i], values: []});
                }

            }
        },
        data: () => {
            return {
                quantities: quantity
            }
        },

    }
</script>

<style scoped>

</style>