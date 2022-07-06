import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import ArchiveDC from "../components/archive/ArchiveDC";
import ArchiveProgressBar from "../components/archive/ArchiveProgressBar";

import StartImg from "../components/archive/assets/start.jpg";
import Emo1 from "../components/archive/assets/emo1.png";
import Emo2 from "../components/archive/assets/emo2.jpg";
import Emo3 from "../components/archive/assets/emo3.jpg";
import Emo4 from "../components/archive/assets/emo4.jpg";
import Emo5 from "../components/archive/assets/emo5.png";
import ArchiveStart from "../components/archive/ArchiveStart";

import Mob1 from "../components/archive/assets/MobLayout1.jpg";
import Mob2 from "../components/archive/assets/MobLayout2.png";
import Mob3 from "../components/archive/assets/MobLayout3.jpg";
import ArchiveGraduate from "../components/archive/ArchiveGraduate";

import Service1 from "../components/archive/assets/Service1.jpg";
import Service2 from "../components/archive/assets/Service2.jpg";
import Service3 from "../components/archive/assets/Service3.jpg";
import Service4 from "../components/archive/assets/Service4.jpg";
import ArchiveService from "../components/archive/ArchiveService";

import Port1 from "../components/archive/assets/port1.jpg";
import Port2 from "../components/archive/assets/port2.jpg";
import ArchivePortfolio from "../components/archive/ArchivePortfolio";

import GL1 from "../components/archive/assets/opengl1.gif";
import GL2 from "../components/archive/assets/opengl2.gif";
import GL3 from "../components/archive/assets/opengl3.gif";
import GL4 from "../components/archive/assets/opengl4.gif";
import GL5 from "../components/archive/assets/opengl5.gif";
import GL6 from "../components/archive/assets/opengl6.gif";
import GL7 from "../components/archive/assets/opengl7.gif";
import GL8 from "../components/archive/assets/opengl8.gif";
import GL9 from "../components/archive/assets/opengl9.gif";
import GL10 from "../components/archive/assets/opengl10.gif";
import GL11 from "../components/archive/assets/opengl11.gif";
import {
    ArchiveGL1,
    ArchiveGL2,
    ArchiveGL3,
    ArchiveGL4,
    ArchiveGL5,
} from "../components/archive/ArchiveGL1";

import Art1 from "../components/archive/assets/art1.jpg";
import Art2 from "../components/archive/assets/art2.jpg";
import Art3 from "../components/archive/assets/art3.jpg";
import Art4 from "../components/archive/assets/art4.jpg";
import Art5 from "../components/archive/assets/art5.jpg";
import ArchiveArt from "../components/archive/ArchiveArt";
import Modal from "../components/modal/Modal";

const ArchiveWrapper = styled.div`
    width: 100%;
    overflow-x: hidden;
`;

const Blank = styled.div`
    width: 100%;
    height: ${(props) => props.mobile}px;
    @media (min-width: 800px) {
        height: ${(props) => props.web}px;
    }
`;

const ImgContainer = styled.div`
    width: 90%;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    @media (min-width: 800px) {
        width: 80%;

        display: flex;
        flex-direction: row;
    }
`;

const Img = styled.img`
    width: 50%;
    height: 100%;
    cursor: pointer;
    @media (min-width: 800px) {
        width: ${(props) => props.w}px;
        height: ${(props) => props.h}px;
        object-fit: cover;
    }
`;

export const modalActiveState = atom({
    key: "modalActiveState",
    default: false,
});
export const srcState = atom({
    key: "srcState",
    default: [],
});

const Archive = () => {
    const setSrcState = useSetRecoilState(srcState);
    const setActiveState = useSetRecoilState(modalActiveState);
    const modalActive = useRecoilValue(modalActiveState);

    const imgClick = (e) => {
        setSrcState(e.target.currentSrc);
        setActiveState(true);
        document.body.style.overflow = "hidden";
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <ArchiveWrapper>
                {modalActive && <Modal />}
                <ArchiveProgressBar />
                <Blank web={200} mobile={150} />
                <ImgContainer>
                    <Img src={StartImg} w="200" h="200" onClick={imgClick} />
                    <Img src={Emo1} w="200" h="200" onClick={imgClick} />
                    <Img src={Emo2} w="200" h="200" onClick={imgClick} />
                    <Img src={Emo3} w="200" h="200" onClick={imgClick} />
                    <Img src={Emo4} w="200" h="200" onClick={imgClick} />
                    <Img src={Emo5} w="200" h="200" onClick={imgClick} />
                </ImgContainer>
                <ArchiveStart />
                <Blank web={400} mobile={150} />
                <ArchiveDC />
                <Blank web={400} mobile={150} />
                <ImgContainer>
                    <Img src={Mob1} w="450" h="200" onClick={imgClick} />
                    <Img src={Mob2} w="400" h="200" onClick={imgClick} />
                    <Img src={Mob3} w="400" h="200" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGraduate />
                <Blank web={400} mobile={150} />
                <ImgContainer>
                    <Img src={Port1} w="550" h="300" onClick={imgClick} />
                    <Img src={Port2} w="550" h="300" onClick={imgClick} />
                </ImgContainer>
                <ArchivePortfolio />
                <Blank web={400} mobile={150} />
                <ImgContainer>
                    <Img src={Service1} w="400" h="200" onClick={imgClick} />
                    <Img src={Service3} w="400" h="200" onClick={imgClick} />
                    <Img src={Service2} w="400" h="200" onClick={imgClick} />
                    <Img src={Service4} w="400" h="200" onClick={imgClick} />
                </ImgContainer>
                <ArchiveService />
                <Blank web={400} mobile={150} />
                <ImgContainer>
                    <Img src={GL1} w="400" h="230" onClick={imgClick} />
                    <Img src={GL2} w="400" h="230" onClick={imgClick} />
                    <Img src={GL3} w="400" h="230" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGL1 />
                <Blank web={400} mobile={150} />
                <ImgContainer>
                    <Img src={GL4} w="800" h="350" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGL2 />
                <Blank web={400} mobile={150} />
                <ImgContainer>
                    <Img src={GL5} w="400" h="230" onClick={imgClick} />
                    <Img src={GL6} w="400" h="230" onClick={imgClick} />
                    <Img src={GL7} w="400" h="230" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGL3 />
                <Blank web={400} mobile={150} />
                <ImgContainer>
                    <Img src={GL8} w="800" h="350" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGL4 />
                <Blank web={400} mobile={150} />
                <ImgContainer>
                    <Img src={GL9} w="400" h="230" onClick={imgClick} />
                    <Img src={GL10} w="400" h="230" onClick={imgClick} />
                    <Img src={GL11} w="400" h="230" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGL5 />
                <Blank web={400} mobile={150} />
                <ImgContainer>
                    <Img src={Art1} w="400" h="230" onClick={imgClick} />
                    <Img src={Art2} w="400" h="230" onClick={imgClick} />
                    <Img src={Art3} w="400" h="230" onClick={imgClick} />
                    <Img src={Art4} w="400" h="230" onClick={imgClick} />
                    <Img src={Art5} w="400" h="230" onClick={imgClick} />
                </ImgContainer>
                <ArchiveArt />
            </ArchiveWrapper>
        </motion.div>
    );
};

export default Archive;
