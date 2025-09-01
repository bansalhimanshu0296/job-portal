import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
       // disable browser scroll restoration
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0,0);
    }, [pathname]);

  return null;
}

export default ScrollToTop
