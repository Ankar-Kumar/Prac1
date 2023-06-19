
import './App.css';
import Wallet from './Wallet';
import { useState } from 'react';
import Hero from './Hero';

function App() {
  const [state, setState] = useState({
    web3:null,
    contract:null
  })
  const saveState=()=>{
    setState(state);
  }
  return (
    <div className="App">
    <Wallet saveState={saveState}/>
    <Hero state={state}/>
    </div>
  );
}

export default App;
