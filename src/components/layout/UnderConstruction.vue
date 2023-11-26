<template>
  <div class="column under-construction justify-center items-center">
    <img src="~assets/UnderConstruction.svg" alt="under construction">
  </div>
</template>

<style lang="scss" scoped>
@import '../../css/quasar.variables';

.desktop .under-construction {
  height: 100%;
  width: 100%;
  margin-top: 0;
  background: $color-white;
  border: none;
}
.under-construction {
  height: 400px;
  width: 100%;
  margin-top: 320px;
  gap: 24px;
  border-radius: 24px 24px 0 0;
  padding: 24px;
  box-shadow: none;
  border: 1px solid #ddd;
  z-index: 100;
  background: $background-paper;
}

.under-construction img {
  height: 100%;
  width: 100%;
}
</style>

<script setup lang="ts"></script>
