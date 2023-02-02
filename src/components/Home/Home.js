import React from 'react'
import { Heading } from '../Heading/Heading'
import styles from './Home.module.css'
import useCategories from '../../hooks/useCategories'
import { Select } from '../Select/Select'

export const Home = ({ setScreen }) => {
  const categories = useCategories()
  const options = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ]
  return (
    <>
      <Heading title="Quizy app" />
      <form className={styles.form}>
        <Select label="Categories" options={categories} id="categories" />
        <Select label="Difficulty" options={options} id="difficulty" />
        <button
          className={styles.button}
          onClick={() => {
            setScreen('quiz')
          }}
        >
          Start game!
        </button>
      </form>
    </>
  )
}
