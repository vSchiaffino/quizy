import React from 'react'
import styles from './Select.module.css'

export const Select = ({ label, id, options, selected, setSelected }) => {
  console.log(options)
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        className={styles.select}
        id={id}
        value={selected}
        onChange={setSelected}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
