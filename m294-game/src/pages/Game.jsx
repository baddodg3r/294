import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Button from './components/button';

//Dummydaten für die erste Frage
const question1 = {
    question: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
    answers: ["Alfa", "Bravo", "Charlie"],
    correctAnswer: "Alfa" // Brauchen wir heute noch nicht, gut für später
};



function App() {

    return (
        <div className="App">
            <header>
                <h1>Willkommen beim WISS-Quiz!</h1>
                <h2>{question1.question}</h2>
            </header>

            <div className='buttonbar'>
                {question1.answers.map((answer) => (
                    <Button

                        key={answer}
                        text={answer}

                        onAnswerClick={
                            () => {
                                console.log(`Antwort ${answer} wurde geclickt`);
                            }
                        }

                    >
                    </Button>

                ))}

            </div>
        </div>
    );
};

export default App;
