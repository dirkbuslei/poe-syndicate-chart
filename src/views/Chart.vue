<template>
  <div class="chart">
    <div class="col">1</div>
    <Member
      v-for="member in members"
      :member="member"
      :localData="localData"
      v-bind:key="member.id"
    ></Member>
  </div>
</template>

<script>
import members from '@/data/members.json'
import Member from '@/components/Member'
export default {
  name: 'chart',
  components: {
    Member,
  },
  data: function() {
    return {
      members: members,
      localData: null,
    }
  },
  mounted() {
    if (localStorage.poeSyndicateChart) {
      this.localData = localStorage.poeSyndicateChart
    }
  },
}
</script>

<style lang="scss">
.chart {
  width: 100%;
  display: flex;
  flex: 1 0 0;
}
.col {
  display: flex;
  width: (100% / 18);
}
</style>
