import { FETCH_DATA } from "../constants/action-types";
const payload= require('../stackline_frontend_assessment_data_2021.json');

const initial_state= {
    Data: payload[0]
};

export default function reducer(state= initial_state, action){
    if(action.type === FETCH_DATA){
        return Object.assign({}, 
            state,
            { Date: state.Data }
        );
    }
    return state;
}