import { useState, useEffect } from "react";

export default function useScrollPosition() {
    function getScroll() {
        const data = document.getElementsByClassName("App")[0]
            ? document.getElementsByClassName("App")[0].getBoundingClientRect()
            : 0;
        const { bottom, top, left, right } = data;
        return { bottom, top, left, right };
    }

    const [scrollPosition, setScrollPosition] = useState(getScroll);

    useEffect(() => {
        window.scrollBy(0, 1);
        window.scrollBy(0, 0);
        function handleScroll() {
            setScrollPosition(getScroll());
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return scrollPosition;
}
