import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [userChoice, setUserChoice] = useState('rock')
  const [systemChoice, setSystemChoice] = useState('rock')
  const [userPoints, setUserPoints] = useState(0)
  const [systemPoints, setSystemPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(' Let\'s see who wins :)')
  const [result, setResult] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const choices = ['rock', 'paper', 'scissors']
  const handleOnClick = (choice) => {
    setUserChoice(choice)
    generateSystemChoice()  
}

  const generateSystemChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setSystemChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(()=>{
    const comboMoves = userChoice + systemChoice
    if(userPoints <=2 && systemPoints <=2) {
      if(comboMoves === "rockscissors" || comboMoves === "paperrock" || comboMoves === "scissorspaper"){
        const updatedUserPoints = userPoints + 1 
        setUserPoints(updatedUserPoints)
        setTurnResult(' User got +1 point 👏🏼')
        if(updatedUserPoints === 3) {
          setGameOver(true)
          setResult(' User wins 🥳')
        }
      }

    if(comboMoves === "paperscissors" || comboMoves === "scissorsrock" || comboMoves === "rockpaper"){
        const updatedSystemPoints = systemPoints + 1 
        setSystemPoints(updatedSystemPoints)
        setTurnResult(' System got +1 point 👏🏼')
        if(updatedSystemPoints === 3) {
          setGameOver(true)
          setResult(' System wins 🥳')
        }
      }

      if(comboMoves === "rockrock" || comboMoves === "paperpaper" || comboMoves === "scissorsscissors"){
        setTurnResult(' No one got a point 🧐')
      }
  }
},[userChoice, systemChoice])


  return (
    <div className='App'>
      <h2 className='rock'>Rock</h2>     
      <h2 className='paper'>Paper</h2>   
      <h2 className='scissors'>Scissors</h2>    
        <div className='score'>
          <h2 className='user_points'>User Points: {userPoints}</h2>
          <h2 className='system'>System Points: {systemPoints}</h2>
        </div>   
        <div className='choice'>
          <div className='user_choice'>
             <img className='user_hand' src={`../img/${userChoice}.png`}/>
          </div>
          <div className='system_choice'>
             <img className='system_hand' src={`../img/${systemChoice}.png`}/>
          </div>        
        </div>
        <div className='button-div'>
        {choices.map((choice, index)=>
          <button className='button' key={index} onClick={()=> handleOnClick(choice)}>{choice}</button>

        )}
        </div>
        <div className='result'>
          <h2>Turn Result:{turnResult}</h2>
          <h2>Final Result:{result}</h2>
        </div>
        <div className='button-div'>{gameOver && 
          <button className='button' onClick ={()=>reset()}>Restart Game?</button>}
        </div>
    </div>
  )
}

export default App
