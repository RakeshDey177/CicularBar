let nu=document.getElementsByClassName("number")[0];
let counter =0;
setInterval(()=>{
    if(counter==65){
        clearInterval();
    }
    else{
        counter=counter+1;
        nu.innerText=counter +" % "; 
    }
    
},35)