export interface ITransactionData {
  stashId: string;
  controllerId: string;
  injectorId: string;
  transactionType: string;
  sourcePage: string;
  walletType: string;
  ysFees: number;
  ysFeesAddress: string;
  ysFeesRatio: number;
  ysFeesPaid: boolean;
  network: string;
  alreadyBonded: number;
  stake: number;
  transactionHash: string;
  successful: boolean;
}
