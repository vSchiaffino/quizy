import React, { useState } from 'react'
import styles from './Option.module.css'

export const Option = ({ answer, correct, onChangeQuiz }) => {
  const [selectedCorrect, setSelectedCorrect] = useState(null)
  const onClick = () => {
    setSelectedCorrect(correct)
    setTimeout(() => {
      onChangeQuiz()
      setSelectedCorrect(null)
    }, 1000)
  }
  const mapAditionalClass = {
    true: styles.correct,
    false: styles.incorrect,
    null: '',
  }
  const adittionalClass = mapAditionalClass[selectedCorrect]
  return (
    <div
      key={answer}
      className={`${styles.option} ${adittionalClass}`}
      onClick={onClick}
    >
      {answer}
    </div>
  )
}
