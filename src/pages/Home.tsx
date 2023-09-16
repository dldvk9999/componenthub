import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";
import "../styles/Home.scss";
import { JSX } from "react/jsx-runtime";

function Home() {
    const [ref, inView] = useInView();
    const [cards, setCards] = useState<Array<JSX.Element>>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    const cardInit = useCallback(() => {
        const result: JSX.Element[] = [];
        for (let i = 0; i < 10; i++) {
            result.push(
                <div className="Home-card" key={uuidv4()}>
                    <img src={process.env.PUBLIC_URL + "/login/signin.jpeg"} alt="test" />
                    <div className="Home-card-text">
                        <div className="Home-card-text-title">
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        </div>
                        <p className="Home-card-text-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptas odit odio
                            accusamus autem ducimus itaque earum. Quia est aut, facilis fugit saepe blanditiis sequi
                            exercitationem, maxime necessitatibus ab laudantium.
                        </p>
                        <p className="Home-card-text-maker">
                            code by <i>maker</i>
                        </p>
                    </div>
                </div>
            );
        }
        setCards((card) => [...card, ...result]);
    }, []);

    // loading이 화면에 보일때는 감지해서 무한 스크롤
    useEffect(() => {
        if (!inView) return;
        else cardInit();
    }, [cardInit, inView]);

    // 카드가 100개 이상이면 중지
    useEffect(() => {
        if (cards.length >= 100) setLoading(false);
    }, [cards]);

    return (
        <section className="Home">
            <header className="Home-header">
                <h1>ComponentHub</h1>
                <i>Create, Share, and Use components!</i>
            </header>

            <main>
                <section className="Home-cards">{cards}</section>

                {isLoading && (
                    <section ref={ref} className="Home-loading">
                        Loading ...
                    </section>
                )}
            </main>

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
