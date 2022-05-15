import React, { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';
import Card from './components/UI/Card/Card';

import styles from './App.module.css'

const App = () => {

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
  }) ()

  return (
    <div> 
        <Card className={styles.user_form}>
          <UserInput onAddUser={addUserHandler} />
        </Card>
        <Card className={styles.user_list}>
          { renderUserList }
        </Card>
    </div>
  );
}

export default App;