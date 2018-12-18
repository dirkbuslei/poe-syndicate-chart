<template>
  <div class="reward">
    <div class="reward__head">
      <div class="reward__image"><img :src="reward.image" /></div>
      <h3 class="reward__name">{{ reward.name }}</h3>
    </div>
    <div class="reward__tier" v-for="tier in reward.tiers" v-bind:key="tier.id">
      {{ tier.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reward',
  props: ['reward'],
}
</script>

<style lang="scss" scoped>
.reward {
  margin: 0 0 1em 0;
  &__head {
    position: relative;
  }
  &__image {
    &::after {
      content: '';
      clear: both;
      display: table;
    }
    img {
      width: 100%;
      height: auto;
      float: left;
      margin: 0;
    }
  }
  &__name {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    margin: 0;
    text-align: center;
  }
  &__tier {
  }
}
</style>
