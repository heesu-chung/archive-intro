import React from "react";
import styled from "styled-components";
import Puzzle from "./assets/Puzzle.jpg";

// assets
import P1 from "./assets/p1.jpg";
import P2 from "./assets/p2.jpg";
import P3 from "./assets/p3.jpg";
import P4 from "./assets/p4.jpg";

const ProductWrapper = styled.div`
    width: 100%;
    position: relative;
    background: black;
    @media (min-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

const PageSmooth = styled.div`
    width: 100%;
    height: 200px;
    margin-top: -200px;
    position: relative;
    background: linear-gradient(to bottom, black, #212121);

    @media (min-width: 800px) {
        height: 400px;
    }
`;

const ProductMainImg = styled.img`
    width: 100%;
`;

const ProductItems = styled.div`
    position: relative;
    @media (max-width: 800px) {
        width: 105%;
        transform: translateX(-53%);
    }
    @media (min-width: 800px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        /* transform: translateX(-14%); */
    }
`;

const ProductItemGroup = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;

const ProductItem = styled.img`
    width: 100%;
    flex: 1;
`;

const KodeKatProduct = () => {
    return (
        <ProductWrapper>
            <PageSmooth />
            <ProductMainImg src={Puzzle} alt="" />

            <ProductItems style={{ margin: "200px 0" }}>
                <ProductItemGroup style={{ flex: 3 }}>
                    <ProductItem src={P4} alt="" />
                </ProductItemGroup>
                <ProductItemGroup style={{ flex: 1 }}>
                    <ProductItem src={P1} alt="" />
                    <ProductItem src={P2} alt="" />
                    <ProductItem src={P3} alt="" />
                </ProductItemGroup>
            </ProductItems>
        </ProductWrapper>
    );
};

export default KodeKatProduct;
