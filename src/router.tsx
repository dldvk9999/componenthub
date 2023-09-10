import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import Header from "./components/Header/Header";
import NotFound from "./pages/Notfound";

export default function Router() {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginSignup />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
