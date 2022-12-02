import React, { useState }  from 'react'
import { UPDATE_PASSWORD } from '../Graphql/Mutation'
import { useMutation } from '@apollo/client'
import './style.css'
function UpdatePassword() {
    const [username, setUsername] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const [updatePassword, {error}] = useMutation(UPDATE_PASSWORD)

    return (
        <div className='container'>
            <input
                type="text"
                placeholder='Username'
                onChange={(event) => {
                    setUsername(event.target.value)
                }}
             />    
             <input
                 type= "password"
                 placeholder='Old Password'
                 onChange={(event) => {
                    setOldPassword(event.target.value)
                }}
              />
              <input
                  type= "password" 
                  placeholder='New Password'
                  onChange={(event) => {
                    setNewPassword(event.target.value)
                }}
              />
              <button onClick={() => {
                updatePassword({
                    variables: {
                        username: username,
                        oldPassword: oldPassword,
                        newPassword: newPassword
                    }
                })}}>
                Update Password
              </button>
        </div>
    )
}

export default UpdatePassword 