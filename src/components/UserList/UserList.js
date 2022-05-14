import React from 'react'
import User from '../User/User.js'

import styles from './UserList.module.css'

const UserList = props => {
  return (
    <ul className={styles.users_list}>
      {props.users.map(user => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
        />
      ))}
    </ul>
  )
}

export default UserList