import React, {useState, useEffect, useRef} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Container, Header, Button} from 'semantic-ui-react'
function App() {
  const STARTING_TIME = 5
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const inputRef = useRef(null)
  useEffect(() => {
    if(isTimeRunning && timeRemaining>0){
      setTimeout(() => {
        setTimeRemaining(time => time - 1 )
    }, 1000)
  } else if(timeRemaining === 0 ){
    setIsTimeRunning(false)
    setWordCount(wordCounter(text))
}
},[timeRemaining, isTimeRunning])
  
  function handleInput(event){
    setText(event.target.value)
  }

  function wordCounter(text){
    const wordsArray = text.trim().split(" ")
    const filterWords = wordsArray.filter(word => word !== "")
    return filterWords.length
  }

  function startTimer(){
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    inputRef.current.disabled = false
    inputRef.current.focus()
    // setWordCount(0)
  }
  
  return (
    <Container  textAlign='center'>
      <br/>
      <Header as='h1'> Speed Typing Game</Header>
      <textarea 
          ref={inputRef}
          className="textarea"
          value={text}
          onChange={handleInput} 
          disabled={!isTimeRunning}   
      />
      <br/>
      <Header as='h3'> Time Remaining : {timeRemaining}</Header>
      <Button 
          color='blue'
          onClick={startTimer}
          disabled={isTimeRunning}
      >
        START
      </Button>
      <Header as='h3'> Word Count : {wordCount}</Header>
    </Container>
  );
}

export default App;
