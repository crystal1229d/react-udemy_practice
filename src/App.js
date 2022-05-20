import React, { useState } from 'react';
import AddUers from './components/AddUsers/AddUers';
import UsersList from './components/UsersList/UsersList';


function App() {

  const [UserList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      setUserList([...prevUserList, { id:Math.random().toString(), name: uName, age: uAge }])
    })
  }

  return (
    <div>
      <AddUers onAddUser={addUserHandler} />
      <UsersList users={UserList} />
    </div>
  );
}

export default App;
