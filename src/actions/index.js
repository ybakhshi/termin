import appointmentAxios from '../apis/appointmentAxios';
import config from '../config.json';

import {
    DELETE_APPOINTMENT,
    LIST_APPOINTMENTS
} from './types';

export const insertAppointment = (formValues) =>{
    appointmentAxios.post('/insertdata.php', {...formValues},{headers: config.headers});
};

export const hasActiveAppointment = (service, email, tdate)=>{
    return appointmentAxios.post('/hasactiveappointment.php', {service, email, tdate},{headers: config.headers});
}
export const disableFullyBookedDates = (service)=>{
    return appointmentAxios.post('/disablefullybookeddates.php',{service},{headers: config.headers});
}
// export const isTheDateFullyBooked = async (tdate, service)=>{
//     return appointmentAxios.post('/isthedatefullybooked.php',{tdate,service},{headers: config.headers});
// }
export const sendPinEmail = (data) =>{
    appointmentAxios.post('/sendemail.php', {...data},{headers: config.headers});
}
export const listAppointments = () => async (dispatch) => {
        const response  = await appointmentAxios.get("/view.php");
        dispatch({type: LIST_APPOINTMENTS, payload: response.data});
    };

export const deleteAppointment = (id) => async (dispatch) =>{
    await appointmentAxios.get(`/delete.php?id=${id}`);
    dispatch ({type: DELETE_APPOINTMENT, payload: id});
};