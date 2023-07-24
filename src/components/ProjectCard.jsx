import { Col ,Button} from "react-bootstrap"


const ProjectCard = ({project}) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src ={project.imgUrl} alt="project-img" style={{width : '100%'}}/>
            </div>
            {/* <div className="proj-txtx">
                    <h4>{project.title}</h4>
                    <span>{project.description}</span>
            </div> */}
            
            
            <h4>{project.title}</h4>
            <span>{project.description}</span>

            <div className="codeButton">
                <button >Code</button>
                <button >Visit</button>
            </div>
        </Col>
    )
}

export default ProjectCard;