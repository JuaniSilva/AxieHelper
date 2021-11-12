<template>
  <div class="main-container">
    <h3>Buffs</h3>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/buff-attack-up.png"
        alt="Attack Up icon"
      />
      <p>Increase the next Attack by 20%</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/buff-morale-up.png"
        alt="Morale Up"
      />
      <p>Increases Morale by 20% for the next round.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/buff-speed-up.png"
        alt="Speed Up"
      />
      <p>Increases Speed by 20% for the next round.</p>
    </div>
    <h3>Debuffs</h3>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-aroma.png"
        alt="Aroma"
      />
      <p>Target priority changes to affected Axie for the next round.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-attack-down.png"
        alt="Attack Down"
      />
      <p>Decreases the next Attack by 20%.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-chill.png"
        alt="Chill"
      />
      <p>Affected Axie can't enter last stand.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-fear.png"
        alt="Fear"
      />
      <p>Affected Axie can't attack</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-fragile.png"
        alt="Fragile"
      />
      <p>Shield takes double the damage for the next incoming attack.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-jinx.png"
        alt="Jinx"
      />
      <p>Affected Axie can't land critcal hits for the next round.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-lethal.png"
        alt="Lethal"
      />
      <p>Next hit against affected Axie is critical.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-morale-down.png"
        alt="Morale Down"
      />
      <p>Decreases Morale by 20% for the next round.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-poison.png"
        alt="Poison"
      />
      <p>Until removal, affected Axie loses 2 HP for every action.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-sleep.png"
        alt="Sleep"
      />
      <p>Next incoming attack ignores shields.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-speed-down.png"
        alt="Speed Down"
      />
      <p>Decreases speed by 20% for the next round.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-stench.png"
        alt="Stench"
      />
      <p>Affected Axie loses target priority for the next round.</p>
    </div>
    <div class="buf-container">
      <img
        src="https://axie.zone/assets/images/icons/debuff-stun.png"
        alt="Stun"
      />
      <p>Next attack misses / Next incoming attack ignores shields.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buffsdebuffs",
};
</script>

<style scoped>
h3{
  margin: 1rem 0;
}

</style>
