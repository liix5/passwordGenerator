import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PasswordStrength from './components/passwordStrength'
import GeneratePasswords from './components/passwordGenerator.jsx'

function App() {
  

  return (
    <div className=' flex justify-center mt-20 items-center'>
      <GeneratePasswords/>
      <PasswordStrength/>
      
    </div>
  )
}

export default App
