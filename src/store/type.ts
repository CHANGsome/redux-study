import { Store } from 'redux';

export interface VoteStateType {
  supportNum: number;
  oppositeNum: number;
}
export enum ACTION_TYPE {
  SUPPORT = 1,
  OPPOSITE = 2,
}
export interface ActionProps {
  type: ACTION_TYPE;
}
export type VoteStoreType = Store<VoteStateType, ActionProps>;
