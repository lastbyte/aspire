<template>
  <div class="row full-width">
    <CardInfoBar />
    <CardSwitcher />
    <q-card class="row full-width card-complete">
      <div class="column col-sm-12 col-lg-6 no-wrap items-center">
        <CardCarousel />
        <VirtualCardOptions />
      </div>
      <div class="column col-sm-12 col-lg-6 col-grow">
        <VirtualCardDetails />
      </div>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import VirtualCardOptions from 'components/cards/VirtualCardOptions.vue';
import CardSwitcher from 'components/cards/CardSwitcher.vue';
import VirtualCardDetails from 'components/cards/VirtualCardDetails.vue';
import CardInfoBar from 'components/cards/CardInfoBar.vue';
import CardCarousel from 'components/cards/CardCarousel.vue';
</script>

<style lang="scss" scoped>
@import '../../css/quasar.variables';

.card-complete {
  border: 1px solid $color-white-400;
  padding: 20px 40px;
  margin-top: 20px;
  box-shadow: 0 2px 8px 0 hsla(0, 0%, 0%, 0.08);
}

@media screen and (max-width: 600px) {
  .card-complete {
    padding: 10px 20px;
  }
}
</style>
