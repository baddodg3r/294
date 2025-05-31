const Greeting = ({ name }) => {
    if (!name) {
        return <div>Welcome to the game!</div>;
    }
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Welcome back to the game!</p>
        </div>
    );
};


export default Greeting;