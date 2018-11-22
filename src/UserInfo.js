import React from 'react';

const UserInfo = function(props) {
    return (
        <div className="user-info" key={props.userData.id}>
            <div className="user-info-cont">
                <img src={props.userData.avatar} className="user-img" alt="Avatar" />
                <h3 className="user-name">{props.userData.first_name} {props.userData.last_name}</h3>
                <button className="delete-user" onClick={(e) => props.deleteUserById(e,props.userData.id)}>Delete</button>
            </div>
        </div>
    );
};
export default UserInfo;