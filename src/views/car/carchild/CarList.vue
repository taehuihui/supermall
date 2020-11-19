<template>
  <div class="car-list">
      <car-list-item v-for="(item,index) in carList" :key="index" :carItem="item">        
      </car-list-item>
  </div>
</template>

<script>
import CarListItem from 'views/car/carchild/CarListItem'
import { mapGetters } from 'vuex'

export default {
  components:{
    CarListItem
  },
  computed:{
    ...mapGetters({
      length:'carListLength',
      carList:'carList'
    })
  }
}
</script>

<style scoped>
  
</style>