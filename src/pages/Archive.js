import React, { useState } from "react";
import styled, { css } from "styled-components";
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

import Interview1 from "../components/archive/assets/interview1.jpg";
import Interview2 from "../components/archive/assets/interview2.jpg";
import Interview3 from "../components/archive/assets/interview3.jpg";
import Interview4 from "../components/archive/assets/interview4.jpg";
import Interview5 from "../components/archive/assets/interview5.jpg";
import Interview6 from "../components/archive/assets/interview6.jpg";
import Interview7 from "../components/archive/assets/interview7.jpg";
import Interview8 from "../components/archive/assets/interview8.jpg";
import Interview9 from "../components/archive/assets/interview9.jpg";
import Interview10 from "../components/archive/assets/interview10.jpg";

import Mid1 from "../components/archive/assets/mid1.jpg";
import Mid2 from "../components/archive/assets/mid2.jpg";
import Mid3 from "../components/archive/assets/mid3.jpg";
import Mid4 from "../components/archive/assets/mid4.jpg";
import Mid5 from "../components/archive/assets/mid5.jpg";
import Mid6 from "../components/archive/assets/mid6.jpg";
import Mid7 from "../components/archive/assets/mid7.jpg";
import Mid8 from "../components/archive/assets/mid8.jpg";
import Mid9 from "../components/archive/assets/mid9.jpg";
import Mid10 from "../components/archive/assets/mid10.jpg";

import Proto1 from "../components/archive/assets/0001.jpg";
import Proto2 from "../components/archive/assets/0002.jpg";
import Proto3 from "../components/archive/assets/0003.jpg";
import Proto4 from "../components/archive/assets/0004.jpg";
import Proto5 from "../components/archive/assets/0005.jpg";

import Client1 from "../components/archive/assets/client01.png";
import Client2 from "../components/archive/assets/client02.png";
import Client3 from "../components/archive/assets/client03.png";
import Client4 from "../components/archive/assets/client04.png";
import Client5 from "../components/archive/assets/client05.jpg";
import Client6 from "../components/archive/assets/client06.png";
import Client7 from "../components/archive/assets/client07.jpg";
import Client8 from "../components/archive/assets/client08.png";
import Client9 from "../components/archive/assets/client09.png";
import Client10 from "../components/archive/assets/client10.png";
import Client12 from "../components/archive/assets/client12.png";
import Client11 from "../components/archive/assets/client11.gif";

import Art1 from "../components/archive/assets/art1.jpg";
import Art2 from "../components/archive/assets/art2.jpg";
import Art3 from "../components/archive/assets/art3.jpg";
import Art4 from "../components/archive/assets/art4.jpg";
import Art5 from "../components/archive/assets/art5.jpg";

import Gif1 from "../components/archive/assets/gif1.gif";
import Gif2 from "../components/archive/assets/gif2.gif";
import Gif3 from "../components/archive/assets/gif3.gif";
import Gif4 from "../components/archive/assets/gif4.gif";
import Gif5 from "../components/archive/assets/gif5.gif";

import ArchiveArt from "../components/archive/ArchiveArt";
import Modal from "../components/modal/Modal";
import ArchiveMoyang from "../components/archive/ArchiveMoyang";
import ArchiveClient from "../components/archive/ArchiveClient";

const ArchiveWrapper = styled.div`
    width: 90%;
    overflow-x: hidden;
    @media (min-width: 800px) {
        width: 100%;
    }
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
        display: grid;

        ${(props) =>
            props.item === 1 &&
            css`
                /* width: 40%; */
                grid-template-columns: 100%;
            `}
        ${(props) =>
            props.item === 2 &&
            css`
                grid-template-columns: 50% 50%;
            `}
        ${(props) =>
            props.item === 3 &&
            css`
                grid-template-columns: 33% 33% 33%;
            `}
        ${(props) =>
            props.item === 4 &&
            css`
                grid-template-columns: 25% 25% 25% 25%;
            `}
        ${(props) =>
            props.item === 5 &&
            css`
                grid-template-columns: 20% 20% 20% 20% 20%;
            `}
        ${(props) =>
            props.item === 6 &&
            css`
                grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
            `}
        ${(props) =>
            props.item === 10 &&
            css`
                grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
            `}
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    @media (min-width: 800px) {
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
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const imgClick = (e) => {
        setSrcState(e.target.currentSrc);
        setActiveState(true);
        setWidth(e.target.clientWidth);
        setHeight(e.target.clientHeight);
        document.body.style.overflow = "hidden";
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <ArchiveWrapper>
                {modalActive && <Modal width={width} height={height} />}
                <ArchiveProgressBar />
                <Blank web={150} mobile={150} />
                <ImgContainer item={6}>
                    <Img src={StartImg} w="200" h="200" onClick={imgClick} />
                    <Img src={Emo1} w="200" h="200" onClick={imgClick} />
                    <Img src={Emo2} w="200" h="200" onClick={imgClick} />
                    <Img src={Emo3} w="200" h="200" onClick={imgClick} />
                    <Img src={Emo4} w="200" h="200" onClick={imgClick} />
                    <Img src={Emo5} w="200" h="200" onClick={imgClick} />
                </ImgContainer>
                <ArchiveStart />
                <Blank web={400} mobile={150} />
                <ImgContainer item={3}>
                    <Img src={GL1} w="400" h="230" onClick={imgClick} />
                    <Img src={GL2} w="400" h="230" onClick={imgClick} />
                    <Img src={GL3} w="400" h="230" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGL1 />
                <Blank web={400} mobile={150} />
                <ImgContainer item={1}>
                    <Img src={GL4} w="600" h="500" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGL2 />
                <Blank web={400} mobile={150} />
                <ImgContainer item={3}>
                    <Img src={GL5} w="400" h="230" onClick={imgClick} />
                    <Img src={GL6} w="400" h="230" onClick={imgClick} />
                    <Img src={GL7} w="400" h="230" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGL3 />
                <Blank web={400} mobile={150} />
                <ImgContainer item={1}>
                    <Img src={GL8} w="800" h="500" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGL4 />
                <Blank web={400} mobile={150} />
                <ImgContainer item={3}>
                    <Img src={GL9} w="400" h="230" onClick={imgClick} />
                    <Img src={GL10} w="400" h="230" onClick={imgClick} />
                    <Img src={GL11} w="400" h="230" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGL5 />
                <Blank web={400} mobile={150} />
                <ArchiveDC />
                <Blank web={400} mobile={150} />
                <ImgContainer item={3}>
                    <Img src={Mob1} w="450" h="200" onClick={imgClick} />
                    <Img src={Mob2} w="400" h="200" onClick={imgClick} />
                    <Img src={Mob3} w="400" h="200" onClick={imgClick} />
                </ImgContainer>
                <ImgContainer style={{ marginTop: "10px" }} item={2}>
                    <Img src={Port1} w="550" h="300" onClick={imgClick} />
                    <Img src={Port2} w="550" h="300" onClick={imgClick} />
                </ImgContainer>
                <ArchiveGraduate />
                <Blank web={400} mobile={150} />
                <ImgContainer item={10}>
                    <Img src={Interview1} w="120" h="160" onClick={imgClick} />
                    <Img src={Interview2} w="120" h="160" onClick={imgClick} />
                    <Img src={Interview3} w="120" h="160" onClick={imgClick} />
                    <Img src={Interview4} w="120" h="160" onClick={imgClick} />
                    <Img src={Interview5} w="120" h="160" onClick={imgClick} />
                    <Img src={Interview6} w="120" h="160" onClick={imgClick} />
                    <Img src={Interview7} w="120" h="160" onClick={imgClick} />
                    <Img src={Interview8} w="120" h="160" onClick={imgClick} />
                    <Img src={Interview9} w="120" h="160" onClick={imgClick} />
                    <Img src={Interview10} w="120" h="160" onClick={imgClick} />
                </ImgContainer>
                <ImgContainer item={5} style={{ margin: "10px auto" }}>
                    <Img src={Proto1} w="120" h="330" onClick={imgClick} />
                    <Img src={Proto2} w="120" h="330" onClick={imgClick} />
                    <Img src={Proto3} w="120" h="330" onClick={imgClick} />
                    <Img src={Proto4} w="120" h="330" onClick={imgClick} />
                    <Img src={Proto5} w="120" h="330" onClick={imgClick} />
                </ImgContainer>
                <ImgContainer item={6}>
                    <Img src={Mid1} w="120" h="110" onClick={imgClick} />
                    <Img src={Mid2} w="120" h="110" onClick={imgClick} />
                    <Img src={Mid3} w="120" h="110" onClick={imgClick} />
                    <Img src={Mid4} w="120" h="110" onClick={imgClick} />
                    <Img src={Mid5} w="120" h="110" onClick={imgClick} />
                    <Img src={Mid6} w="120" h="110" onClick={imgClick} />
                </ImgContainer>
                <ImgContainer item={4} style={{ margin: "10px auto" }}>
                    <Img src={Mid7} w="120" h="180" onClick={imgClick} />
                    <Img src={Mid8} w="120" h="180" onClick={imgClick} />
                    <Img src={Mid9} w="120" h="180" onClick={imgClick} />
                    <Img src={Mid10} w="120" h="180" onClick={imgClick} />
                </ImgContainer>
                <ImgContainer item={4}>
                    <Img src={Service1} w="300" h="150" onClick={imgClick} />
                    <Img src={Service3} w="300" h="150" onClick={imgClick} />
                    <Img src={Service2} w="300" h="150" onClick={imgClick} />
                    <Img src={Service4} w="300" h="150" onClick={imgClick} />
                </ImgContainer>
                <ArchiveService />
                <Blank web={400} mobile={150} />
                <ImgContainer item={5}>
                    <Img src={Client1} w="300" h="350" onClick={imgClick} />
                    <Img src={Client7} w="300" h="350" onClick={imgClick} />
                    <Img src={Client4} w="300" h="300" onClick={imgClick} />
                    <Img src={Client6} w="300" h="350" onClick={imgClick} />
                    <Img src={Client11} w="300" h="250" onClick={imgClick} />
                </ImgContainer>
                <ImgContainer item={5}>
                    <Img src={Client12} w="300" h="460" onClick={imgClick} />
                    <Img src={Client8} w="300" h="460" onClick={imgClick} />
                    <Img src={Client5} w="300" h="250" onClick={imgClick} />
                    <Img src={Client9} w="300" h="280" onClick={imgClick} />
                    <Img src={Client10} w="300" h="460" onClick={imgClick} />
                </ImgContainer>
                <ArchiveClient />
                <Blank web={400} mobile={150} />
                <ImgContainer item={5}>
                    <Img src={Art2} w="400" h="230" onClick={imgClick} />
                    <Img src={Art1} w="400" h="230" onClick={imgClick} />
                    <Img src={Art3} w="400" h="230" onClick={imgClick} />
                    <Img src={Art5} w="400" h="230" onClick={imgClick} />
                    <Img src={Art4} w="400" h="230" onClick={imgClick} />
                </ImgContainer>
                <ArchiveArt />
                <Blank web={400} mobile={150} />
                <ImgContainer item={5}>
                    <Img src={Gif2} w="300" h="220" onClick={imgClick} />
                    <Img src={Gif1} w="300" h="220" onClick={imgClick} />
                    <Img src={Gif3} w="300" h="220" onClick={imgClick} />
                    <Img src={Gif5} w="300" h="220" onClick={imgClick} />
                    <Img src={Gif4} w="300" h="220" onClick={imgClick} />
                </ImgContainer>
                <ArchiveMoyang />
            </ArchiveWrapper>
        </motion.div>
    );
};

export default Archive;
