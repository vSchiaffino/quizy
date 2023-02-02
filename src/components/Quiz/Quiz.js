import React from 'react'
import useQuiz from '../../hooks/useQuiz'
import { Option } from '../Option/Option'
import styles from './Quiz.module.css'
import { Heading } from '../Heading/Heading'

export const Quiz = () => {
  const [quiz, changeQuiz] = useQuiz()
  return (
    quiz && (
      <>
        <Heading title={quiz.question} />
        <div className={styles.options}>
          {quiz.answers.map(({ answer, correct }) => (
            <Option
              key={answer}
              answer={answer}
              correct={correct}
              onChangeQuiz={changeQuiz}
            />
          ))}
        </div>
      </>
    )
  )
}
