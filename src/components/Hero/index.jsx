import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.scss";

const Hero = () => {
    const heroRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

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
        gsap.fromTo(
            q(".HeroCaption h1 .w1"),
            {
                scrollTrigger: {
                    trigger: q(".HeroCaption h1"),
                    scrub: 0.75,
                    start: "bottom center",
                },
                opacity: 1,
            },
            {
                scrollTrigger: {
                    trigger: q(".HeroCaption h1"),
                    scrub: 0.75,
                    start: "bottom center",
                },
                opacity: 0,
                y: -300,
            }
        );
        gsap.fromTo(
            q(".HeroCaption h1 .w2"),
            {
                scrollTrigger: {
                    trigger: q(".HeroCaption h1"),
                    scrub: 0.75,
                    start: "bottom center",
                },
                opacity: 1,
            },
            {
                scrollTrigger: {
                    trigger: q(".HeroCaption h1"),
                    scrub: 0.75,
                    start: "bottom center",
                },
                opacity: 0,
                y: -200,
            }
        );
    }, []);

    return (
        <section className="Hero" ref={heroRef}>
            <div className="HeroCaption">
                <h1>
                    <span className="w1">Lorem</span>{" "}
                    <span className="w2">Ipsum</span>
                    <span className="HeroCaptionDot"></span>
                </h1>
            </div>
        </section>
    );
};

export default Hero;
