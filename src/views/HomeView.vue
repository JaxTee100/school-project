<template>
  <div class="home">
    <h1>Home Page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderNav from '@/components/HeaderNav.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, HeaderNav
  }
}
</script>
