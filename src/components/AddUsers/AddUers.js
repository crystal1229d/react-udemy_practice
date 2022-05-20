import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'

import styles from './AddUsers.module.css'

const AddUers = props => {

  const [EnteredName, setEnteredName] = useState('')
  const [EnteredAge, setEnteredAge] = useState('')

  const userNameChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const userAgeChangeHandler = event => {
    setEnteredAge(event.target.value)
  }

  const addUserHandler = event => {
    event.preventDefault()

    if (EnteredName.trim().length === 0 || EnteredAge.trim().length === 0) {
      return
    }

    if (+EnteredAge < 0) {
      return
    }

    props.onAddUser(EnteredName, EnteredAge)

    setEnteredName('')
    setEnteredAge('')
  }

  return (
    <Card className={styles.form}>
      <form>
        <label>Username</label>
        <input type='text' value={EnteredName} onChange={userNameChangeHandler}/>
        <label>Age (Years)</label>
        <input type='number' value={EnteredAge} onChange={userAgeChangeHandler} />
        <Button onClick={addUserHandler}>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUers