<template>
  <CardsPageMobile v-if="$q.platform.is.mobile || $q.screen.width < 440" />
  <CardsPageDesktop v-if="$q.platform.is.desktop" />
  <add-card-model />
</template>

<script setup lang="ts">
import CardsPageMobile from 'pages/mobile/CardsPage.vue';
import CardsPageDesktop from 'pages/desktop/CardsPage.vue';
import { onBeforeMount } from 'vue';
import { useCardsPageStore } from 'stores/CardsPageStore';
import { getAccountDetails } from 'src/services/CardService';
import AddCardModel from 'components/cards/AddCardModel.vue';

const cardPageStore = useCardsPageStore();

onBeforeMount(() => {
  console.debug('On Cards page');
  const accountDetails = getAccountDetails();
  cardPageStore.setCardsAndAccount(
    accountDetails.cards,
    accountDetails.account
  );
  cardPageStore.setCurrentCard('card1');
  console.debug(
    'Cards Fetched, ',
    cardPageStore.cards,
    'current page',
    cardPageStore.currentCard
  );
});
</script>
