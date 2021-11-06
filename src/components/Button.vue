<template>
  <button @mouseover="changeStyle">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
  methods: {
    changeStyle(){

    }
  },
}
</script>

<style scoped>
button{
  border: 1px solid #000;
  background-color: #cf804a;
  cursor: pointer;
  padding: .5rem;
  color: #fff;
  font-weight: 100;
  transition: all 0.15s ease-in-out;
  margin: 0 .5rem;
}
button:hover{
  transform: scale(1.1);
}
</style>