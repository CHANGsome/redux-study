import * as React from 'react';
import { Store } from 'redux';
import { PersonalStateType, VoteStateType } from './type';

const GlobalContext = React.createContext<Store<{
  vote: VoteStateType;
  personal: PersonalStateType;
}> | null>(null);
export default GlobalContext;
