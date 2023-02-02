import React from 'react'
import styles from './Heading.module.css'

export const Heading = ({ title }) => {
  return <h2 className={styles.heading}>{title}</h2>
}
