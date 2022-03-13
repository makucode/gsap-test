import React from "react";
import ChevronRight from "../Icons/ChevronRight";
import aboutImg from "../../assets/imgs/about.bmp";
import "./style.scss";

const About = () => {
    return (
        <section className="About">
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
