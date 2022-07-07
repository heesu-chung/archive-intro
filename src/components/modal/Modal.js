import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { modalActiveState, srcState } from "../../pages/Archive";

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.8;
    transition: 0.5s all ease-in-out;
    ${(props) =>
        props.active !== true &&
        css`
            display: none;
        `}
`;

const ImgWrapper = styled.div`
    position: fixed;
    z-index: 10001;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

const ImgZoomed = styled.img`
    @media (min-width: 800px) {
        width: 60%;
    }
`;

const Modal = () => {
    const active = useRecoilValue(modalActiveState);
    const src = useRecoilValue(srcState);

    const setSrcState = useSetRecoilState(srcState);
    const setActiveState = useSetRecoilState(modalActiveState);

    window.onkeydown = (e) => closeModal();

    const closeModal = () => {
        setSrcState("");
        setActiveState(!active);
        document.body.style.overflow = "unset";
    };
    return (
        <>
            <ModalWrapper active={active} />
            <ImgWrapper onClick={closeModal}>
                <div>
                    <ImgZoomed src={src} alt="" />
                </div>
            </ImgWrapper>
        </>
    );
};

export default Modal;
