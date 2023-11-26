type CARD_TYPE = 'debit' | 'credit';
type CardExpiry = { month: string; year: string };
type Card = {
  id: string;
  cardNumber: string;
  cardholderName: string;
  cvv: string;
  type: 'debit' | 'credit';
  tech: 'visa' | 'mastercard' | 'amex' | 'rupay';
  brand: string;
  frozen: boolean;
  deactivated: boolean;
  expiry: CardExpiry;
};
type CardTransaction = {
  name: string;
  date: string;
  type: string;
  category: string;
  amount: number;
  detail: string;
};
type CardExtended = Card & { hidden?: boolean };

type CardMap = { [key in string]: CardExtended };
