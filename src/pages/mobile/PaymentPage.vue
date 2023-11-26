<template>
  <div class="row">
    <div class="message column items-center justify-center fixed">
      <span class="text-center">Website</span>
      <span class="text-center text-white">Under-Construction</span>
    </div>
    <under-construction />
  </div>
</template>
<script setup lang="ts">
import UnderConstruction from 'components/layout/UnderConstruction.vue';
</script>

<style scoped lang="scss">
@import '../../css/quasar.variables';
.message p {
  display: inline;
}
.message {
  gap: 0px;
  width: 100%;
  height: 320px;
  color: $color-primary;
  font-size: $font-size-xl;
  font-weight: $font-weight-regular;
  text-align: center;
}
</style>
