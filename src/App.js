import React, { useState } from 'react';
import AddUsers from './components/AddUsers/AddUsers';
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
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={UserList} />
    </div>
  );
}

export default App;