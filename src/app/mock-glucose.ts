import { Glucose } from './glucose';

const now = new Date();

export const GLUCOSE: Glucose[] = [
  { readDate: now, glucose: 100 },
  { readDate: new Date(now.valueOf() - 5*60*1000), glucose: 101 },
  { readDate: new Date(now.valueOf() - 10*60*1000), glucose: 102 }
];
