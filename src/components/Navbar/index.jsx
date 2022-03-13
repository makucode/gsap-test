import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./style.scss";

const Navbar = () => {
    const [menuHover, setMenuHover] = useState(true);

    const navbarRef = useRef();
    const q = gsap.utils.selector(navbarRef);
    const tl = useRef();

    useEffect(() => {
        gsap.to(q(".NavbarToggle"), { opacity: 1, duration: 0.25, delay: 2 });

        tl.current = gsap.timeline().to(q(".NavbarMenu"), {
            opacity: 1,
            pointerEvents: "all",
            filter: "blur(0px)",
            delay: 0.2,
        });
    }, []);

    useEffect(() => {
        tl.current.reversed(menuHover);
        menuHover
            ? gsap.to(q(".NavbarToggle"), { scale: 1, filter: "blur(0px)" })
            : gsap.to(q(".NavbarToggle"), { scale: 0.8, filter: "blur(10px)" });
    }, [menuHover]);

    return (
        <nav className="Navbar" ref={navbarRef}>
            <div
                className="NavbarToggle"
                onMouseEnter={() => setMenuHover(false)}
            >
                Menu
            </div>
            <ul className="NavbarMenu" onMouseLeave={() => setMenuHover(true)}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
