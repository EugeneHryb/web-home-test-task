import React from "react";
import dateToString from "../../utils/dateToString"
import styles from "./style/Comment.module.scss"

function Comment(props){
    const updatedTo = new Date(props.updated_at);

    ;

    return(
        <li className= {styles.container}>
            <h3 className = {styles.name} >{props.name}</h3>
            <p className = {styles.comment} >{props.text}</p>
            <span className = {styles.date} >Updated: {dateToString(updatedTo)}</span>
        </li>

    )
}

export default Comment