import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState();


  const btnClick = () => {
    alert(`hello ${sum}`);
  }

  useEffect(() => {
    const result = Number(number1) + Number(number2);
    setSum(result);
  }, [number1, number2]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sum =  {sum}
        </p>
        <input type="text" 
               value={number1} 
               onChange={(event) => setNumber1(event.target.value)} 
        />
                <input type="text" 
               value={number2} 
               onChange={(event) => setNumber2(event.target.value)} 
        />
        <button onClick={() => btnClick()}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
