import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Thinker from "../../pages/Thinker";
import KodeKat from "../../pages/KodeKat";
import Archive from "../../pages/Archive";

const PageTransition = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Thinker />} />
                <Route path="/thinker" element={<Navigate replace to="/" />} />
                <Route path="/kodekat" element={<KodeKat />} />
                <Route path="/archive" element={<Archive />} />
            </Routes>
        </AnimatePresence>
    );
};

export default PageTransition;
