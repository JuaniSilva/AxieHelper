<template>
  <EnergyCalculator />
  <RankedTracker />
</template>

<script>
import EnergyCalculator from './components/EnergyCalculator.vue'
import RankedTracker from './components/RankedTracker.vue'

export default {
  name: 'App',
  components: {
    EnergyCalculator,
    RankedTracker,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap');
*{
  font-family: 'Bowlby One', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background: #E59866;
  width: 100%;
  margin: 0;
}
@media only screen and (min-width: 700px){
  body{
    max-width: 550px;
    display: flex;
    margin: 0 auto;
    }
}
</style>
