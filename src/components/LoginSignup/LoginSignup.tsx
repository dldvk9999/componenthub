import { useState } from "react";
import "./LoginSignup.scss";

function LoginSignup() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [nowState, setState] = useState<"Login" | "Signup">("Login");

    return (
        <section className="App LoginSignupContainer">
            <div className="LoginSignup">
                <div className="login">
                    {nowState === "Login" ? (
                        <>
                            <h2>Login</h2>
                            <input
                                id="email"
                                type="email"
                                placeholder="이메일을 입력해주세요"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                id="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <button>로그인</button>
                        </>
                    ) : (
                        <button onClick={() => setState("Login")}>로그인하기</button>
                    )}
                </div>
                <div className="singup">
                    {nowState === "Signup" ? (
                        <>
                            <h2>SignUp</h2>
                            <input
                                id="id"
                                type="email"
                                placeholder="이메일을 입력해주세요"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                id="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <input
                                id="password"
                                type="password"
                                placeholder="비밀번호를 다시 입력해주세요"
                                onChange={(e) => setPassword2(e.target.value)}
                                value={password2}
                            />
                            <button>회원가입</button>
                        </>
                    ) : (
                        <button onClick={() => setState("Signup")}>회원가입하기</button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default LoginSignup;
