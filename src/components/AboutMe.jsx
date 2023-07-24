import {Card, Col, Row} from "react-bootstrap";
import { styled } from "styled-components";

const Accom = styled(Card)`
  width : 16rem;
  height : 12rem;
  text-align : center;
  font-size : 20px;
  padding : 0 !important;
  width : auto;
  @media (max-width : 1000px){
    margin : 40px;
    
    font-size :18px;
  }
  @media (max-width : 600px){
    width : 350px;
  }
`
const AccomHeader = styled(Card.Header)`
  font-size : 40px;
  font-weight : 700;
`

const Container = styled(Col)`
  margin-left : 40px;
  margin-right : 40px;
  
  @media (max-width:900px){
    text-align:center;
  }
`

const AboutMe = () => {

    return(
      <Row>
        <Container lg = {3} md = {6} sm={9}>
        <Accom
          bg="dark" text="white"
        
        >
          <AccomHeader>470+</AccomHeader>
          <Card.Body>
            <Card.Text>
              LeetCode DSA Problems
            </Card.Text>
          </Card.Body>
        </Accom>
        </Container>
        <Container>
        <Accom
          bg="dark" text="white"
          
          className="mb-2"
        >
          <AccomHeader>1207</AccomHeader>
          <Card.Body>
            
            <Card.Text>
              Pupil Max. Rating on Codeforces
            </Card.Text>
          </Card.Body>
        </Accom>
        </Container>
        <Container lg = {3} md = {6} sm={10}>
        <Accom
          bg="dark" text="white"
          
          className="mb-2"
        >
          <AccomHeader>53</AccomHeader>
          <Card.Body>
            <Card.Text>
              Global Rank on Codechef November Long 2022 (Div 4)
            </Card.Text>
          </Card.Body>
        </Accom>
        </Container>
        <Container lg = {3} md = {6} sm={10}>
        <Accom
          bg="dark" text="white"
      
          className="mb-2"
        >
          <AccomHeader>Top 20</AccomHeader>
          <Card.Body>
            <Card.Text>
              On Coding Ninjas Campus Leaderboard
            </Card.Text>
          </Card.Body>
        </Accom>
        </Container>
        <Container lg = {3} md = {6} sm={10}>
        <Accom
          bg="dark" text="white"
      
          className="mb-2"
        >
          <AccomHeader>4+</AccomHeader>
          <Card.Body>
            <Card.Text>
              Projects Completed
            </Card.Text>
          </Card.Body>
        </Accom>
        </Container>

      </Row>
        
    )
    
    
}

export default AboutMe;