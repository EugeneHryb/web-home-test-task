export async function getFetch(url){
    try {
        const  response = await fetch(url);
        const data = await response.json(); 
        return {
            data,
            response
        }
    }  
    catch(eror){
        return {
            eror
        }
    }
}


