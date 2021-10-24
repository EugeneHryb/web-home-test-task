import React from "react";
import textConverter from '../../utils/textConverter'
import styles from './style/PaginationButom.module.scss'

function PaginationButom(props){
    function goToPage(e){
        e.preventDefault();

        if(isNaN(props.getPage)){
            props.goToPage(props.getPage);
        }
        
    }

    return (
        <li className={styles.wraper +' ' + ((props.active) ? styles.active : '')} >
            <a href='#'
                className={styles.button}
                onClick = {goToPage} 
            >
                <span className = {styles.label}>
                    {(textConverter((props.label.toString())))}
                </span>
            </a>
            
        </li>
    )
}

export default PaginationButom