import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ChevronRight from "../Icons/ChevronRight";
import aboutImg from "../../assets/imgs/about.bmp";
import "./style.scss";

const About = () => {
    const aboutRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    const q = gsap.utils.selector(aboutRef);
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: q(".AboutContent p"),
            scrub: 1,
        },
    });

    useLayoutEffect(() => {
        tl.to(q(".AboutImage img"), {
            opacity: 1,
            filter: "blur(0px)",
            x: 0,
            duration: 0.85,
        })
            .to(
                q(".AboutCaption h2"),
                {
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.85,
                },
                "<"
            )
            .to(
                q(".AboutCaption p"),
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.85,
                },
                "<"
            )
            .to(
                q(".AboutCaption button"),
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.85,
                },
                "<"
            )
            .to(q(".AboutImage img"), {
                opacity: 0,
                filter: "blur(10px)",
                x: 200,
            })
            .to(
                q(".AboutCaption h2"),
                {
                    x: -200,
                    opacity: 0,
                    filter: "blur(10px)",
                },
                "<"
            )
            .to(
                q(".AboutCaption p"),
                {
                    y: 25,
                    opacity: 0,
                    scale: 0.9,
                },
                "<"
            )
            .to(
                q(".AboutCaption button"),
                {
                    y: 25,
                    opacity: 0,
                    filter: "blur(10px)",
                },
                "<"
            );
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
