export interface ITransactionData {
  stashId: string;
  controllerId: string;
  injectorId: string;
  transactionType: string;
  walletType: string;
  ysFees: number;
  ysFeesPaid: boolean;
  network: string;
  alreadyBonded: number;
  stake: number;
  transactionHash: string;
  successful: boolean;
}
