import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
     {/* <Greet></Greet> */}
     <Greet name="Athi" heroName="Ajith">This is childern props</Greet>
     <Greet name="Minna" heroName="Ajith"><button>hihi</button></Greet>
     <Greet name="Ammmu" heroName="Ajithkumar"/>

     <Welcome name="Sushant"/>
     <Hello />
    </div>
  );
}

export default App;
