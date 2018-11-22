import React, { Component } from "react";
import axios from "axios";
import UserInfo  from "./UserInfo";

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=1&per_page=10")
            .then( (res) => {
                       this.setState({users: res.data.data});
                    });
  };
// delete the item with userId.
  deleteUserById(e,userId){
    const newUsersList = this.state.users.filter(item => item.id !== userId);
    this.setState({users: newUsersList});
    e.preventDefault();
  }
// delete duplicate users from the state 
  deleteDuplicateUsers(event){
    const uniqueUsersList = this.state.users.reduce((x, y) => x.findIndex(event=>event.first_name===y.first_name)<0 ? [...x, y]: x, []);
    this.setState({users: uniqueUsersList});
    event.preventDefault();
  }

  render() {
    return (
      <div className="pearson-container">
        <h1 className="pearson-heading">Pearson User Management</h1>  
        <div className="pearson-users">
          <div className="pearson-body">
            {this.state.users.length ? 
              (<div className="row">
                {this.state.users.map((data,i) => {
                  return(
                    <UserInfo userData={data} key={i} deleteUserById={(e) => this.deleteUserById(e,data.id)}/>
                    )
                })}
              </div>) : <div className="loading-users">Loading users data from api....</div>}
          </div>
        {this.state.users.length ? (<div className="delete-duplicate">
          <button onClick={(event) => this.deleteDuplicateUsers(event)} > Delete Duplicates </button></div>) : ''}
        </div>
      </div>
    );
  }
}
