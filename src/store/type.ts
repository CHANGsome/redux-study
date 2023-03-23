import { Store } from 'redux';

export interface VoteStateType {
  supportNum: number;
  oppositeNum: number;
}
export enum ACTION_TYPE {
  VOTE_SUPPORT = 'VOTE_SUPPORT',
  VOTE_OPPOSITE = 'VOTE_OPPOSITE',
  PERSONAL_ACTION = 'PERSONAL_ACTION',
}
export interface VoteActionProps {
  type: ACTION_TYPE;
}

export interface PersonalStateType {
  title: string;
  content: string;
}
export interface PersonalActionProps {
  type: ACTION_TYPE;
  payload: PersonalStateType;
}
