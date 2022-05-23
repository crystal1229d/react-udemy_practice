import React, { useRef, useState } from 'react'

import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import ErrorModal from '../UI/ErrorModal/ErroModal'

import classes from './AddUsers.module.css'

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [Error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()
        
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid input', 
                message: 'Please enter a valid age (bigger than 0).'
            })
            return 
        }

        props.onAddUser(enteredName, enteredAge)

        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <>
        {Error && <ErrorModal title={Error.title} message={Error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    type='text'
                    ref={nameInputRef} />
                <label htmlFor='userage'>Age</label>  
                <input
                    id='userage'
                    type='number'
                    ref={ageInputRef}
                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </>
    )
}

export default AddUser