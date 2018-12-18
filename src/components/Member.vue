<template>
  <div
    class="member"
    :class="{
      'member--keep': status === 0,
      'member--decide': status === 1,
      'member--remove': status === 2,
    }"
  >
    <div class="member__head" @click="cycleMemberStatus">
      <div class="member__image"><img :src="member.image" /></div>
      <h2 class="member__name">{{ member.name }}</h2>
    </div>
    <Branch
      v-for="branch in member.branches"
      v-bind:key="branch.id"
      :branch="branch"
    ></Branch>
  </div>
</template>

<script>
import Branch from '@/components/Branch'
export default {
  name: 'Member',
  components: {
    Branch,
  },
  props: ['member', 'localData'],
  data: function() {
    return {
      status: 0,
    }
  },
  methods: {
    cycleMemberStatus: function() {
      if (this.status < 2) {
        this.status++
      } else {
        this.status = 0
      }
      console.log(this.status)
    },
  },
}
</script>

<style lang="scss" scoped>
.member {
  $root: &;
  width: (100% / 18);
  &--keep {
    #{$root}__image {
      border: 2px dashed green;
    }
  }
  &--decide {
    #{$root}__image {
      border: 2px dashed yellow;
    }
  }
  &--remove {
    #{$root}__image {
      border: 2px dashed red;
      &::before {
        content: '';
        display: block;
        border: 1px dashed red;
        width: 0;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        content: '';
        display: block;
        border: 1px dashed red;
        width: 0;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
  &__head {
    position: relative;
  }
  &__image {
    position: relative;
    img {
      width: 100%;
      height: auto;
      display: block;
      flaot: left;
    }
  }
  &__name {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.6);
    margin: 0;
  }
}
</style>
