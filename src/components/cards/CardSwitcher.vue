<script setup lang="ts">
import { useCardsPageStore } from 'stores/CardsPageStore';

const cardPageStore = useCardsPageStore();
</script>

<template>
  <q-tabs
    shrink
    :model-value="cardPageStore.currentTab"
    narrow-indicator
    dense
    outside-arrows
    mobile-arrows
    indicator-color="accent"
    align="left"
    class="cards_carousel_tabs"
  >
    <q-tab
      no-caps
      indicator-color="$red"
      class="tab text-white q-pl-none"
      name="debit_cards"
      label="My debit cards"
      @click="() => cardPageStore.setCurrentTab('debit_cards')"
    />
    <q-tab
      no-caps
      class="tab text-white"
      name="company_cards"
      label="All company cards"
      @click="() => cardPageStore.setCurrentTab('company_cards')"
    />
  </q-tabs>
</template>

<style lang="scss">
@import '../../css/quasar.variables';

.tab {
  width: fit-content;
  font-size: 13px;
}
.cards_carousel_tabs .q-tabs__content--align-justify .q-tab.tab {
  flex: 0;
}

.cards_carousel_tabs {
  margin-top: 30px;
}

.cards_carousel_tabs .q-tab__label {
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
  opacity: 50%;
  font-weight: 400;
}

.cards_carousel_tabs .q-tab[aria-selected='true'] .q-tab__label {
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
  opacity: 100%;
  font-weight: 700;
}

.desktop .cards_carousel_tabs .q-tab__label {
  color: $text-dark;
  opacity: 30%;
}

.desktop .cards_carousel_tabs .q-tab[aria-selected='true'] .q-tab__label {
  color: $text-dark;
}
</style>
