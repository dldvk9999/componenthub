import { useState } from "react";
import "./LoginSignup.scss";

type LoginState = "Signin" | "Signup";

function LoginSignup() {
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [nowState, setState] = useState<LoginState>("Signin");
    const [validationState, setValidationState] = useState<boolean>(false);

    // state Change 함수
    const changeState = (state: LoginState) => {
        setState(state);
        setValidationState(false);
        setId("");
        setPassword("");
        setPassword2("");
    };

    // 입력값 validation Check
    const validationCheck = () => {
        if (nowState === "Signin") {
            if (!id || !password) {
                alert("아이디나 비밀번호를 입력하세요.");
                setValidationState(true);
            } else {
                alert("로그인 테스트 성공");
            }
        } else {
            if (!id || !password || !password2) {
                alert("아이디나 비밀번호를 입력하세요.");
                setValidationState(true);
            } else {
                alert("회원가입 테스트 성공");
            }
        }
    };

    return (
        <section className="LoginSignupContainer">
            <div className="LoginSignup">
                <div className={`signin ${nowState === "Signin" ? "" : "hidden"}`}>
                    <div>
                        <button onClick={() => changeState("Signin")}>로그인하기</button>
                        <div>
                            <h2>SignIn</h2>
                            <input
                                id="email"
                                type="email"
                                placeholder="아이디를 입력해주세요"
                                className={validationState && !id ? "error" : ""}
                                onChange={(e) => setId(e.target.value)}
                                value={id}
                            />
                            <input
                                id="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                className={validationState && !password ? "error" : ""}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <button onClick={validationCheck}>로그인</button>
                        </div>
                    </div>
                </div>
                <div className={`signup ${nowState === "Signup" ? "" : "hidden"}`}>
                    <div>
                        <div>
                            <h2>SignUp</h2>
                            <input
                                id="id"
                                type="email"
                                placeholder="아이디를 입력해주세요"
                                className={validationState && !id ? "error" : ""}
                                onChange={(e) => setId(e.target.value)}
                                value={id}
                            />
                            <input
                                id="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                className={validationState && !password ? "error" : ""}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <input
                                id="password"
                                type="password"
                                placeholder="비밀번호를 다시 입력해주세요"
                                className={validationState && !password2 ? "error" : ""}
                                onChange={(e) => setPassword2(e.target.value)}
                                value={password2}
                            />
                            <button onClick={validationCheck}>회원가입</button>
                        </div>
                        <button onClick={() => changeState("Signup")}>회원가입하기</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginSignup;
