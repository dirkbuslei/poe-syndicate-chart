<template>
  <div class="reward">
    <div class="reward__head">
      <div
        class="reward__image"
        :style="{ backgroundImage: 'url(' + reward.image + ')' }"
      ></div>
      <h3 class="reward__name">{{ reward.name }}</h3>
    </div>
    <div class="reward__tiers">
      <div
        class="reward__tier"
        v-for="tier in reward.tiers"
        v-bind:key="tier.id"
      >
        {{ tier.description }}
      </div>
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
  border: 1px solid #fff;
  position: relative;
  &__head {
    position: relative;
  }
  &__image {
    padding-bottom: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
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
  &__tiers {
    display: none;
  }
  &:hover {
    .reward__tiers {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background: red;
    }
  }
}
</style>
