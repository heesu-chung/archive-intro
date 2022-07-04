import React from "react";
import styled from "styled-components";
import Blank from "../components/kodekat/Blank";
import KodeKatBrand from "../components/kodekat/KodeKatBrand";

// component
import KodeKatCrew from "../components/kodekat/KodeKatCrew";
import KodeKatFront from "../components/kodekat/KodeKatFront";
import KodeKatIntro from "../components/kodekat/KodeKatIntro";
import KodeKatModel from "../components/kodekat/KodeKatModel";
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
            <KodeKatCulture />
            <Blank mobile={100} web={400} />
            <KodeKatStory />
            <Blank mobile={50} web={200} />
            <KodeKatProduct />
            <KodeKatBrand />
            <KodeKatFin />
        </KodeKatWrapper>
    );
};

export default KodeKat;
