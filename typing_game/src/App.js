import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Container, Header, TextArea, Button} from 'semantic-ui-react'
function App() {
  return (
    <Container  textAlign='center'>
      <br/>
      <Header as='h1'> Speed Typing Game</Header>
      <TextArea className="textarea"/>
      <br/>
      <Header as='h3'> Time Remaining : </Header>
      <Button color='blue'>START</Button>
    </Container>
  );
}

export default App;
