import React from 'react'
import useQuiz from '../../hooks/useQuiz'
import { Option } from '../Option/Option'
import styles from './Quiz.module.css'

export const Quiz = () => {
  const [quiz, changeQuiz] = useQuiz()
  return (
    <div className={styles.quiz}>
      {quiz && (
        <>
          <h2 className={styles.heading}>{quiz.question}</h2>
          <div className={styles.options}>
            {quiz.answers.map(({ answer, correct }) => (
              <Option
                answer={answer}
                correct={correct}
                onChangeQuiz={changeQuiz}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
