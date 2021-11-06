<template>
  <img src="https://zonaxie.com/img/energy1.svg" alt="" />
  <p>Rounds {{ round }}</p>
  <p>{{ counter }} / 10</p>
  <div 
    class="controls">
    <Button @click="subsOne" text="-1 Energy" />
    <Button @click="addOne" text="+1 Energy" />
    <Button @click="nextRound" text="Next Round" />
    <Button @click="newGame" text="New Game" />
  </div>
</template>
<script>
import Button from "./Button.vue";

export default {
  name: "EnergyCalculator",
  components: {
    Button,
  },
  data() {
    return {
      round: 1,
      counter: 3,
    };
  },
  methods: {
    addOne() {
      this.counter < 10 ? this.counter++ : this.counter;
    },
    subsOne() {
      this.counter > 0 ? this.counter-- : 0;
    },
    nextRound() {
      this.round++
      this.counter += 2;
      if(this.counter >= 10){
        this.counter = 10
      }
    },
    newGame() {
      this.round = 1;
      this.counter = 3;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  width: 50px;
  border: 1px solid #2c3e50;
  border-radius: 50%;
}
.controls{
  display: flex;
  justify-content: space-evenly;
}
</style>
