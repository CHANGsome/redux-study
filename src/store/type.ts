import { Store } from 'redux';

export interface VoteStateType {
  supportNum: number;
  oppositeNum: number;
}
export enum VOTE_ACTION_TYPE {
  SUPPORT = 1,
  OPPOSITE = 2,
}
export interface VoteActionProps {
  type: VOTE_ACTION_TYPE;
}

export interface PersonalStateType {
  title: string;
  content: string;
}
export enum PERSONAL_ACTION_TYPE {
  CHANGE = 3,
}
export interface PersonalActionProps {
  type: PERSONAL_ACTION_TYPE;
  payload: PersonalStateType;
}
