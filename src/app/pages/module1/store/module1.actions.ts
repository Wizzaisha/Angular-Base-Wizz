import { createAction, props } from '@ngrx/store';

const INCREMENT_ACTION = '[Set Increment Number] Set Increment Number';
const DECREMENT_ACTION = '[Set Decrement Number] Set Decrement Number';

export const incrementAction = createAction(INCREMENT_ACTION);
export const decrementAction = createAction(DECREMENT_ACTION);
