import { Col, Container, Row } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


import logo from "../assets/img/coollogo_com-3014111.png";

const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="/" ><img src={navIcon1} alt="icon"></img></a>
                            <a href="/" ><img src={navIcon2} alt="icon"></img></a>
                            <a href="/" ><img src={navIcon3} alt="icon"></img></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;