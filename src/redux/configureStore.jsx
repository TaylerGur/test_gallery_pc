import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import dataReducer from './reducers/dataReducer.jsx';
import pageReducer from './reducers/pageReducer.jsx';

export default function (initialState = {}) {
  const rootReducer = combineReducers({
        dataGallery : dataReducer,
        page: pageReducer
  });

  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}
