import React from "react";
import dateToString from "../../utils/dateToString"
import styles from "./style/Comment.module.scss"

function Comment(props){
    const updatedTo = new Date(props.updated_at);

    ;

    return(
        <li>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
            <span>Updated: {dateToString(updatedTo)}</span>
        </li>

    )
}

export default Comment