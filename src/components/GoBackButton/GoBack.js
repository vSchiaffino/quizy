import React from 'react'
import styles from './GoBack.module.css'

export const GoBack = ({ show, onClick }) => {
  return (
    show && (
      <button className={styles.button} onClick={onClick}>
        Go back
      </button>
    )
  )
}
