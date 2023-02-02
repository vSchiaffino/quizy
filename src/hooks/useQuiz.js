import { useEffect, useState } from 'react'

export default function useQuiz() {
  const [quiz, setQuiz] = useState(null)
  const changeQuiz = () => {
    fetch('https://the-trivia-api.com/api/questions?limit=1')
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
  useEffect(() => changeQuiz(), [])
  return [quiz, changeQuiz]
}
