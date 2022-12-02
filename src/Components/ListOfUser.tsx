import React from 'react'
import { GET_ALL_USERS } from '../Graphql/Queries'
import { DELETE_USER } from '../Graphql/Mutation'
import { useQuery, useMutation } from '@apollo/client'
import './style.css'
function ListOfUsers() {
    const { data } = useQuery(GET_ALL_USERS)
    const[deleteUser, {error}] = useMutation (DELETE_USER)
   
    return (
        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Delete User</th>
                </tr>

                {data && (data.getAllUsers.map((user: any) => {

                    return (
                        <>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td><button onClick={() => {deleteUser({ variables: {id: user.id} })}}>Delete</button></td>
                            </tr>
                        </>
                    )
                }))}
            </table>
        </>
    )
}

export default ListOfUsers