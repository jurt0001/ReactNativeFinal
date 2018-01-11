import axios from "axios";

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const FETCH_RESTAURANTS_SUCCESS = "FETCH_RESTAURANTS_SUCCESS";
export const FETCH_RESTAURANTS_FAIL = "FETCH_RESTAURANTS_FAIL";
export const SHOW_RESTAURANT_DETAILS = "SHOW_RESTAURANT_DETAILS";
export const PAGE_CHANGES = "PAGE_CHANGES";
import {PAGE_LOAD, PAGE_LIST, PAGE_DETAILS} from './Pages';

export function getGeolocalizedList() {
  return (dispatch)=> {
    dispatch(pageChanges(PAGE_LOAD));
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(fetchRestaurants(position.coords.latitude, position.coords.longitude));
      },
      (error) => {
        dispatch(isFetching(false));
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
}

export function fetchRestaurants(lat, long) {
    return (dispatch) => {
        let token = "JXOR2YdS52vKpMbPRaBm7XJxNbcG_-M-Nshp05agwZJkv5Oiq30K9MjtkqycrbLoxLzkuYlSKqjAdlckSS_N5NX2l6uYDjZ8a4I2qviObGT3V8U5UFzqIpPdECs7WnYx";
        let url = "https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=" + 
            lat + "&longitude=" + long + "&sort_by=distance";
        axios.get(url, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then((response) => {
                if (response.status != 200) {
                    throw Error(response.statusText);
                }

                dispatch(pageChanges(PAGE_LIST));

                return dispatch(restaurantsFetchSuccess(response.data.businesses));
            }).catch((e) => {
            dispatch(restaurantsFetchFailure(e))
            });
    };
}

export function isFetching(state) {
    return {
        type: FETCH_RESTAURANTS,
        state: state
    };
}

export function restaurantsFetchSuccess(data) {
    return {
        type: FETCH_RESTAURANTS_SUCCESS,
        data: data
    };
}

export function restaurantsFetchFailure(error) {
    console.log(error);
    return {
        type: FETCH_RESTAURANTS_FAIL,
        error: error
    };
}

export function pageChanges(page){
    return{
        type: PAGE_CHANGES,
        page: page
        
    }
}

export function getInfo(id){
    //console.log(id);
    return{
        type: SHOW_RESTAURANT_DETAILS,
        id: id
    }
}
export function changeInfo(newState, id){
    newState.page = PAGE_DETAILS;
    newState.selectedItem = newState.data.find(item => item.id == id ? true: false);
    return newState;
}

