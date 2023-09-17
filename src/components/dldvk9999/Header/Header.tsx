import "./Header.scss";

export default function Header() {
    return (
        <header className="Header">
            <div className="HeaderLeft">
                <a href="/">Home</a>
            </div>
            <div className="HeaderRight">
                <a href="/login">Login</a>
            </div>
        </header>
    );
}
