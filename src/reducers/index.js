import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import appointmentReducer from './appointmentReducer';

export default combineReducers({
    //initial and dummy replaceMe : () => "dummy!"
    //auth: authReducer,
    form: formReducer,// this connecs form to store that is created by redux-form
    appointments: appointmentReducer
});