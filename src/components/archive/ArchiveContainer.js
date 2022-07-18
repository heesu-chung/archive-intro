import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
    width: 100%;
`;

const DescContainer = styled.div`
    .title {
        letter-spacing: 0.5px;
        font-weight: 700;
        font-size: 22px;
        margin: 20px 0;
        @media (max-width: 800px) {
            text-align: left;
            margin-top: 40px;
        }
    }

    @media (min-width: 800px) {
        margin-left: 25%;
        .title {
            font-size: 25px;
            margin: 30px 0;
        }
        .content {
        }
    }
`;

const Desc = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: #444;
    margin: 5px 0;
    @media (max-width: 800px) {
        /* text-align: left; */
        display: none;
    }
    @media (min-width: 800px) {
        margin-left: 1%;
    }
`;

const DescMobile = styled.span`
    font-size: 16px;
    font-weight: 300;
    color: #444;
    /* margin: 10px 5px; */
    text-align: left;
    @media (min-width: 800px) {
        display: none;
    }
`;

const DescMobileTitle = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: #444;
    margin: 10px 0;
    text-align: left;
    @media (min-width: 800px) {
        display: none;
    }
`;

const ArchiveContainer = ({ title, content }) => {
    const newContent = content !== undefined ? content.split(". ") : [""];
    const mobileContent = content !== undefined ? content.split(".") : [""];
    const titleMobileContent = mobileContent.slice(0, 2);
    const newMobileContent = mobileContent.slice(2).join(" ");

    return (
        <ContainerWrapper>
            <DescContainer>
                <p className="title">{title}</p>
                <div className="content">
                    {[...newContent].map((el, idx) => (
                        <Desc key={idx}>{el}</Desc>
                    ))}
                    {[...titleMobileContent].map((el, idx) => (
                        <DescMobileTitle key={idx}>{el}</DescMobileTitle>
                    ))}
                    {[...newMobileContent].map((el, idx) => (
                        <DescMobile key={idx}>{el}</DescMobile>
                    ))}
                </div>
            </DescContainer>
        </ContainerWrapper>
    );
};

export default ArchiveContainer;
