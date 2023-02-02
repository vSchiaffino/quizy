import { useEffect, useState } from 'react'

function App() {
  const [quiz, setQuiz] = useState(null)
  useEffect(() => {
    fetch('https://the-trivia-api.com/api/questions?limit=1')
      .then((response) => response.json())
      .then((data) => {
        setQuiz({
          question: data[0].question,
          answers: data[0].incorrectAnswers.concat(data[0].correctAnswer),
        })
      })
  }, [])
  return (
    <div className="quiz">
      {quiz && (
        <>
          <h2>{quiz.question}</h2>
          <div className="options">
            {quiz.answers.map((answer) => (
              <div key={answer} className="option">
                {answer}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default App
