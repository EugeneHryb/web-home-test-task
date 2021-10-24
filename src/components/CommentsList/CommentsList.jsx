import React, { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import PaginnationButom from '../PaginationButom/PaginationButom';
import Buttom from "../Buttom/Butom";
import styles from  './style/CommentsList.module.scss'; 
import API from "../../API/API";
import CommentForm from "../CommentForm/CommentForm";

function CommentsList(){

    const [thisPage, setThisPage] = useState('')
    const [activePage, setActivePage] = useState([]);
    const [coments, setComents] = useState([]);
    const [pageLinks, setPageLinks] = useState([]);
    const [loaderShowMore, setLoaderShowMore] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [nextPage, setNextPage] = useState('');


    function resetButton(data){
        if(data.last_page == data.current_page){
            setShowButton(false)
        }else{
            setShowButton(true)
        }
    }

    function resetPage(){
        updatePage(thisPage)
    }

    async function updatePage(url){
        try {
            setThisPage(url);

            const  response = await fetch(url, {
                method: 'get',
            });


            if(response.ok){
                const data = await response.json();

                setComents(data.data);
                setActivePage([data.current_page])
                setPageLinks(data.links);
                setNextPage(data.next_page_url);
                resetButton(data)
            }
            
        }  
        catch(eror){
            return {
                eror
            }
        }
    }

    async function showMore(){
        try {
            setLoaderShowMore(true);

            setThisPage(nextPage);

            const response = await fetch(nextPage,{
                method: 'get',
            })

            if(response.ok){
                const data = await response.json();

                setComents([...coments.concat(data.data)]);
                setNextPage(data.next_page_url);
                setActivePage([...activePage, data.current_page]);

                const newPageLink = data.links.map((element)=>{
                    for(let i=0; i<activePage.length; i++ ){
                        if(element.label == activePage[i]){
                            element.active = true;
                        }
                    }
                    return element
                })

                setPageLinks(newPageLink);
                resetButton(data)
                setLoaderShowMore(false);
            }
        }
        catch(eror) {
            console.log('showMore', eror)
        }
    }

   
    useEffect( ()=>{
        updatePage(API.firstPage);
    }, [])

    

    const listComents = coments.map((coment)=>{

        return(
            <Comment
                key = {coment.id} 
                name = {coment.name}
                text = {coment.text}
                created_at = {coment.created_at}
                updated_at = {coment.updated_at}

            >
            </Comment>
        )
    })

    const listPaginationButon = pageLinks.map((elem) =>{
        return (
            <PaginnationButom
                key = {elem.label}
                active = {elem.active}
                label = {elem.label}
                getPage = {elem.url}
                goToPage = {updatePage}
            ></PaginnationButom>
        )
    })

    const isShowButton = function(){
        if(loaderShowMore){
            return (<spam>
                Loading....
            </spam>)
        }else if(!loaderShowMore && showButton ){
            return(
                <Buttom 
                    buttomTypes = {'buttom'}
                    content = {'Show more'}
                    buttomOnclick = {showMore}
                ></Buttom>
            )
        }else {
            return ''
        }
    }

    return (
        <div className={styles.wraper}>

            <ul className={styles['coments-list']}>
                {listComents}
            </ul>

            <div className ={styles.more} >
                {isShowButton()}
            </div>

            <ul className={styles['pagination-list']}>
                {listPaginationButon}
            </ul>

            <CommentForm resetPage = {resetPage}/>
        </div>
    )
}

export default CommentsList