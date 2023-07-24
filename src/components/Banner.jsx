import { useState,useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
    const [loopNo,setLoopNo] = useState(0);
    const [isDeleting,setDeleting] = useState(false);
    const toRoatae = ["Web Developer","Programmer","Learner"];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    const tick = () => {
        let i = loopNo%toRoatae.length;
        let fullText = toRoatae[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeleting && updatedText===fullText){
            setDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText===''){
            setDeleting(false);
            setLoopNo(loopNo+1);
            setDelta(500);
        }
    }

    useEffect(()=>{
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {clearInterval(ticker)};
    },[text]);

    

    return(
        <section className="banner" id = "home">
            <Container>
                <Row className="align-items-center"  style={{display:'flex'}}>
                    <Col xs={12} md={6} xl = {7}>
                        <span className="tagline">Welcome to my Personal Portfolio</span>
                        <h1>{'Hi, This is Tarique'}<br></br><span className="wrap">{text}</span></h1>
                        <p>I am a B.tech Pre-Final Year student in Information Technology from the Indian Institute of Engineering Science and Technology, Shibpur. I am passionate about technology, learning new things, and solving problems. I also love sharing my knowledge with others through my blogs.</p>
                        <button style={{background:"#000000"}} onClick={()=> console.log('connect')}>Download CV<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl = {5}>
                        <img src={headerImg} alt= "Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;