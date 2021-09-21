import React, { useState } from 'react';
import './App.css';
import CARDS from "./assets/cards.json";
import { CardViewer } from './components/CardViewer';
import { ControlPanel } from './components/ControlPanel';


function App(): JSX.Element {
  return (
    <div className="App">
      <div>
          <ControlPanel></ControlPanel>
          <CardViewer></CardViewer>
      </div>
    </div>
  );
}

export default App;
