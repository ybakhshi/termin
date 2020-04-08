import _ from 'lodash';
import {
    INSERT_APPOINTMENT,
    DELETE_APPOINTMENT,
    LIST_APPOINTMENTS
} from '../actions/types';

export default (state ={}, action) =>{
    switch(action.type)
    {
        case LIST_APPOINTMENTS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case INSERT_APPOINTMENT:
            return {[action.payload.id]: action.payload, ...state};
        case DELETE_APPOINTMENT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}