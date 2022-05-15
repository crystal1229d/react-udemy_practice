import React from 'react'
import Card from '../UI/Card/Card'

import styles from './AlertModal.module.css'

const AlertModal = props => {
    return (
        <div className={`${styles.modal_background}`}>
            <Card className={styles.modal}>
                {props.children}
            </Card> 
        </div>   
  )
}

export default AlertModal