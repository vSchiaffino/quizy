import React, { useState } from 'react'

export const Option = ({ answer, correct, onChangeQuiz }) => {
  const [className, setClassName] = useState('')
  const onClick = () => {
    setClassName(correct ? 'correct' : 'incorrect')
    setTimeout(() => {
      onChangeQuiz()
      setClassName('')
    }, 1000)
  }
  return (
    <div key={answer} className={`option ${className}`} onClick={onClick}>
      {answer}
    </div>
  )
}
