import { Col, Container, Row ,Nav,Tab} from "react-bootstrap";

import ProjectCard from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";

import projImg1 from "../assets/img/project1ToDO.png";
import projImg2 from "../assets/img/proj2V2V.jpg";
import projImg3 from "../assets/img/project3.jpg";
import projImg4 from "../assets/img/project4.jpg";

const Projects = () => {

    const projects = [
        {
          title: "To Do List App",
          description: "Web Development",
          imgUrl: projImg1,
        },
        {
          title: "Analysis of Real World Traffic Data",
          description: "Vehicle to Vehicle Communication",
          imgUrl: projImg2,
        },
        {
            title: "RapidKart E-commerce website",
            description: "E Commerce",
            imgUrl: projImg3,
        },
        {
          title: "File Sharing Web App",
          description: "Design & Development",
          imgUrl: projImg4,
        }
      ];

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        {/* <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum LoremIpsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p> */}
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project,index)=>{
                                                return(
                                                    <ProjectCard project={project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img src={colorSharp2} alt="bgright" className="background-img-right" /> */}
        </section>
    )
}

export default Projects;