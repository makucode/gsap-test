import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./style.scss";

const Hero = () => {
    const heroRef = useRef();
    const q = gsap.utils.selector(heroRef);
    const tl = useRef();

    useLayoutEffect(() => {
        tl.current = gsap
            .timeline()
            .to(q(".HeroCaption h1"), { translateY: "0px", opacity: 1 })
            .to(q(".HeroCaption h1 span"), {
                translateY: "0px",
                opacity: 1,
                delay: 0.25,
            });
    }, []);

    /*     useEffect(() => {
        // IF SCROLLTOP > window.innerHeight / 2
        tl.current.reversed(true);
        // IF SCROLLTOP < window.innerHeight / 2
        tl.current.reversed(false);
    }, []); */

    return (
        <section className="Hero" ref={heroRef}>
            <div className="HeroCaption">
                <h1>
                    Lorem Ipsum<span className="HeroCaptionDot"></span>
                </h1>
            </div>
        </section>
    );
};

export default Hero;
