<template>
  <event-listing></event-listing>
</template>

<script>
// @ is an alias to /src
import EventListing from '@/components/EventListing.vue'

export default {
  name: 'home',
  components: {
    EventListing,
  }
}
</script>
