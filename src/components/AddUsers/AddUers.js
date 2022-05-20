import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'

import styles from './AddUsers.module.css'
import ErrorModal from '../UI/ErrorModal/ErrorModal'

const AddUers = props => {

  const [EnteredName, setEnteredName] = useState('')
  const [EnteredAge, setEnteredAge] = useState('')
  const [Error, setError] = useState()

  const userNameChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const userAgeChangeHandler = event => {
    setEnteredAge(event.target.value)
  }

  const addUserHandler = event => {
    event.preventDefault()

    if (EnteredName.trim().length === 0 || EnteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input', 
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return
    }

    if (+EnteredAge < 0) {
      setError({
        title: 'Invalid input', 
        message: 'Please enter a valid age (bigger than 0)'
      })
      return
    }

    props.onAddUser(EnteredName, EnteredAge)

    setEnteredName('')
    setEnteredAge('')
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      { Error && <ErrorModal title={Error.title} message={Error.message} onConfirm={errorHandler} />}
      <Card className={styles.form}>
        <form>
          <label>Username</label>
          <input type='text' value={EnteredName} onChange={userNameChangeHandler}/>
          <label>Age (Years)</label>
          <input type='number' value={EnteredAge} onChange={userAgeChangeHandler} />
          <Button onClick={addUserHandler}>Add User</Button>
        </form>
      </Card>
      </>
  )
}

export default AddUers