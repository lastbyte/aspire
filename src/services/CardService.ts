export const CARDS: Card[] = [
  {
    id: 'card1',
    cardholderName: 'Nishant Kumar',
    cardNumber: '4228314865209384',
    expiry: {
      month: '10',
      year: '2027',
    },
    cvv: '020',
    type: 'debit',
    tech: 'visa',
    brand: 'aspire',
    frozen: false,
    deactivated: false,
  },
  {
    id: 'card2',
    cardholderName: 'Nishant Kumar',
    cardNumber: '4766587494200894',
    expiry: {
      month: '02',
      year: '2026',
    },
    cvv: '580',
    type: 'debit',
    tech: 'visa',
    brand: 'aspire',
    frozen: false,
    deactivated: false,
  },
  {
    id: 'card3',
    cardholderName: 'Nishant Kumar',
    cardNumber: '4170991218649438',
    expiry: {
      month: '12',
      year: '2025',
    },
    cvv: '821',
    type: 'debit',
    tech: 'visa',
    brand: 'aspire',
    frozen: false,
    deactivated: false,
  },
  {
    id: 'card4',
    cardholderName: 'Nishant Kumar',
    cardNumber: '4905364869711737',
    expiry: {
      month: '10',
      year: '2028',
    },
    cvv: '443',
    type: 'credit',
    tech: 'visa',
    brand: 'aspire',
    frozen: false,
    deactivated: false,
  },
  {
    id: 'card5',
    cardholderName: 'Nishant Kumar',
    cardNumber: '4363089036486351',
    expiry: {
      month: '02',
      year: '2024',
    },
    cvv: '380',
    type: 'credit',
    tech: 'visa',
    brand: 'aspire',
    frozen: false,
    deactivated: false,
  },
  {
    id: 'card6',
    cardholderName: 'Nishant Kumar',
    cardNumber: '4178958116531309',
    expiry: {
      month: '04',
      year: '2027',
    },
    cvv: '132',
    type: 'credit',
    tech: 'visa',
    brand: 'aspire',
    frozen: false,
    deactivated: false,
  },
];

const transactions_card1: CardTransaction[] = [
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'online_shopping',
    amount: 200,
    detail: 'Refund on debit card',
  },
  {
    name: 'Nike',
    date: '20 May 2020',
    type: 'debit',
    category: 'fashion',
    amount: 150,
    detail: 'Refund on debit card',
  },
  {
    name: 'Adidas',
    date: '20 May 2020',
    type: 'credit',
    category: 'fashion',
    amount: 150,
    detail: 'Charged to debit card',
  },
  {
    name: 'Indigo',
    date: '20 May 2020',
    type: 'debit',
    category: 'travel',
    amount: 150,
    detail: 'Charged to debit card',
  },
];
const transactions_card2: CardTransaction[] = [
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'online_shopping',
    amount: 150,
    detail: 'Refund on debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'travel',
    amount: 150,
    detail: 'Refund on debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'credit',
    category: 'fashion',
    amount: 150,
    detail: 'Charged to debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'online_shopping',
    amount: 150,
    detail: 'Charged to debit card',
  },
];
const transactions_card3: CardTransaction[] = [
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'online_shopping',
    amount: 150,
    detail: 'Refund on debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'travel',
    amount: 500,
    detail: 'Refund on debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'credit',
    category: 'travel',
    amount: 200,
    detail: 'Charged to debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'online_shopping',
    amount: 150,
    detail: 'Charged to debit card',
  },
];
const transactions_card4: CardTransaction[] = [
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'travel',
    amount: 250,
    detail: 'Refund on debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'travel',
    amount: 150,
    detail: 'Refund on debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'credit',
    category: 'fashion',
    amount: 150,
    detail: 'Charged to debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'fashion',
    amount: 150,
    detail: 'Charged to debit card',
  },
];
const transactions_card5: CardTransaction[] = [
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'online_shopping',
    amount: 150,
    detail: 'Refund on debit card',
  },
  {
    name: 'Hamleys',
    date: '10 June 2023',
    type: 'debit',
    category: 'travel',
    amount: 150,
    detail: 'Refund on debit card',
  },
  {
    name: 'Nike',
    date: '22 May 2020',
    type: 'debit',
    category: 'online_shopping',
    amount: 250,
    detail: 'Refund on debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'credit',
    category: 'fashion',
    amount: 150,
    detail: 'Charged to debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'online_shopping',
    amount: 150,
    detail: 'Charged to debit card',
  },
];
const transactions_card6: CardTransaction[] = [
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'online_shopping',
    amount: 150,
    detail: 'Refund on debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'travel',
    amount: 150,
    detail: 'Refund on debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'credit',
    category: 'fashion',
    amount: 150,
    detail: 'Charged to debit card',
  },
  {
    name: 'Hamleys',
    date: '20 May 2020',
    type: 'debit',
    category: 'online_shopping',
    amount: 150,
    detail: 'Charged to debit card',
  },
];

const TRANSACTIONS: { [key in string]: CardTransaction[] } = {
  card1: transactions_card1,
  card2: transactions_card2,
  card3: transactions_card3,
  card4: transactions_card4,
  card5: transactions_card5,
  card6: transactions_card6,
};

export function getCards(type?: CARD_TYPE) {
  let cards = CARDS.map((c) => {
    return { ...c, hidden: true };
  });
  if (type) {
    cards = cards.filter((card) => card.type === type);
  }
  return cards;
}

export function getCardDetails(cardId: string) {
  throw new Error(`Method not Implemented ${cardId}`);
}

export function getAccountDetails() {
  return {
    account: {
      number: '87346872364',
      userName: 'Nishant Kumar',
      userId: '7234',
      balance: 3221,
    },
    cards: getCards(),
  };
}

export function getTransactions(cardId: string) {
  if (TRANSACTIONS[cardId]) {
    return TRANSACTIONS[cardId];
  }
  return [];
}
