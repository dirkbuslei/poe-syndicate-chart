<template>
  <div
    class="member"
    :class="{
      'member--keep': status === 1,
      'member--decide': status === 2,
      'member--remove': status === 3,
    }"
  >
    <div class="member__head" @click="cycleMemberStatus">
      <div
        class="member__image"
        :style="{ backgroundImage: 'url(' + member.image + ')' }"
      ></div>
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
.member {
  $root: &;
  width: (100% / 18);
  margin-right: 0.25%;
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
    #{$root}__image {
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
    padding-bottom: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /*img {*/
    /*width: 100%;*/
    /*height: auto;*/
    /*display: block;*/
    /*float: left;*/
    /*}*/
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
