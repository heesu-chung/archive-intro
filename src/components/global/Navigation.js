import React from "react-router-dom";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../../styles/common.scss";
import { useState } from "react";

const NavWrapper = styled.div`
    width: 25%;
    height: 45px;
    position: fixed;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;

    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;

    @media (max-width: 800px) {
        /* display: none; */
        width: 90%;
        margin: 0 auto;
    }

    .transition {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: black;
    }

    .menu {
        text-align: center;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        transition: 0.5s all ease;
        cursor: pointer;
        color: black;
        &:hover {
            color: var(--point-color);
        }
        .link {
        }
    }
`;

const TransitionWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
    background: white;
    z-index: 500;
`;

const Navigation = () => {
    let navigate = useNavigate();
    const [transition, setTransition] = useState(false);

    const clickPage = (pageIdx) => {
        setTimeout(() => {
            setTransition(true);
            document.body.style.overflow = "hidden";
            window.scrollTo(0, 0);
            navigate(`/${pageIdx}`);
            document.body.style.overflow = "unset";
        }, 200);
        setTimeout(() => {
            setTransition(false);
        }, 1000);
    };

    return (
        <>
            {transition && <TransitionWrapper />}
            <NavWrapper>
                <span
                    className="thinker menu"
                    onClick={() => clickPage("thinker")}
                >
                    Moyang
                </span>
                <span
                    className="kode-kat menu"
                    onClick={() => clickPage("kodekat")}
                >
                    Kode Kat
                </span>
                <span
                    className="archive menu"
                    onClick={() => clickPage("archive")}
                >
                    Archive
                </span>
            </NavWrapper>
        </>
    );
};

export default Navigation;
