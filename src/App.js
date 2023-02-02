import { Option } from './Option'
import useQuiz from './hooks/useQuiz'

function App() {
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

export default App
