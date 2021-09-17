import React, { useState } from 'react';
import './App.css';
import {Prompt} from './components/prompt';
import { SwapButton } from './components/swapButton';


function App(): JSX.Element {
  const [prompt, setPrompt] = useState<string>("Hello and Welcome!");
  return (
    <div className="App">
      <div>
          <Prompt text={prompt}></Prompt>
          <SwapButton change={setPrompt}></SwapButton>
      </div>
    </div>
  );
}

export default App;
