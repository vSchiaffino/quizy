import React from 'react'
import useQuiz from '../hooks/useQuiz'
import { Option } from './Option'

export const Quiz = () => {
  const [quiz, changeQuiz] = useQuiz()
  return (
    <div className="quiz">
      {quiz && (
        <>
          <h2>{quiz.question}</h2>
          <div className="options">
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
