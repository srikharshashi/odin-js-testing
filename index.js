export function capitalize(strr){
    return strr.charAt(0).toUpperCase()+strr.slice(1);
}

export function reverse(strr) {
    return strr.reverse();
}

export const calculator={
    add:(a,b)=>a+b,
    sub:(a,b)=>a-b,
    div:(a,b)=>a/b,
    mul:(a,b)=>a*b
};

export function ceaser(strr){
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
        else{
            newstr+=strr.charAt(i);
        }
    }
    return newstr;
}


export function analyzeArr(arr) {
    let max=arr[0];
    let min=arr[0];
    let avg=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        else if(arr[i]<min){
            min=arr[i];
        }
        avg+=arr[i];
    }
    
    return {
        average:avg,
        min:min,
        max:max,
        length:arr.length
    }
}
