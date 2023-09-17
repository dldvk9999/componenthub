import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import LoginSignup from "./components/dldvk9999/LoginSignup/LoginSignup";
import Header from "./components/dldvk9999/Header/Header";
import NotFound from "./pages/Notfound";
import mock from "./mock/components.json";
import { componentsType } from "./types/components";

export default function Router() {
    const [components] = useState<componentsType>(mock);
    const [customRoutes, setCustomRoutes] = useState<Array<JSX.Element>>([]);

    useEffect(() => {
        for (const maker in components) {
            for (const component in components[maker]) {
                import(`./components/${maker}/${component}/${component}`).then((comp) => {
                    const DynamicComponent = comp.default;
                    setCustomRoutes((routes) => [
                        ...routes,
                        <Route
                            path={`/${maker}/${component}`}
                            element={<DynamicComponent />}
                            key={components[maker][component].id}
                        />,
                    ]);
                });
            }
        }
    }, [components]);

    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    {customRoutes}
                    <Route path="/login" element={<LoginSignup />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
