import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Router />);

reportWebVitals(console.log);
