import { combineReducers } from 'redux';
import ProdsReducer from './reducer_prods';
import ProdDateDescReducer from './prod_date_desc';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  prods: ProdsReducer,
  prodDateTime: ProdDateDescReducer,
  form: formReducer
});

export default rootReducer;
