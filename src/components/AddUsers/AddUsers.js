import React, { useState } from 'react'
import Wrapper from '../Helpers/Wrapper'

import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import ErrorModal from '../UI/ErrorModal/ErroModal'

import classes from './AddUsers.module.css'

const AddUser = (props) => {

    const [EnteredUserName, setEnteredUserName] = useState('')
    const [EnteredUserAge, setEnteredUserAge] = useState('')
    const [Error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()

        if (EnteredUserName.trim().length === 0 || EnteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }

        if (+EnteredUserAge < 1) {
            setError({
                title: 'Invalid input', 
                message: 'Please enter a valid age (bigger than 0).'
            })
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

    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
        {Error && <ErrorModal title={Error.title} message={Error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' value={EnteredUserName} onChange={userNameChangeHandler} />
                <label htmlFor='userage'>Age</label>  
                <input id='userage' type='number' value={EnteredUserAge} onChange={userAgeChangeHandler} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </Wrapper>
    )
}

export default AddUser