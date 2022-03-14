import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ChevronRight from "../Icons/ChevronRight";
import aboutImg from "../../assets/imgs/about.bmp";
import "./style.scss";

const About = () => {
    const aboutRef = useRef();
    const q = gsap.utils.selector(aboutRef);
    const tl = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        gsap.to(q(".AboutCaption h2"), {
            scrollTrigger: {
                trigger: q(".AboutCaption h2"),
                start: "top bottom",
                end: "top center",
                scrub: 0.5,
            },
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
        });
        gsap.to(q(".AboutCaption button"), {
            scrollTrigger: {
                trigger: q(".AboutCaption button"),
                start: "top bottom",
                end: "top center",
                scrub: 0.5,
            },
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
        });
        gsap.to(q(".AboutCaption p"), {
            scrollTrigger: {
                trigger: q(".AboutCaption p"),
                start: "top bottom",
                end: "top center",
                scrub: 1,
            },
            y: 0,
            opacity: 1,
            scale: 1,
        });
        gsap.to(q(".AboutImage img"), {
            scrollTrigger: {
                trigger: q(".AboutImage"),
                start: "top bottom",
                end: "center center",
                scrub: 0.5,
            },
            opacity: 1,
            filter: "blur(0px)",
            x: 0,
        });
    }, []);

    return (
        <section className="About" ref={aboutRef}>
            <div className="AboutContent">
                <div className="AboutCaption">
                    <h2> At vero eos et accusam.</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum.
                    </p>
                    <button>
                        <ChevronRight />
                        More
                    </button>
                </div>
                <div className="AboutImage">
                    <img src={aboutImg} alt="Content" />
                </div>
            </div>
        </section>
    );
};

export default About;
