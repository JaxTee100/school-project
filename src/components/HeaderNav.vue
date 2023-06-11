<template>
  <nav>
    <router-link class="link" to="/">Home</router-link> 
    <router-link class="link" to="/about">About</router-link>
    <router-link class="link" to="/contact">Contact</router-link>
    <router-link class="link" to="/login">Login</router-link>
  </nav>
</template>

<script>
export default {
    name: 'HeaderNav'
}
</script>

<style scoped>
    nav{
        border: 3px solid #7c55d6;
        padding: 20px;
        font-size: 20px;
        color: white;
        font-weight: 600;
        display: flex;
        justify-content: space-around;
        background: #7c55d6;
    }
    .link{
        all: unset;
        cursor: pointer;
    }
    
    nav a.router-link-exact-active {
        color: #42b983;
    }
</style>