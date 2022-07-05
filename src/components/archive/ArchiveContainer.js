import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
    width: 100%;
`;

const DescContainer = styled.div`
    .title {
        letter-spacing: 0.5px;
        font-weight: 500;
        font-size: 18px;
        margin: 20px 0;
        @media (max-width: 800px) {
            text-align: center;
        }
    }

    @media (min-width: 800px) {
        margin-left: 25%;
        .title {
            font-size: 25px;
            margin: 30px 0;
        }
    }
`;

const Desc = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: #999;
    @media (max-width: 800px) {
        text-align: center;
    }
    @media (min-width: 800px) {
        margin-left: 1%;
    }
`;

const ArchiveContainer = ({ title, content }) => {
    const newContent = content !== undefined ? content.split(". ") : [""];

    return (
        <ContainerWrapper>
            <DescContainer>
                <p className="title">{title}</p>
                <div className="content">
                    {[...newContent].map((el, idx) => (
                        <Desc key={idx}>{el}</Desc>
                    ))}
                </div>
            </DescContainer>
        </ContainerWrapper>
    );
};

export default ArchiveContainer;
