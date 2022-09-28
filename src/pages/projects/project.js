import { Modal } from "@mui/material";
import react, {useState} from "react";
import Input from "../../components/input";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import "./projects.css";

const Project = (props) => {
    const [showModal,setShowModal] = useState(false);
    const renderButton = () => {
        return (
            <div>
                <div>
                    <button className="product-page-link" onClick={() => setShowModal(true)}>
                        {props.info.title}
                    </button>
                </div>
            </div>
        )
    }
    const renderModal = () => {
        return (
            <Modal open={showModal} keepMounted style={{display:"flex",justifyContent:"center",alignItems:"center"}} onClose={() => setShowModal(false)}>
                <div className="project-me-page-modal">
                    <div>
                        <h1>{props.info.title}</h1>
                        <p>{props.info.bio}</p>
                    </div>
                    
                    <div className="project-info-icons">
                        <GitHubIcon style={{fontSize:"50px", cursor:"pointer"}} onClick={() => {window.open(props.info.github)}}/>
                        <LinkIcon  style={{fontSize:"50px", cursor:"pointer"}} onClick={() => {window.open(props.info.link)}}/>
                    </div>
                    
                </div>
            </Modal>
        )
        
    }
    return (
        <>
            {renderButton()}
            {renderModal()}
        </>
        
    )
}

export default Project;