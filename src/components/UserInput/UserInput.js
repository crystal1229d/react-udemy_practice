import React, { useState } from 'react'
import Button from '../UI/Button/Button'

import styles from './UserInput.module.css'

const UserInput = props => {

  const [EnteredName, setEnteredName] = useState('')
  const [EnteredAge, setEnteredAge] = useState(0)

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()

    console.log(EnteredName.trim().length*1, EnteredAge.toString().trim()*1) 

    // 유효성 검사
    if (EnteredName.trim().length*1 === 0 && EnteredAge.toString().trim().length*1 === 0) {
      props.setIsInputValid({
        isValid: false,
        invalidReason : 'Please enter a valid name and age (non-empty values).' 
      })
      return
    }

    if (EnteredAge < 0) {
      props.setIsInputValid({
        isValid: false,
        invalidReason : 'Please Enter...'
      })
      return
    }

    // 데이터 생성
    let today = getTodayDateTime()
    let uniqueId = `${today}${Math.floor(Math.random() * 101).toString()}`

    const userData = {
      id: uniqueId, 
      name: EnteredName,
      age: EnteredAge
    }

    props.onAddUser(userData)
    
    setEnteredName('')
    setEnteredAge(0)
  }

  const getTodayDateTime = () => {
    
    let todayDateTime = ''

    const now = new Date()

    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const day = now.getDate().toString().padStart(2, '0')
    const time = now.getHours().toString().padStart(2, '0')
    const minute = now.getMinutes().toString().padStart(2, '0')
    const second = now.getSeconds().toString().padStart(2, '0')

    todayDateTime = year + month + day + time + minute + second

    return todayDateTime
  }

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <div className={styles.form_control}>
        <div>
          <label>Username</label>
          <input type='text' onChange={nameInputChangeHandler} value={EnteredName} />
        </div>
        <div>
          <label>Age (Years)</label>
          <input type='number' onChange={ageInputChangeHandler} value={EnteredAge} />
        </div>
      </div>
      <Button className={styles.button}>Add User</Button>
    </form>
  )
}

export default UserInput