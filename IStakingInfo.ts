export interface IStakingInfo {
  rewardsPer100KSM: number;
  riskScore: number;
  estimatedPoolReward: number;
  activeErasCount: number;
  totalSlashCount: number;
  stashId: string;
  controllerId: string;
  accountId: string;
  commission: number;
  blocked: boolean;
  totalStake: number;
  oversubscribed: boolean;
  ownStake: number;
  isElected: boolean;
  isNextElected: boolean;
  isWaiting: boolean;
  nominators: [
    {
      nomId: string;
      stake: number;
    },
  ];
  claimedRewards: [number];
}
