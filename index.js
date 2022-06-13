function capitalize(strr){
    return strr.charAt(0).toUpperCase()+strr.slice(1);
}

function reverse(strr) {
    return strr.reverse();
}

const calculator={
    add:(a,b)=>a+b,
    sub:(a,b)=>a-b,
    div:(a,b)=>a/b,
    mul:(a,b)=>a*b
};

function ceaser(strr){
    let newstr="";
    for(let i=0;i<strr.length;i++){
        
        if(strr.charCodeAt(i)!=122 && strr.charCodeAt(i)!=90){
            newstr+=String.fromCharCode(strr.charCodeAt(i)+1);
        }
        else if(strr.charCodeAt(i)==122){
            newstr+="a";
        }
        else if(strr.charCodeAt(i)==90){
            newstr+="A";
        }
    }
    return newstr;
}

