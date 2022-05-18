import React, { useState } from 'react'

import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'

import classes from './AddUser.module.css'

const AddUser = (props) => {

    const [EnteredUserName, setEnteredUserName] = useState('')
    const [EnteredUserAge, setEnteredUserAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()

        if (EnteredUserName.trim().length === 0 || EnteredUserAge.trim().length === 0) {
            return
        }

        if (+EnteredUserAge < 1) {
            return 
        }

        props.onAddUser(EnteredUserName, EnteredUserAge)

        setEnteredUserName('')
        setEnteredUserAge('')
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' value={EnteredUserName} onChange={userNameChangeHandler} />
                <label htmlFor='userage'>Age</label>  
                <input id='userage' type='number' value={EnteredUserAge} onChange={userAgeChangeHandler} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser