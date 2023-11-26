<script setup lang="ts">
import { useCardsPageStore } from 'stores/CardsPageStore';

const cardsPageStore = useCardsPageStore();
</script>
<template>
  <div class="column full-width top-info-bar justify-between q-ma-xs">
    <div class="row account-balance">Account Balance</div>
    <div class="row justify-between">
      <div class="row account_balance">
        <div class="currency">S$</div>
        <div class="account_balance-value">3,000</div>
      </div>
      <div class="row">
        <q-btn
          size="sm"
          class="add_card_button"
          flat
          no-caps
          icon="add_circle"
          label="New card"
          @click="
            () => {
              cardsPageStore.setAddCardModal();
            }
          "
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../css/quasar.variables';

.desktop .top-info-bar {
  color: $text-dark;
}
.account-balance {
  color: $color-white;
}

.desktop .account-balance {
  color: $color-white;
  font-size: 14px;
  font-weight: $font-weight-regular;
  line-height: $line-height-sm;
}

.desktop .add_card_button {
  background: hsla(220, 56%, 44%, 1);
  padding: 9px 12px 8px 12px;
  border-radius: 4px;
  color: $color-white;
}
.desktop .account-balance,
.desktop .account_balance-value {
  color: $text-dark;
}
</style>
