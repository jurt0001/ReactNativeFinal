import { FETCH_RESTAURANTS, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_FAIL, SHOW_RESTAURANT_DETAILS, PAGE_CHANGES, changeInfo } from "./actions";
import {PAGE_DETAILS} from "./Pages";


export default function reducers(state, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {
        case FETCH_RESTAURANTS: 
            newState = Object.assign({}, newState,{data: action.data});
            break;
        case FETCH_RESTAURANTS_SUCCESS:
            newState = Object.assign({}, newState,{data: action.data});
            break;
        case SHOW_RESTAURANT_DETAILS:
            newState = Object.assign({}, changeInfo(newState, action.id));
            break;
        case PAGE_CHANGES:    
            newState = Object.assign({}, newState, {page: action.page})
            break;
            
            default:
            return state;
    }

    return Object.assign({}, state, newState);
}

