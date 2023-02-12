import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;