/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

function setQueryParams(config) {
  const { category, difficulty } = config
  const queryParams = []
  queryParams.push('limit=1')
  if (category !== 'any') {
    queryParams.push(`category=${category}`)
  }
  queryParams.push(`difficulty=${difficulty}`)
  return queryParams.join('&')
}

export default function useQuiz(config) {
  const [quiz, setQuiz] = useState(null)
  const changeQuiz = () => {
    fetch(`https://the-trivia-api.com/api/questions?${setQueryParams(config)}`)
      .then((response) => response.json())
      .then(([data]) => {
        let { incorrectAnswers, correctAnswer } = data
        incorrectAnswers = incorrectAnswers.map((answer) => ({
          answer,
          correct: false,
        }))
        correctAnswer = { answer: correctAnswer, correct: true }
        const answers = [...incorrectAnswers, correctAnswer]
        const shuffledAnswers = answers.sort(() => Math.random() - 0.5)
        setQuiz({
          question: data.question,
          answers: shuffledAnswers,
        })
      })
  }
  useEffect(() => changeQuiz(), [config])
  return [quiz, changeQuiz]
}
