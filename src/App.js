import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {

  const [UserList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { id:Math.random().toString(), name: uName, age: uAge }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={UserList} />
    </div>
  );
}

export default App;
