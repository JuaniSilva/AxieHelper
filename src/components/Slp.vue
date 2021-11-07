<template>
  <div>
    <img
      src="https://assets.coingecko.com/coins/images/10366/large/SLP.png?1578640057"
      alt=""
    />
    <p>{{ slpPrice }}</p>
  </div>
</template>
<script>
export default {
  name: "Slp",
  data() {
    return {
      slpPrice: 'Loading',
    };
  },
  methods: {
    async getPrice() {
      const res = await fetch(
        "https://api.binance.com/api/v3/ticker/price?symbol=SLPUSDT"
      );
      const data = await res.json();
      return data.price
    },
  },
  async created() {
    let price = await this.getPrice()
    this.slpPrice = `$${price}`
    this.slpPrice = this.slpPrice.slice(0, 7)
  },
};
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
img {
  width: 50px;
  transform: scale(0.8);
}
</style>
