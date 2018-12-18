<template>
  <div class="branch">
    <Reward
      :reward="branch.reward"
    ></Reward>
  </div>
</template>

<script>
import Reward from '@/components/Reward'
export default {
  name: 'Branch',
  components: { Reward },
  props: ['branch'],
}
</script>

<style scoped></style>
