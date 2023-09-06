 
    const Home = ({setStartGame}) => {

        return (
            <div className="center">
                <h1>Welcome</h1>
                <button onClick={ () => setStartGame(true)}>Game Start</button>
            </div>
        );
    };


export default Home;