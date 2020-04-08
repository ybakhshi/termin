import React, { Component } from 'react';
import axios from 'axios';
import RecordList from './RecordList';
class View extends Component {
    state = {
        appointments:[]
    }
    render() {
        return (
            <div>
                <h3 align ="center">Appointment list</h3>
                <table className="table table-striped mt-2">
                    <thead>
                        <tr>
                            <th>ID</th>
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
        );
    }
    componentDidMount () {
        axios.get("http://localhost/system/view.php")
        .then(response => {
            this.setState({appointments: response.data});
        })
        .catch(function(error){
            //console.log(error);
        })
    }

    appointmentList = () =>{
        //console.log(this.state.appointments);
        return this.state.appointments.map((appointment) =>{
            return <RecordList appointment = {appointment} key ={appointment['id']}/>
        });
    }
}

export default View;