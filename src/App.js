import React from 'react';
import TaskBoard from './components/taskBoard/TaskBoard'
import {Container} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Container>
        <TaskBoard/>
      </Container>
    </div>
  );
}

export default App;
