import appointmentAxios from '../apis/appointmentAxios';
import {history} from '../history';
import axios from 'axios';
import {
    INSERT_APPOINTMENT,
    DELETE_APPOINTMENT,
    LIST_APPOINTMENTS
} from './types';

export const insertAppointment = (formValues) => async (dispatch) =>{
    //const {userId} = getState().auth;
    
    const response = await axios({
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url: 'http://localhost/system/insert.php',
        data: formValues
    });
    history.push("/");
    //const response = await appointmentAxios.post("/insert.php", formValues, headers);
    //above return a single stream
    dispatch ({type: INSERT_APPOINTMENT, payload: response.data});
    // do some programmatic navigtion to get the user back to the root 
    //history.push("/");
};

export const listAppointments = () => async (dispatch, getState) => {
        const response  = await appointmentAxios.get("/view.php");
        dispatch({type: LIST_APPOINTMENTS, payload: response.data});
    };

export const deleteAppointment = (id) => async (dispatch) =>{
    await appointmentAxios.get(`/delete.php?id=${id}`);
    dispatch ({type: DELETE_APPOINTMENT, payload: id});
};