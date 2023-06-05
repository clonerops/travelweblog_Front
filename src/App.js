import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Signup from './pages/Signup'

const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route
        path="*"
        element={<Navigate to="/signup" replace />}
    />

    </Routes>
  )
}

export default App