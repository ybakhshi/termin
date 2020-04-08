import React, { Component } from 'react';
import axios from 'axios';
class Insert extends Component {
    state = {
        firstName : '',
        lastName : '',
        email : ''
    }

    render() {
        return (
            <div className = "mt-3">
               <h3> Add new user</h3> 
               <form onSubmit ={this.onSubmit}>
                   <div className="form-group">
                       <label htmlFor="firstName"> First Name</label>
                       <input   type="text" 
                                className="form-control"
                                onChange ={(e) =>this.onChangeFirstName(e.target.value)}
                                value = {this.state.firstName}
                       />
                   </div>
                   <div className="form-group">
                       <label htmlFor="firstLast"> Last Name</label>
                       <input   type="text" 
                                className="form-control"
                                onChange ={(e) =>this.onChangeLastName(e.target.value)}
                                value = {this.state.lastName}
                        />
                   </div>
                   <div className="form-group">
                       <label htmlFor="email"> E-Mail</label>
                       <input   type="email" 
                                className="form-control"
                                onChange ={(e) =>this.onChangeEmail(e.target.value)}
                                value = {this.state.email}
                       />
                   </div>
                   <div className="form-group d-block">
                       <button   
                                className="btn btn-dark" 
                        >
                            Register User
                        </button>
                   </div>
               </form>
               
            </div>
        );
    }
    onChangeFirstName = (firstName) =>{
        
        this.setState({firstName:firstName});
    }
    onChangeLastName = (lastName) =>{
        
        this.setState({lastName});
    }
    onChangeEmail = (email) =>{
        this.setState({email});
    }
    onSubmit = (e) =>{
        //https://github.com/axios/axios/issues/2345
        e.preventDefault();
        const obj = {...this.state};
        
        axios({
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: 'http://localhost/system/insert.php',
            data: obj
        })
        .then(res =>console.log(res.data));

        this.setState({
            firstName : '',
            lastName : '',
            email : ''
        });
        
    }
}

export default Insert;

// constructor(props){
//     super(props);
//     this.onChangeFirstName = this.onChangeFirstName.bind(this);
//     this.onChangeLastName = this.onChangeLastName.bind(this);
//     this.onChangeEmail = this.onChangeEmail.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
    
//     this.state = {
//         firstName : '',
//         lastName : '',
//         email : ''
//     };
// }