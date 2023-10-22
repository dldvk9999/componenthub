import { useEffect, useRef, useState } from "react";
import "./Slidetitle.scss";

export default function Slidetitle() {
    const [showIntro, setShowIntro] = useState([false, false, false]);
    const slidetitleInto = useRef<HTMLElement>(null);

    // 페이지 로드 후에 2초 있다가 Intro의 Height가 짧아지게 하는 함수
    function upIntro() {
        slidetitleInto.current!.style.height = window.innerWidth > 650 ? "70vh" : "50vh";
        slidetitleInto.current!.style.paddingTop = "4.4rem";
    }

    useEffect(() => {
        // Intro 텍스트 순차적 slide 처리
        setTimeout(() => {
            window.scrollTo(0, 0);
            setShowIntro([true, false, false]); // Logo Slide
        }, 100);
        setTimeout(() => {
            setShowIntro([true, true, false]); // "더 빠르게! 더 간편하게!" Slide
        }, 500);
        setTimeout(() => {
            setShowIntro([true, true, true]); // "키오스크를 대신할 새로운 플랫폼" Slide
        }, 1000);
        setTimeout(() => {
            upIntro();
        }, 1700);
    }, []);

    return (
        <section className="slidetitleIntro" ref={slidetitleInto}>
            <img
                src="/fingerorder_background.png"
                alt="이미지"
                width={200}
                height={200}
                className={`slidetitleIntroImage ${showIntro[0] && "slidetitleShow1"}`}
            ></img>
            <div className="slidetitleIntroSub">
                <p className={`slidetitleIntroP ${showIntro[1] && "slidetitleShow2"}`}>
                    더 <span>빠르게!</span> 더 <span>간편하게!</span>
                </p>
                <h1 className={`slidetitleIntroH1 ${showIntro[2] && "slidetitleShow3"}`}>
                    키오스크를 대신할 새로운 <span>플랫폼</span>
                </h1>
            </div>
        </section>
    );
}
