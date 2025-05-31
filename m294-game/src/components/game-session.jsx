import Button from './button';

function GameSession({ question }) {


    return (
        <div>
            <h2>{question.question}</h2>
            <div className="buttonbar">
                {question.answers.map((answer, index) => (
                    <Button
                        key={index}
                        text={answer}
                        onAnswerClick={() => {
                            console.log(`Antwort ${index + 1}: ${answer} wurde geklickt`);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default GameSession;