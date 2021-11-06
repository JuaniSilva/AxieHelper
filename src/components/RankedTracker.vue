<template>
  <form @submit.prevent action="">
    <label for="trophies">Thropies +/- </label><br>
    <input id="trophies" type="number" v-model.number="trophies" />

    <div class="container">
      <Button @click="addWin" text="Add Win" />
      <Button @click="addDraw" text="Draw" />
      <Button @click="addLose" text="Add Lose" />
    </div>
  </form>
  <label for="total-trophies">Current Trophies</label><br>
  <input class="total-trophies" id="total-trophies" v-model.number="totalTrophies">
  <img src="https://www.pinclipart.com/picdir/big/355-3556122_4-succeed-vector-trophy-icon-png-clipart.png" alt="">
  <div class="container">
    <p>Wins: {{ wins }}</p>
    <p>Draws: {{ draws }}</p>
    <p>Loses: {{ loses }}</p>
  </div>
    <p>Win Rate {{ winrate }}%</p>
</template>
<script>
import Button from "./Button.vue";
export default {
  data() {
    return {
      winned: 0,
      lost: 0,
      trophies: 0,
      totalTrophies: 0,
      wins: 0,
      loses: 0,
      draws: 0,
    };
  },
  components: {
    Button,
  },
  methods: {
    addWin() {
      this.totalTrophies += this.trophies;
      this.wins++
    },
    addLose() {
      this.totalTrophies -= this.trophies;
      this.loses++
    },
    addDraw(){
      this.draws++
    }
  },
  computed: {
    winrate() {
      if(this.loses === 0 && this.wins === 0) return 0
      return ((this.wins / (this.wins + this.loses)) * 100).toFixed(2);
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem 0;
}
.container {
  margin: 1rem 0;
  display: flex;
  justify-content: space-evenly;
}
input{
  color: #2c3e50;
  background: inherit;
  border: 1px solid #000;
  padding: .5rem;
}
input:focus{
  outline: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.total-trophies{
  border: none;
  width: 50px;
}
img {
  width: 25px;
}
</style>
