let ham=document.getElementById("ham")
let aa=document.getElementById("aa")
isShow=false;
ham.addEventListener("click",()=>{
    isShow?hide():show()
})

function show(){
    isShow=true;
    aa.style.display="block"
}

function hide(){
    isShow=false;
    aa.style.display="none"
}