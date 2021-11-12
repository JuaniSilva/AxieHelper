<template>
  <form @submit.prevent action="">
    <label for="trophies">Trophies +/-</label><br>
    <input id="trophies" type="number" v-model.number="trophies" />
    <div class="container">
      <Button @click="addWin" text="Add Win" />
      <Button @click="addDraw" text="Draw" />
      <Button @click="addLose" text="Add Lose" />
    </div>
  </form>
    <label for="total-trophies">Current Trophies</label><br>
  <div class="small-container">
    <input class="total-trophies" id="total-trophies" v-model.number="totalTrophies">
    <img src="https://www.pinclipart.com/picdir/big/355-3556122_4-succeed-vector-trophy-icon-png-clipart.png" alt="">
  </div>
  <div class="container">
    <p>Wins: {{ wins }}</p>
    <p>Draws: {{ draws }}</p>
    <p>Loses: {{ loses }}</p>
  </div>
    <p>Win Rate {{ winrate }}%</p>
    <Button @click="resetStats" text="Reset"/>
    <Button @click="buffState" :text="showState" class="buffs"/>
    <Buffsdebuffs v-if="showBuffs"/>
</template> 

<script>
import Button from "./Button.vue";
import Buffsdebuffs from './Buffsdebuffs.vue'

export default {
  data() {
    return {
      winned: 0,
      lost: 0,
      trophies: '',
      totalTrophies: 0,
      wins: 0,
      loses: 0,
      draws: 0,
      showState: 'Show Buffs & Debuffs',
      showBuffs: false,
    };
  },
  components: {
    Button,
    Buffsdebuffs,
  },
  methods: {
    addWin() {
      this.totalTrophies += this.trophies;
      this.trophies = ''
      this.wins++
      localStorage.setItem('wins', this.wins)
      this.saveTrophies()
    },
    addLose() {
      this.totalTrophies -= this.trophies;
      this.trophies = ''
      this.loses++
      localStorage.setItem('loses', this.loses)
      this.saveTrophies()
    },
    addDraw(){
      this.trophies = ''
      this.totalTrophies += this.trophies;
      this.draws++
      localStorage.setItem('draws', this.draws)
      this.saveTrophies()
    },
    resetStats(){
      this.wins = 0
      this.loses = 0
      this.draws = 0
      localStorage.removeItem('wins')
      localStorage.removeItem('loses')
      localStorage.removeItem('draws')
    },
    saveTrophies(){
      localStorage.setItem('trophies', this.totalTrophies)
    },
    buffState(){
      this.showBuffs = !this.showBuffs
      if(this.showBuffs){
        this.showState = 'Close'
      } else {
        this.showState = 'Show Buffs & Debuffs'
      }
    }
  },
  computed: {
    winrate() {
      if(this.loses === 0 && this.wins === 0) return '0.00'
      return ((this.wins / (this.wins + this.loses)) * 100).toFixed(2);
    },
  },
  async created(){
    this.wins = localStorage.getItem('wins') ? parseInt(localStorage.getItem('wins')) : 0
    this.loses = localStorage.getItem('loses') ? parseInt(localStorage.getItem('loses')) : 0
    this.draws = localStorage.getItem('draws') ? parseInt(localStorage.getItem('draws')) : 0
    this.totalTrophies = localStorage.getItem('trophies') ? parseInt(localStorage.getItem('trophies')) : 0
  }
};
</script>
<style scoped>
form {
  margin: 1rem 0;
}
.container {
  margin: .5rem 0;
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
.buffs{
  display: flex;
  margin: 1rem auto;
}
</style>
