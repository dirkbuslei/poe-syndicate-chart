<template>
  <div
    class="reward"
    :class="{
      'reward--keep': status === 1,
      'reward--decide': status === 2,
      'reward--remove': status === 3,
    }"
  >
    <div class="reward__head" @click="cycleRewardStatus">
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
  data: function() {
    return {
      status: 0,
    }
  },
  methods: {
    cycleRewardStatus() {
      if (this.status < 3) {
        this.status++
      } else {
        this.status = 0
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.reward {
  $root: &;
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
 /* &:hover {
    .reward__tiers {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      background: red;
    }
  }*/

  &--keep {
    #{$root}__head {
      background: rgba(green, 0.6);
    }
  }
  &--decide {
    #{$root}__head {
      background: rgba(yellow, 0.6);
    }
  }
  &--remove {
    #{$root}__head {
      background: rgba(red, 0.6);
    }
  }
}
</style>
