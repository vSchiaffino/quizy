import React from 'react'
import { Heading } from '../Heading/Heading'
import styles from './Home.module.css'
import useCategories from '../../hooks/useCategories'
import { Select } from '../Select/Select'

export const Home = ({ setScreen, config, setConfig }) => {
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
        <Select
          label="Category"
          options={categories}
          id="categories"
          selected={config.category}
          setSelected={(category) => {
            setConfig({ ...config, category })
          }}
        />
        <Select
          label="Difficulty"
          options={options}
          id="difficulty"
          selected={config.difficulty}
          setSelected={(difficulty) => {
            setConfig({ ...config, difficulty })
          }}
        />
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
