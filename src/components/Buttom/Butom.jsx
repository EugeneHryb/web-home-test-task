import React from "react";
import styles from './style/Buttom.module.scss'

function Buttom(props){
    return(
        <div className={styles.wrapper}>
            <button className={styles.buttom} type={props.buttomTypes} onClick={props.buttomOnclick}>
                {props.content}
            </button>
        </div>
    )
}

export default Buttom