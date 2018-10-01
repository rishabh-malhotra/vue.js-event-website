<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1></h1>
                <img :src="image.text">
                <button class ="btn btn-success">Going</button>
                <button class="btn btn-warning">Not Going</button>
                <button class="btn btn-info">Maybe</button>
            </div>
        </div>
    </div>

</template>

<script>
import EventListing from './EventListing'
import eventValue from "@/data/DataValues.js"
export default{
    name: "EventView"
}

function get_Elememt(){
    var x=document.getElementById('$route.params.id')
    console.log(x)
}
</script>

<style>

</style>
