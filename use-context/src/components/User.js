import React, { useContext } from 'react'
import { UserContext } from '../App'


export default function User () {

    const value = useContext(UserContext)

    return (
        <UserContext.Consumer>
            {value => <h1>{value}</h1>}
        </UserContext.Consumer>
    )
}