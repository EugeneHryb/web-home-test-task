import { conditionalExpression } from "@babel/types";

function dateToString(date){
    function monthNumber(num){
        num = num+1;

        if(num<10){
            return ('0'+num)
        }else{
            return num.toString(); 
        }
    }

    return `${date.getDate()}.${monthNumber(date.getMonth())}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    
}

export default dateToString