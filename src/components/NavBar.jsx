import { useState,useEffect } from "react";

import { Navbar,Container,Nav, Row } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import myLogo from "../assets/img/coollogo_com-3014111.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/git-new.svg";

const NavBar = () => {

    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdtaeActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled?"scrolled":""}>
        <Container>
            <Navbar.Brand href="#home">
                <Row>
                    <img src={myLogo} alt='Logo'/>
                </Row>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdtaeActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdtaeActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>onUpdtaeActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#tech" className={activeLink==='tech'?'active navbar-link':'navbar-link'} onClick={()=>onUpdtaeActiveLink('tech')}>Technologies</Nav.Link>
                <Nav.Link href="#about" className={activeLink==='about'?'active navbar-link':'navbar-link'} onClick={()=>onUpdtaeActiveLink('about')}>About Me</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/md-tarique-hussain-4a13a0239/" target="blank"><img src={navIcon1} alt="navIcon1"/></a>
                    <a href="/#"><img src={navIcon2} alt="navIcon2"/></a>
                    <a href="https://github.com/mdtariqueh007" target="blank"><img src={navIcon3} alt="navIcon3" style={{width : '%'}} /></a>
                </div>
                <button className="vvd" onClick={()=>console.log('connect')}><span>Let's connect</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar;