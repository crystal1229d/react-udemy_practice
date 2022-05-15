import React, { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';
import Card from './components/UI/Card/Card';

import styles from './App.module.css'
import AlertModal from './components/AlertModal/AlertModal';
import Button from './components/UI/Button/Button';

const App = () => {

  const [IsInputValid, setIsInputValid] = useState({
    isValid: true,
    invalidReason: ''
  })

  const [Users, setUsers] = useState([
    { id:'20220514160001', name: 'crystal', age: 26 },
    { id:'20220514160002', name: 'soojung', age: 16 }, 
  ])

  const addUserHandler = (user) => {
    setUsers(prevUsers => {
      return [user, ...prevUsers]
    })
  }

  const deleteUserHandler = userId => {
    setUsers(prevUsers => {
      const updateUsers = prevUsers.filter(user => user.id !== userId)
      return updateUsers
    })
  }

  const renderUserList = (() => {
    let content = (
      <p>No users here. Maybe add one?</p>
    )
    
    if (Users.length > 0) {
      content = (
        <UserList users={Users} onDeleteUser={deleteUserHandler} />
      )
    } 

    return content
  })()
  
  const renderInvalidInputModal = (() => {
    let content = (
      <AlertModal>
        <div>Invalid Input</div>
        <div><p>{IsInputValid.invalidReason}</p></div>
        <Button>Okay</Button>
      </AlertModal>
    )

    return content
  })()

  return (
    <div> 
      {!IsInputValid && <AlertModal>{renderInvalidInputModal}</AlertModal>}
        <Card className={styles.user_form}>
        <UserInput onAddUser={addUserHandler} setIsInputValid={setIsInputValid} />
        </Card>
        <Card className={styles.user_list}>
          { renderUserList }
        </Card>
    </div>
  );
}

export default App;