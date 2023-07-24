
import { Overlay } from "react-bootstrap";
import { styled } from "styled-components";

const Text = styled('div')({
    fontSize : 25,
    justifyContent : 'left'
});

const Marks = styled('p')({
   
    margin : '40px 40px 0 40px',
    
    fontSize : 30
});
const MarksText =styled('p')({
    margin : '5px 40px 5px 40px',
    fontSize : 20
})
const Box = styled('div')({
    overflow : 'auto',
    display : 'flex',
    
});

const Box2 = styled('div')({
    display : 'flex',
    flexDirection : 'column'
});

const Academics = () => {
    return(
        <div>
        <Text>
            Alongside developing skills I also respect my college curriculum. <br/>Here are my Semester wise grades:
        </Text>
        <Box>
            <Box2><Marks>9.45</Marks><MarksText>Overall CGPA </MarksText></Box2>
            <Box2><Marks>9.21</Marks><MarksText>Sem 1 SGPA </MarksText></Box2>
            <Box2><Marks>9.5 </Marks><MarksText>Sem 2 SGPA</MarksText></Box2>
            <Box2><Marks>9.24</Marks><MarksText>Sem 3 SGPA </MarksText></Box2>
            <Box2><Marks>9.88</Marks><MarksText>Sem 4 SGPA</MarksText></Box2>
        
        
        
        
        
        </Box>
        </div>
    )
}

export default Academics;