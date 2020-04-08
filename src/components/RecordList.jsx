import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link} from 'react-router-dom';
class RecordList extends Component {
    state ={redirect: false};
    render() {
        if(this.state.redirect){
            return <Redirect to ="/view"/>;
        }
        return (
               <tr>
                    
                    <td className="pt-1 m-0"> {this.props.appointment.firstName} </td>
                    <td className="pt-1 m-0"> {this.props.appointment.lastName} </td>
                    <td className="pt-1 m-0"> {this.props.appointment.email} </td>
                    <td className="p-1 m-0">
                        <Link 
                                className="btn btn-sm btn-dark"
                                to ={`/edit/${this.props.appointment.id}`}
                        >Edit
                        </Link>
                        <Link 
                                className="btn btn-sm btn-danger ml-2"
                                to = {`/edit/${this.props.appointment.id}`}
                                // onClick = {this.handleDelete}
                        > Delete
                        </Link>
                    </td>
                </tr> 
        );
    }
    handleDelete = () =>{
        axios.get(`http://localhost/system/delete.php?id= ${this.props.appointment.id}`)
        .then(this.setState({redirect:true}))
        .catch(err=>console.log(err))
    }
}

export default RecordList;