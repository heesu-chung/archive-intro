import React from "react";
import ArchiveContainer from "./ArchiveContainer";

const title = "This is Title";

// '. ' means next line
const content = "Thie is Content. this is secondline. this is third line!";

const ArchivePortfolio = () => {
    return <ArchiveContainer title={title} content={content} />;
};

export default ArchivePortfolio;
