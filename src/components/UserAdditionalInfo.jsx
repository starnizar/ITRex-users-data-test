import React from "react";
import {useSelector} from "react-redux";

const UserAdditionalInfo = () => {

    const selectedUser = useSelector(state => state.users.selectedUser)

    if (selectedUser.firstName === undefined) {
        return <></>
    }

    return (
        <div className='info'>
            <p>Profile info:</p>
            <p>Selected profile: {selectedUser.firstName} {selectedUser.lastName}</p>
            <p>Description: {selectedUser.description}</p>
            <p>Address: {selectedUser.adress.streetAddress}</p>
            <p>City: {selectedUser.adress.city}</p>
            <p>State: {selectedUser.adress.state}</p>
            <p>Index: {selectedUser.adress.zip}</p>
         </div>
    )
}

export default UserAdditionalInfo
