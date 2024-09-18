import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header s> 
      <h1>hello sitters</h1>
      <p>The web application operates with a user-friendly design that caters to both babies and elders. It features intuitive navigation, allowing users to easily access various activities. For babies, it includes interactive games that promote sensory development, such as touch-responsive animations and calming music. Elders can enjoy memory-boosting puzzles and storytelling options that stimulate cognitive engagement.

The app supports voice commands for hands-free interaction, making it accessible for those with mobility issues. Additionally, it allows caregivers to customize content and monitor engagement, fostering shared experiences. Regular updates introduce new activities to keep the experience fresh and engaging for both demographics, ensuring fun and meaningful interactions across generations.
   
   </p>  </header>
    </>
  )
}

export default App
