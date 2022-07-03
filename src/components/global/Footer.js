import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
    position: relative;
    width: 100%;
    height: 200px;
    background: black;
    margin-top: 200px;
    @media (min-width: 800px) {
        height: 100px;
        margin-top: 160px;
        border-top: 1px solid #666;
    }
`;

const Footer = () => {
    return <FooterWrapper></FooterWrapper>;
};

export default Footer;
