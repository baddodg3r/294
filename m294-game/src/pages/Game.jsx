import { useState } from "react";
import Button from "../components/button";
import { sportsQuestions, gamesQuestions, movieQuestions } from "../data/mock";
import GameSession from "../components/game-session";

export const Game = () => {
    const [showCategorySelector, setShowCategorySelector] = useState(true);
    const [apiQuestions, setApiQuestions] = useState([]);

    // 1.4 Kategorie-click verarbeiten
    const handleCategoryClick = (category) => {
        switch (category) {
            case "Sport":
                setApiQuestions(sportsQuestions);
                break;
            case "Games":
                setApiQuestions(gamesQuestions);
                break;
            case "Filme":
                setApiQuestions(movieQuestions);
                break;
            default:
                console.warn("Unbekannte Kategorie: ", category);
        }
        setShowCategorySelector(false); // <-- Wichtig!
    };

    const handleResetGame = () => {
        setApiQuestions([]);
        setShowCategorySelector(true);
    };

    return (
        <div className="game-page">
            <h1>Wähle eine Kategorie</h1>

            {showCategorySelector && (
                <div className="category-buttons">
                    <Button answer="Sport" onAnswerClick={() => handleCategoryClick("Sport")} />
                    <Button answer="Games" onAnswerClick={() => handleCategoryClick("Games")} />
                    <Button answer="Filme" onAnswerClick={() => handleCategoryClick("Filme")} />
                </div>
            )}

            {/* Platzhalter für GameSession */}
            {!showCategorySelector && apiQuestions.length > 0 && (
                <div className="game-session-placeholder">
                    <p>Spiel beginnt mit {apiQuestions.length} Fragen</p>
                    <GameSession questions={apiQuestions} onResetGame={handleResetGame} />
                </div>
            )}
        </div>
    );
};

export default Game;
