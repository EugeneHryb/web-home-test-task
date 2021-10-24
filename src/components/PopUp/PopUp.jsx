import React from "react";
import styles from './styles/PopUp.module.scss';

function PopUp(props){
    return(
        <div className = {styles.bacground}>
            <div className = {styles.container}>
                <a href='#' className = {styles.close} onClick = {props.close}></a>
                <p className = {styles.message}>{props.message}</p>
            </div>
        </div>
    )
}

export default PopUp