import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

//Dummydaten für die erste Frage
const question1 = {
  question: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
  answers: ["Alfa", "Bravo", "Charlie"],
  correctAnswer: "Alfa" // Brauchen wir heute noch nicht, gut für später
};


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Willkommen beim WISS-Quiz</h1>
      <button>Nächste Frage</button>
    </>
  );
};

export default App;
