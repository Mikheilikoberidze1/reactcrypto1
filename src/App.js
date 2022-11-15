import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const btnClick = () => {
    alert(`hello ${name}`);
  }

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {name}
        </p>
        <input type="text" 
               value={name} 
               onChange={(event) => setName(event.target.value)} 
        />
        <button onClick={() => btnClick()}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
