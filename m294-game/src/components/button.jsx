export default function Button({
    answer,
    onAnswerClick,
    disabled = false,
    className,
}) {
    return (
        <button
            className={`button ${className || ""}`}
            onClick={onAnswerClick}
            disabled={disabled}
        >
            {answer}
        </button>
    );
}
