<template>
  <div class="column relative-position">
    <div class="column fixed window-width q-pl-lg">
      <CardPageHeader />
      <CardSwitcher />
      <CardCarousel />
    </div>
    <VirtualCardOptions />
    <VirtualCardDetails />
  </div>
</template>
<script setup lang="ts">
import VirtualCardOptions from 'components/cards/VirtualCardOptions.vue';
import CardPageHeader from 'components/cards/CardPageHeader.vue';
import CardSwitcher from 'components/cards/CardSwitcher.vue';
import VirtualCardDetails from 'components/cards/VirtualCardDetails.vue';
import CardCarousel from 'components/cards/CardCarousel.vue';
</script>

<style lang="scss">
@import '../../css/quasar.variables';

.top-info-bar {
  color: $color-white;
  font-family: $font-sans;
  font-weight: $font-weight-semi-bold;
  line-height: 16px;
  font-size: 14px;
  margin-top: -15px;
  justify-content: space-between;
  height: 61px;
  width: 100vw;
}

.top-logo-bar {
  height: 56px;
  align-items: center;
  flex-direction: row-reverse;
}

.currency {
  padding: 2px 14px 3px 13px;
  border-radius: 4px;
  background: $color-primary;
  color: $color-white;
  font-weight: 700;
  line-height: 17px;
  font-size: $font-size-sm;
}

.account_balance {
  gap: 10px;
  align-items: center;
}

.account_balance-value {
  color: $color-white;
  font-weight: 700;
  line-height: 16px;
  font-size: 24px;
}

.add_card_button {
  color: $accent;
  width: fit-content;
  padding: 0;
}

.add_card_button i {
  height: 16px;
  width: 16px;
  margin-right: 10px;
}

.add_card_button .q-btn__content {
  font-weight: $font-weight-bold;
  line-height: $line-height-md;
  font-size: $font-size-regular;
  padding: 0;
}
</style>
