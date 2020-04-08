import React, { Component } from 'react';
import {connect} from 'react-redux';
import {listAppointments} from '../actions/index';
import RecordList from './RecordList';
class ListAppointments extends Component {
    
    render() {
        
        return (
            <div>
               <div>
                <h3 align ="center">Appointment list</h3>
                <table className="table table-striped mt-2">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>last Name</th>
                            <th>Email</th>
                            <th colSpan ="2">action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.appointmentList()}
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
    componentDidMount() {
        this.props.listAppointments();
    }
    appointmentList = () =>{
        return this.props.arrayOfAppointments.map((appointment) =>{
             return <RecordList appointment = {appointment} key ={appointment['id']}/>
        });
    }
    
}

const mapStateToProps =(state) =>{
    //Object.values returns an array from an object!
    return {arrayOfAppointments : Object.values(state.appointments)};
}
export default connect(mapStateToProps, {listAppointments})(ListAppointments);