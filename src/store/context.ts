import * as React from 'react';
import { VoteStoreType } from './type';

const VoteContext = React.createContext<VoteStoreType | null>(null);
export default VoteContext;
