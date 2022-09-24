import { Modal } from "@mui/material";
import react, {useState} from "react";
import Input from "../../components/input";
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
                    <h1>{props.info.title}</h1>
                    <p>{props.info.bio}</p>
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