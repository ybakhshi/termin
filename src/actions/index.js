import appointmentAxios from '../apis/appointmentAxios';
import config from '../config.json';

import {
    DELETE_APPOINTMENT,
    LIST_APPOINTMENTS
} from './types';

export const insertAppointment = (formValues) =>{
    console.log(formValues);
    appointmentAxios.post('/insertdata.php', {...formValues},{headers: config.headers});
};

export const hasActiveAppointment = (service, email)=>{
    return appointmentAxios.post('/hasactiveappointment.php', {service, email},{headers: config.headers});
}
export const disableFullyBookedDates = (service)=>{
    return appointmentAxios.post('/disablefullybookeddates.php',{service},{headers: config.headers});
}

export const listAppointments = () => async (dispatch) => {
        const response  = await appointmentAxios.get("/view.php");
        dispatch({type: LIST_APPOINTMENTS, payload: response.data});
    };

export const deleteAppointment = (id) => async (dispatch) =>{
    await appointmentAxios.get(`/delete.php?id=${id}`);
    dispatch ({type: DELETE_APPOINTMENT, payload: id});
};