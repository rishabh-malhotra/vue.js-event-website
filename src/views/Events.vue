<template>
<div>
    <event-view :value = "$route.params.id"></event-view>
</div>
</template>

<script>
import EventView from '../components/EventView'
export default {
name:'events',
components:{
    EventView,
 }
}
</script>

<style>

</style>
