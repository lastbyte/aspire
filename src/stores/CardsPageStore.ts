import { defineStore } from 'pinia';
import { getTransactions } from 'src/services/CardService';

export const useCardsPageStore = defineStore('cardsPage', {
  state: () =>
    <
      {
        cards: CardExtended[];
        currentCard: string;
        currentTab: string;
        transactions?: CardTransaction[];
        addCardModal: boolean;
      }
    >{
      cards: {},
      transactions: undefined,
      currentCard: '',
      currentTab: 'debit_cards',
      addCardModal: false,
    },

  getters: {},

  actions: {
    setCards(cards: Card[]) {
      this.cards = cards;
    },
    setCurrentCard(cardId: string) {
      this.currentCard = cardId;
      this.transactions = getTransactions(cardId);
      console.debug('current card is ', this.currentCard);
    },
    freezeCard(cardId: string) {
      console.debug('freezing card');
      const newCards = [...this.cards];
      let updateCardIndex = -1;
      newCards.forEach((card, index) => {
        if (cardId == card.id) updateCardIndex = index;
      });
      newCards[updateCardIndex].frozen = true;
      this.cards = newCards;
    },
    unFreezeCard(cardId: string) {
      const newCards = [...this.cards];
      let updateCardIndex = -1;
      newCards.forEach((card, index) => {
        if (cardId == card.id) updateCardIndex = index;
      });
      newCards[updateCardIndex].frozen = false;
      this.cards = newCards;
    },
    toggleVisibility(cardId: string) {
      const newCards = [...this.cards];
      let updateCardIndex = -1;
      newCards.forEach((card, index) => {
        if (cardId == card.id) updateCardIndex = index;
      });
      newCards[updateCardIndex].hidden = !newCards[updateCardIndex].hidden;
      this.cards = newCards;

      console.log(this.cards);
    },
    cancelCard(cardId: string) {
      const newCards = [...this.cards];
      let updateCardIndex = -1;
      newCards.forEach((card, index) => {
        if (cardId == card.id) updateCardIndex = index;
      });
      newCards.splice(updateCardIndex, 1);
      if (updateCardIndex >= 0 && updateCardIndex < newCards.length)
        this.currentCard = newCards[updateCardIndex].id;
      this.cards = newCards;
    },
    setAddCardModal() {
      this.addCardModal = !this.addCardModal;
    },
    addCard(card: Card) {
      const newCards = [...this.cards];
      newCards.push(card);
      console.log(card);
      this.cards = newCards;
    },
  },
});
