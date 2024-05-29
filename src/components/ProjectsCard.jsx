import React from "react";

function ProjectsCard(props) {
    return (
        <div>
            <h3>{ props.title}</h3>
            <p>{props.text }</p>
            <img src={props.image} />
        </div>
    )
}

export default ProjectsCard;