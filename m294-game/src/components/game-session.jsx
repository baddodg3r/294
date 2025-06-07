import Button from './button';
import { useState } from 'react';

function GameSession({ questions, onResetGame }) {

    if (!questions || questions.length === 0) {
        return <h3>Keine Fragen verfügbar</h3>;
    }

    const [questionIndex, setQuestionIndex] = useState(0);
    const currentQuestion = questions[questionIndex];
    console.log(currentQuestion.question);

    console.log(currentQuestion);
    return (
        <div>
            <h2>{currentQuestion.question}</h2>
            <div className="buttonbar">
                {currentQuestion.answers.map((answer, index) => (
                    <Button
                        key={index}
                        answer={answer}
                        onAnswerClick={() => {
                            console.log(`Antwort ${index + 1}: ${answer} wurde geklickt`);
                            setQuestionIndex(questionIndex + 1);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default GameSession;