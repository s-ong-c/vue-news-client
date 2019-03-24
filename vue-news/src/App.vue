<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
 components:{
   ToolBar,
 },
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
a {
  color: #35495e;
  text-decoration: none;
}
a:hover {
  color:#42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* router transi */
.page-enter-active, .page-leave-active{
  transition:opacity .5s;
}
.page-enter, .page-leave-to{
  opacity: 0;
}
</style>
