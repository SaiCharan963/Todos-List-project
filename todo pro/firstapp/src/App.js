
import { useState } from 'react';
import './App.css';
 import Header from './components/Header.js';  
 import Form from './components/Form.js';
 import TodosList from './components/TodosList.js';

const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
  <div className="container">
    <div className="app-wrapper">
      <div>
        <Header />
      </div>
      <div>
        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div>
        <TodosList todos={todos} setTodos={setTodos} />
      </div>
    </div>

    </div>);
}

export default App;
