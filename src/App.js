import { useState } from 'react'
import { Quiz } from './components/Quiz/Quiz'
import { Home } from './components/Home/Home'
import { GoBack } from './components/GoBackButton/GoBack'

function App() {
  const [config, setConfig] = useState({ category: 'any', difficulty: 'easy' })
  const [screen, setScreen] = useState('quiz')
  const mapScreenToComponent = {
    home: Home,
    quiz: Quiz,
  }
  const isInQuiz = screen === 'quiz'
  const Component = mapScreenToComponent[screen]
  return (
    <div className="main">
      <Component setScreen={setScreen} config={config} setConfig={setConfig} />
      <GoBack show={isInQuiz} onClick={() => setScreen('home')} />
    </div>
  )
}

export default App
