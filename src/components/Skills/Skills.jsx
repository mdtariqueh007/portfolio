import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card } from "react-bootstrap";

import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1200, min: 900 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 900, min: 0 },
        items: 1
    }
};

const Skills = () => {
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            {/* <p>Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p> */}
                            <Carousel responsive={responsive} infinite={true} autoPlay={true} className="skill-slider">
                                
                                    

                                <div className="item">
                                    <Card bg="dark" text="white" style={{ width: '22rem', height: '15rem'}}>
                                        <Card.Header style={{ fontSize: 30, fontWeight: '700' }}>Programming</Card.Header>
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text style={{ color: '#fff' }}>
                                                <div>C, C++</div>
                                                <div>Java</div>
                                                <div>JavaScript</div>
                                                <div>Object Oriented Programming (OOPS)</div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </div>
                                
                                <div className="item">
                                    <Card bg="dark" text="white" style={{ width: '22rem', height: '15rem' }}>
                                        <Card.Header style={{ fontSize: 30, fontWeight: '700' }}>Data Structures and Algorithms</Card.Header>
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text style={{ color: '#fff' }}>
                                                <div>Problem Solving</div>
                                                <div>Competetive Programming</div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </div>
                               
                                <div className="item">
                                    <Card bg="dark" text="white" style={{ width: '22rem', height: '15rem' }}>
                                        <Card.Header style={{ fontSize: 30, fontWeight: '700' }}>Web Developmet</Card.Header>
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text style={{ color: '#fff' }}>
                                                <div>HTML, CSS , JavaScript</div>
                                                <div>Node JS</div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </div>
                                
                                <div className="item">
                                    <Card bg="dark" text="white" style={{ width: '22rem', height: '15rem' }}>
                                        <Card.Header style={{ fontSize: 30, fontWeight: '700' }}>FrameWorks</Card.Header>
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text style={{ color: '#fff' }}>
                                                <div>React JS</div>
                                                <div>Express JS</div>
                                                <div>BootStrap</div>
                                                <div>Materail UI</div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

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

export default Skills;

