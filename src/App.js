import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import "./styles/common.scss";

// pages
import Thinker from "./pages/Thinker";
import KodeKat from "./pages/KodeKat";
import Archive from "./pages/Archive";
// components
import Navigation from "./components/global/Navigation";

const platformSize = {
    mobile: "800px",
    desktop: "2560px",
};

export const device = {
    mobile: `(max-width: ${platformSize.mobile})`,
    desktop: `(max-width: ${platformSize.desktop})`,
};

const AppWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 20000px;
    background: #fafafa;
`;

const MouseLoc = styled.span`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`;

function App() {
    const [loc, setLoc] = useState({
        clientX: 0,
        clientY: 0,
    });

    const checkScroll = (e) => {
        setLoc({
            clientX: e.pageX,
            clientY: e.pageY,
        });
    };
    const [scroll, setScroll] = useState(0);
    const onScroll = () => {
        setScroll(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return (
        <AppWrapper onClick={checkScroll}>
            <BrowserRouter>
                <MouseLoc style={{ top: "40px", left: "20px" }}>
                    client-x: {loc.clientX} px
                </MouseLoc>
                <MouseLoc style={{ top: "60px", left: "20px" }}>
                    client-y: {loc.clientY} px
                </MouseLoc>
                <MouseLoc style={{ top: "80px", left: "20px" }}>
                    client-y: {Math.floor(window.scrollY)} px
                </MouseLoc>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Thinker />} />
                    <Route
                        path="/thinker"
                        element={<Navigate replace to="/" />}
                    />
                    <Route path="/kodekat" element={<KodeKat />} />
                    <Route path="/archive" element={<Archive />} />
                </Routes>
            </BrowserRouter>
        </AppWrapper>
    );
}

export default App;
