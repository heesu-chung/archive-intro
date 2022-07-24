import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { locState } from "../../App";

const OnScroll = () => {
    const setLocState = useSetRecoilState(locState);
    const onScroll = () => {
        setLocState(Math.floor(window.scrollY));
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return <></>;
};

export default OnScroll;
