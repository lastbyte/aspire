import { defineStore } from 'pinia';
import { getTransactions } from 'src/services/CardService';

export const useCardsPageStore = defineStore('cardsPage', {
  state: () =>
    <
      {
        account: UserAccount;
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
    setCardsAndAccount(cards: Card[], account: UserAccount) {
      this.cards = cards;
      this.account = account;
    },
    setCurrentCard(cardId: string) {
      this.currentCard = cardId;
      this.transactions = getTransactions(cardId);
      console.debug('current card is ', this.currentCard);
    },
    setCurrentTab(tab: string) {
      if (tab === 'debit_cards') {
        const debitCards = this.cards.filter((c) => c.type === 'debit');
        if (
          debitCards &&
          !debitCards.map((c) => c.id).includes(this.currentCard)
        ) {
          this.currentCard = debitCards[0].id;
        }
      }
      this.currentTab = tab;
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
