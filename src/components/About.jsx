import AboutMe from "./AboutMe";
import { styled } from "styled-components";
import Academics from "./Academics";

const Heading = styled('h5')({
    fontSize : 60
})
    


const About = () => {
    return (
        <section className="about" id="about">
            <Heading>About Me</Heading>
            <hr />
            <div>
                <h3>Academics</h3>
                <Academics />
            </div>
            <div>
                <br />
                <h3>Personal Accomplishments</h3>
            <AboutMe/>

            </div>
        </section>
    )
}

export default About;