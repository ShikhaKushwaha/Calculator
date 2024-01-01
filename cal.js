let btn = document.querySelectorAll("button");
let inputtag = document.querySelector("input");
console.log(btn);
console.log(inputtag);

let str ="";

btn.forEach(bt =>{
    bt.addEventListener("click", e =>
{
    if(e.target.innerHTML == "="){
        str = inputtag.value;
        inputtag.value = eval(str);
        console.log(str);

    }else if(e.target.innerHTML == "AC"){
        str ="";
        inputtag.value = str;
        console.log(str);
    }else{
        str+=e.target.innerHTML;
        inputtag.value=str;
        console.log(str);
    }
});
});