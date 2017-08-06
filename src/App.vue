<template>
  <div id="app">
    <img src="./assets/logo.png">
     <!-- <router-view></router-view>  -->
     <scrum></scrum> 
    
  </div>
</template>

<script>
import Scrum from '@/components/Scrum'

export default {
  name: 'app',
  components:{
    Scrum
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
