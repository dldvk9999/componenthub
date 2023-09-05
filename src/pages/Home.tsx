import logo from "../logo.svg";
import "../styles/Home.scss";

function Home() {
    return (
        <section className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/Home.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </section>
    );
}

export default Home;
