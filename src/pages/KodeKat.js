import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Blank from "../components/kodekat/Blank";
import KodeKatBrand from "../components/kodekat/KodeKatBrand";

// component
import KodeKatCrew from "../components/kodekat/KodeKatCrew";
import KodeKatFront from "../components/kodekat/KodeKatFront";
import KodeKatIntro from "../components/kodekat/KodeKatIntro";
import KodeKatOverview from "../components/kodekat/KodeKatOverview";
import KodeKatProduct from "../components/kodekat/KodeKatProduct";
import KodeKatStory from "../components/kodekat/KodeKatStory";
import KodeKatTheme from "../components/kodekat/KodeKatTheme";
import KodeKatFin from "../components/kodekat/KodeKatFin";
import KodeKatCulture from "../components/kodekat/KodeKatCulture";

const KodeKatWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    background: black;
    overflow: hidden;
`;

const KodeKat = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <KodeKatWrapper>
                <KodeKatFront />
                <KodeKatIntro />
                <KodeKatOverview />
                <Blank mobile={50} web={200} />
                <KodeKatTheme />
                <Blank mobile={50} web={200} />
                <KodeKatCrew />
                <Blank mobile={50} web={200} />
                <Blank mobile={50} web={200} />
                {/* <KodeKatModel /> */}
                <KodeKatStory />
                <Blank mobile={50} web={300} />
                <KodeKatCulture />
                <Blank mobile={100} web={400} />
                <KodeKatProduct />
                <KodeKatBrand />
                <KodeKatFin />
            </KodeKatWrapper>
        </motion.div>
    );
};

export default KodeKat;
