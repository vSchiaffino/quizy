import { useState } from 'react'
import { Quiz } from './components/Quiz/Quiz'
import { Home } from './components/Home/Home'

function App() {
  const [screen, setScreen] = useState('quiz')
  const mapScreenToComponent = {
    home: Home,
    quiz: Quiz,
  }
  const isInQuiz = screen === 'quiz'
  const Component = mapScreenToComponent[screen]
  return (
    <div className="main">
      <nav></nav>
      <Component setScreen={setScreen} />
      {isInQuiz && (
        <button className="btn" onClick={() => setScreen('home')}>
          Go back
        </button>
      )}
    </div>
  )
}

export default App
