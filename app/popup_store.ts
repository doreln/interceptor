import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { Middleware } from 'react-redux/node_modules/redux';
import { alias } from 'react-chrome-redux'
import thunk from 'redux-thunk'

import aliases from './actions/aliases'


import {reducer}  from './modules/recordings';
export interface PopUpInterface {
  enabled: boolean;
  errorMessage ?: string;
  requests?: Array<Object>;
}

const logger:Middleware = createLogger();

const middleware = [
  alias(aliases),
  thunk,
  logger]

export default function (initalState: PopUpInterface ) {
  return createStore(reducer , initalState, applyMiddleware(...middleware));
}




