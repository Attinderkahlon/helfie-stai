import { Routes, Route } from 'react-router-dom'
import { Female } from '../components/femaleQuestions/Female'
import { Male } from '../components/maleQuestions/Male'

export function PrivateRoute() {
  return (
    <div>
      <Routes>
        <Route path='/male' element={<Male />} />
        <Route path='/female' element={<Female />} />
      </Routes>
    </div>
  )
}
