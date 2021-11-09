<template @add-slp="addSlp(totalTrophies)">
  <div>
    <img
      src="https://assets.coingecko.com/coins/images/10366/large/SLP.png?1578640057"
      alt=""
    />
    <p>
      <a
        href="https://www.binance.com/es/trade/SLP_USDT?layout=pro"
        target="_blank"
      >
        {{ slpPrice }}
      </a>
    </p>
  </div>
</template>
<script>
export default {
  name: "Slp",
  data() {
    return {
      slpPrice: "Loading...",
      slpCounter: 0,
    };
  },
  methods: {
    async getPrice() {
      const res = await fetch(
        "https://api.binance.com/api/v3/ticker/price?symbol=SLPUSDT"
      );
      const data = await res.json();
      return data.price;
    },
  },
  async created() {
    let price = await this.getPrice();
    this.slpPrice = `$${price}`;
    this.slpPrice = this.slpPrice.slice(0, 7);
  },
};
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  right: 1.25rem;
  position: absolute;
  top: 0.5rem;
  cursor: pointer;
  transform: scale(0.75);
  transition: all 0.2s ease-in-out;
}
img {
  width: 50px;
  transform: scale(0.8);
}
a {
  color: #2c3e50;
  text-decoration: none;
}
div:hover {
  transform: scale(0.9);
}
</style>
