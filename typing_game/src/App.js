import React, {useState, useEffect} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Container, Header, TextArea, Button} from 'semantic-ui-react'
function App() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)

  useEffect(() => {
    if(timeRemaining>0){
      setTimeout(() => {
        setTimeRemaining(time => time - 1 )
        console.log(timeRemaining)
    }, 1000)
  }},[timeRemaining])

  function handleInput(event){
    setText(event.target.value)
  }

  function wordCount(text){
    const wordsArray = text.trim().split(" ")
    const filterWords = wordsArray.filter(word => word !== "")
    console.log(filterWords.length)
    return filterWords
  }
  

  return (
    <Container  textAlign='center'>
      <br/>
      <Header as='h1'> Speed Typing Game</Header>
      <TextArea 
          className="textarea"
          value={text}
          onChange={handleInput}    
      />
      <br/>
      <Header as='h3'> Time Remaining : {timeRemaining}</Header>
      <Button color='blue' onClick={() => wordCount(text)}>START</Button>
      <Header as='h3'> Word Count : </Header>
    </Container>
  );
}

export default App;
