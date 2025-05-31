import Button from './button';

function GameSession({ question }) {
    const game_question = question; // Frageobjekt aus Props holen

    return (
        <div>
            <p>Hier findet das eigentliche Spiel statt...</p>
            <div className="buttonbar">
                {game_question.answers.map((answer, index) => (
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