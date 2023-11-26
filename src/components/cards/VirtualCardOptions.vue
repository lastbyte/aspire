<script setup lang="ts">
import { useCardsPageStore } from 'stores/CardsPageStore';

const cardsPageStore = useCardsPageStore();

function cancelCard(cardId: string) {
  cardsPageStore.cancelCard(cardId);
}

function toggleFreezeCard(cardId: string) {
  if (
    cardsPageStore.cards.filter((c) => c.id === cardsPageStore.currentCard)[0]
      .frozen
  )
    cardsPageStore.unFreezeCard(cardId);
  else cardsPageStore.freezeCard(cardId);
}
</script>
<template>
  <div class="column items-center virtual_card_option_container">
    <div
      class="row justify-between card_action_button_container no-wrap full-width"
    >
      <q-btn
        no-caps
        flat
        class="card_action_button q-pa-none"
        @click="() => toggleFreezeCard(cardsPageStore.currentCard)"
      >
        <div class="text column content justify-center items-center">
          <img src="../../assets/Freeze%20card.svg" alt="freeze card" />
          <span
            >{{
              cardsPageStore.cards.filter(
                (c) => c.id === cardsPageStore.currentCard
              )[0].frozen
                ? 'Unfreeze card'
                : 'Freeze card'
            }}
          </span>
        </div>
      </q-btn>
      <q-btn no-caps flat class="card_action_button">
        <div class="text column content justify-center items-center">
          <img
            src="../../assets/Set%20spend%20limit.svg"
            alt="set spend limit"
          />
          <span>Set spend limit</span>
        </div>
      </q-btn>
      <q-btn no-caps flat class="card_action_button">
        <div class="text column content justify-center items-center">
          <img src="../../assets/GPay.svg" alt="add to Gpay" />
          <span>Add to Gpay</span>
        </div>
      </q-btn>
      <q-btn no-caps flat class="card_action_button">
        <div class="text column content justify-center items-center">
          <img src="../../assets/Replace%20card.svg" alt="replace card" />
          <span>Replace card</span>
        </div>
      </q-btn>
      <q-btn
        no-caps
        flat
        class="card_action_button"
        @click="() => cancelCard(cardsPageStore.currentCard)"
      >
        <div class="text column content justify-center items-center">
          <img src="../../assets/Deactivate%20card.svg" alt="cancel card" />
          <span>Cancel card</span>
        </div>
      </q-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../css/quasar.variables';

.card_action_button_container {
  background: $paper-page;
  padding-block: 20px 21px;
  padding-inline: 24px;
  border-radius: 24px 24px 0 0;
}

.desktop .card_action_button_container {
  width: 414px;
  border-radius: 24px 24px 24px 24px;
}

.card_action_button {
  min-width: 60px;
  padding-inline: 0;
  width: auto;
}

.card_action_button span.q-btn__content {
  max-width: 60px;
  justify-content: center;
  align-items: center;
}

.card_action_button .text {
  gap: 7px;
}

.card_action_button .text span {
  font-size: 13px;
  font-weight: 400;
  max-width: 60px;
  line-height: 14px;
  color: $dark-page;
}

.virtual_card_option_container {
  margin-top: 480px;
  width: 100%;
}

.desktop .virtual_card_option_container {
  margin-top: 0;
  width: clamp(300px, 100%, 414px);
}

.virtual_card_option_container,
.virtual_card_option_details {
  z-index: 1000;
}

.virtual_card_option_details {
  gap: 24px;
  padding-block: 24px;
}
</style>
