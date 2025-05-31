import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/button';
import GameSession from './components/game-session';
import Greeting from './components/greeting';
import Navigation from './components/navigation';

//Dummydaten für die erste Frage
const question1 = {
  question: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
  answers: ["Alfa", "Bravo", "Charlie"],
  correctAnswer: "Alfa" // Brauchen wir heute noch nicht, gut für später
};



function App() {

  return (
    <div className="App">
      {/* {Navigation} */}
      {/*component ohne Props*/}
      <Navigation />
      {/*Header mit logo und Frage*/}
      <header className="App-header">
        <img src="/vite.svg" className="App-logo" alt="logo" />
        <h1>Willkommen beim WISS-Quiz!</h1>
        <h2>{question1.question}</h2>
      </header>

      {/* {GameSession} */}
      {/* Hier wird eine Variable übergeben*/}
      <GameSession question={question1} />
      {/* {Greeting} */}
      {/*Komponente der wir einen String übergeben*/}
      <Greeting name="Player 456" />



    </div>
  );
};

export default App;
