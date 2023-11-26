<template>
  <q-carousel
    height="fit-content"
    :padding="false"
    transition-prev="slide-right"
    transition-next="slide-left"
    data-transition="zoom"
    animated
    swipeable
    navigation
    control-color="primary"
    v-model="cardsStore.currentCard"
    :onchange="cardsStore.setCurrentCard(currentCard)"
    class="rounded-borders card_carousel bg-transparent relative-position"
  >
    <template v-slot:navigation-icon="{ active, onClick }">
      <div class="row items-start">
        <q-btn
          v-if="active"
          class="dot active-dot"
          flat
          round
          @click="onClick"
        />
        <q-btn v-else size="sm" class="dot" flat round @click="onClick" />
      </div>
    </template>
    <q-carousel-slide
      :key="card.id"
      :name="card.id"
      v-for="card in filterCard(cardsStore.currentTab)"
      class="column no-wrap items-xs-center item-md-start q-px-none q-pt-none q-mt-lg"
    >
      <VirtualCard :card="card" />
      <div class="side-card" v-if="$q.platform.is.mobile"></div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup lang="ts">
import VirtualCard from 'components/cards/VirtualCard.vue';
import { useCardsPageStore } from 'stores/CardsPageStore';
import { storeToRefs } from 'pinia';

const cardsStore = useCardsPageStore();
const { currentCard } = storeToRefs(cardsStore);
function filterCard(tab?: string) {
  if (tab === 'debit_cards')
    return cardsStore.cards.filter((c) => c.type === 'debit');
  return cardsStore.cards;
}
</script>

<style scoped lang="scss">
@import '../../css/quasar.variables';

.side-card {
  position: absolute;
  width: 16px;
  height: 200px;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 8px 0 0 8px;
  z-index: 3000;
  background: $color-indigo;
}

.dot {
  padding: 0;
  min-height: 8px;
  min-width: 8px;
  opacity: 10%;
  background: $color-primary;
  transition: all 0.2s;
}

.desktop .card_carousel {
  padding-block: 0;
  height: 800px;
  min-height: 300px;
  width: 100%;
}

.q_carousel__slide {
  padding-block: 0 16px !important;
}

.card_carousel .q_carousel__slide .row {
  width: 100%;
}

.active-dot {
  border-radius: 4px;
  height: 8px;
  width: 16px;
  opacity: 100%;
}
</style>

<style>
.card_carousel .q-carousel__navigation--bottom {
  width: clamp(300px, 100%, 414px);
  left: unset;
  right: unset;
}
</style>
