export type PaymentTab = "debitCard" | "netBanking" | "wallets";

export interface DebitCardDetails {
  cardNumber: string;
  expiry: string;
  cvv: string;
  nameOnCard: string;
}
