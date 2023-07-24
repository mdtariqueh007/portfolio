import { Col, Container,Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHtml5 ,faCss3Alt,faJs,faNodeJs,faReact,faJava} from "@fortawesome/free-brands-svg-icons";



    

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const Technologies = () =>{
    return(
        
        <section className="techs" id ="tech">
            <Container>
                <Row>
                    <Col>
                        <div className="tech-bx">
                            <h2>
                                Technologies
                            </h2>
                            <p>I've worked with a range of technologies including Front-end and Backend. I'm also a passionate coder who loves problem solving using DSA</p>
                            <Carousel responsive={responsive} infinite={true} autoPlay={true} className="tech-slider">
                                    <div>
                                        <h5>HTML</h5>
                                        <FontAwesomeIcon icon={faHtml5} style={{fontSize:100}}/>
                                    </div>
                                    <div>
                                        <h5>CSS</h5>
                                        <FontAwesomeIcon icon={faCss3Alt} style={{fontSize:100}}/>
                                    </div><div>
                                        <h5>JavaScript</h5>
                                        <FontAwesomeIcon icon={faJs} style={{fontSize:100}}/>
                                    </div>
                                    <div>
                                        <h5>Node Js</h5>
                                        <FontAwesomeIcon icon={faNodeJs} style={{fontSize:100}}/>
                                    </div>
                                    <div>
                                        <h5>React</h5>
                                        <FontAwesomeIcon icon={faReact} style={{fontSize:100}}/>
                                    </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="bg" className="background-img-left" />
        </section>
    )
}

export default Technologies;

