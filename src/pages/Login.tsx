import { useState } from "react";
import "../styles/Login.scss";

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <section className="App login">
            <h2>Login</h2>
            <input
                id="id"
                type="email"
                placeholder="아이디를 입력해주세요"
                onChange={(e) => setId(e.target.value)}
                value={id}
            />
            <input
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button>로그인</button>
        </section>
    );
}

export default Login;
