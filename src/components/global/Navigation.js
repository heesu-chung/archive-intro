import React from "react-router-dom";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../../styles/common.scss";

const NavWrapper = styled.div`
    width: 25%;
    height: 45px;
    position: fixed;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30000;

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

const Navigation = () => {
    let navigate = useNavigate();

    const clickPage = (pageIdx) => {
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            navigate(`/${pageIdx}`);
            document.body.style.overflow = "unset";
        }, 1000);
    };

    return (
        <>
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
