import "../styles/Home.scss";

function Home() {
    return (
        <section className="Home">
            <header className="Home-header">
                <h1>ComponentHub</h1>
                <i>Create, Share, and Use components!</i>
            </header>

            <footer className="Home-footer">
                powered by{" "}
                <a href="https://github.com/dldvk9999" rel="noopener noreferrer">
                    dldvk9999
                </a>
            </footer>
        </section>
    );
}

export default Home;
