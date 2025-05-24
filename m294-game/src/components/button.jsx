const Button = ({ text, onAnswerClick }) => {
    return <button onClick={onAnswerClick}>{text}</button>;
};


export default Button;