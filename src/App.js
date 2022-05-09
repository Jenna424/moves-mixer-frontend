import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import WorkoutDetails from './pages/WorkoutDetails'
import ExerciseGuide from './pages/ExerciseGuide'

import './App.css'

const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="workouts/:id" element={<WorkoutDetails />} />
          <Route path="exercises/:id" element={<ExerciseGuide />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
