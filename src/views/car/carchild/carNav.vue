<template>
  <div class="car">
      <nav-bar>
          <div class="carnav" slot="center">
              购物车({{this.$store.state.carList.length}})
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  components:{
    NavBar
  }
}
</script>

<style>

</style>