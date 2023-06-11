<template>
 <HeaderNav />
  <router-view/>
</template>
<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default{
  components: {HeaderNav},
  setup() {
    
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}


</style>
