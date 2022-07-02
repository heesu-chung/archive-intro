import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled, { css } from "styled-components";
import "./styles/common.scss";

// pages
import Thinker from "./pages/Thinker";
import KodeKat from "./pages/KodeKat";
import Archive from "./pages/Archive";
// components
import Navigation from "./components/global/Navigation";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const AppWrapper = styled.div`
    width: 100%;
    position: absolute;
    height: 20000px;
    background: #fafafa;

    ${(props) =>
        props.loc > 3600
            ? css`
                  transition: 2s all ease;
                  background: black;
              `
            : css`
                  transition: 2s all ease;
                  background: #fafafa;
              `}

    @media (min-width: 700px) {
        ${(props) =>
            props.loc > 7000
                ? css`
                      transition: 2s all ease;
                      background: black;
                  `
                : css`
                      transition: 2s all ease;
                      background: #fafafa;
                  `}
    }
`;

const MouseLoc = styled.span`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
`;

export const locState = atom({
    key: "scrollState",
    default: [],
});

function App() {
    const [mouseLoc, setMouseLoc] = useState({
        x: 0,
        y: 0,
    });
    const setLocState = useSetRecoilState(locState);
    const loc = useRecoilValue(locState);

    const onScroll = () => {
        setLocState(Math.floor(window.scrollY));
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    const getLoc = (e) => {
        setMouseLoc({
            x: e.pageX,
            y: e.pageY,
        });
        console.log(mouseLoc, loc);
    };

    return (
        <AppWrapper onClick={getLoc} loc={loc}>
            <MouseLoc style={{ top: "40px", left: "20px", zIndex: 2000 }}>
                client-x: {mouseLoc.x} px
            </MouseLoc>
            <MouseLoc style={{ top: "60px", left: "20px", zIndex: 2000 }}>
                client-y: {mouseLoc.y} px
            </MouseLoc>
            <MouseLoc style={{ top: "80px", left: "20px", zIndex: 2000 }}>
                client-y: {loc} px
            </MouseLoc>
            <Navigation />
            <Routes>
                <Route path="/" element={<Thinker />} />
                <Route path="/thinker" element={<Navigate replace to="/" />} />
                <Route path="/kodekat" element={<KodeKat />} />
                <Route path="/archive" element={<Archive />} />
            </Routes>
        </AppWrapper>
    );
}

export default App;
