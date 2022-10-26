import { FETCH_DATA } from '../constants/action-types';

export function fetchData(){
    return {
        type: FETCH_DATA,
        payload:{}
    };
}