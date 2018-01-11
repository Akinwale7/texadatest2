
import {FETCH_PROD_DATE_TIME} from '../actions';

export default function(state={}, action){
  switch (action.type) {
    case FETCH_PROD_DATE_TIME:
      return action.payload.data ;
    case "clearState":
      return action.payload
      console.log("This is working fetc_date_time des", state);
    default:
      return state;
  }
}
