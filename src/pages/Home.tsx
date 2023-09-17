import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";
import "../styles/Home.scss";
import { JSX } from "react/jsx-runtime";
import mock from "../mock/components.json";
import { componentsType } from "../types/components";

function Home() {
    const [ref, inView] = useInView();
    const [cards, setCards] = useState<Array<JSX.Element>>([]);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [components] = useState<componentsType>(mock);

    // 컴포넌트 카드 생성
    const cardInit = useCallback(() => {
        const result: JSX.Element[] = [];
        for (const maker in components) {
            for (const component in components[maker]) {
                result.push(
                    <a className="Home-card" href={`/${maker}/${component}`} key={uuidv4()}>
                        <img
                            src={`${process.env.PUBLIC_URL}${components[maker][component].image}`}
                            alt={`${maker} component`}
                        />
                        <div className="Home-card-text">
                            <div className="Home-card-text-title">
                                <h2>{components[maker][component].title}</h2>
                            </div>
                            <p className="Home-card-text-desc">{components[maker][component].contents}</p>
                            <p className="Home-card-text-maker">
                                code by <i>{maker}</i>
                            </p>
                        </div>
                    </a>
                );
            }
        }
        setCards((card) => [...card, ...result]);
    }, [components]);

    // loading이 화면에 보일때는 감지해서 무한 스크롤
    useEffect(() => {
        if (!inView) return;
        else cardInit();
    }, [cardInit, inView]);

    // 카드가 100개 이상이면 중지
    useEffect(() => {
        if (cards.length >= Object.keys(components).length) setLoading(false);
    }, [cards, components]);

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
        </section>
    );
}

export default Home;
