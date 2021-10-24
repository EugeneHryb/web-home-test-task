import {React, useState} from "react";
import Buttom from "../Buttom/Butom";
import PopUp from "../PopUp/PopUp";
import API from '../../API/API'
import styles from './style/CommentForm.module.scss'

function CommentForm(props){

    const [comment, setComment] = useState({name: '',text: '' });
    const [validateMessage, setValidateMessage] = useState({name: false, text: false});
    const [showMesage, setShowMesage] = useState(false);

    function closeMesage(){
        setShowMesage(false);
    }




    async function formHangler(e){
        try{
            e.preventDefault()

            function hideNameValidate(){
                setValidateMessage({...validateMessage, name: false});
            }

            function hideTextValidate(){
                setValidateMessage({...validateMessage, text: false});
            }

            function closePopUp(){
                setShowMesage(false)
            }

            if(comment.name.length<3){
                setValidateMessage({...validateMessage, name: true});
                setTimeout(hideNameValidate, 4000)
            }else if(comment.text.length<3){
                setValidateMessage({...validateMessage, text: true});
                setTimeout(hideTextValidate, 4000)
            }else{
                const response = await fetch(API.sendComments, {
                    method: 'post',
                    body: JSON.stringify(comment),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })

                const answer = await response.json();

                if(response.ok){
                    console.log('reset',comment)                   
                    props.resetPage();
                    setComment({name: '',text: '' });
                    setShowMesage(true);
                    setTimeout(closePopUp, 10000)

                    
                }

            }
        }
        catch(e){
            console.log(e);
        }


        
    }

    const popUp = <PopUp
            message = {'Comment posted'}
            close = {closeMesage}
        />

    return(
        <form onSubmit = {formHangler}>
            <div className={styles.wrapper}>
                <input
                    type='text'
                    name='yourName'
                    placeholder = 'Your name'
                    onChange = {(e)=>setComment({...comment, name: e.target.value})}
                    value = {comment.name}
                />
                {(validateMessage.name)?<span>There must be at least two letters.</span>:''}
            </div>
            <div className = {styles.wrapper}>
                <textarea
                    type='text'
                    name='comment'
                    placeholder = 'Write your comment'
                    onChange = {(e)=>setComment({...comment, text: e.target.value})}
                    value = {comment.text}
                >
                </textarea>
                {(validateMessage.text)?<span>There must be at least four letters.</span>:''}
            </div>
            
            <Buttom buttomTypes = {'submit'} buttomOnclick = {formHangler} content={'Submit'}/>

            {showMesage ? popUp : ''}

        </form>
    )
}

export default CommentForm