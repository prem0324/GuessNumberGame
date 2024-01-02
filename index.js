
const GuessNumber=[]
const form=document.querySelector('form');
let chance=10
const submit=document.querySelector('#submit')
function Chance(prev,chance){
       const previous= document.querySelector('#Prev')
       const Remain=document.querySelector('#Remain')
                const addText=document.createTextNode( prev +",")
            previous.appendChild(addText);
       Remain.innerHTML="Chance Remains : "+chance

}
form.addEventListener('submit',function(e) {

    e.preventDefault();
    const min=1;
    const max=100;
    const random=Math.floor(Math.random()*(max-min+1)+min);
    const number=Number(document.querySelector("#number").value);


    if(number<=0||number===''||isNaN(number)||number>100){
        const warn=document.querySelector('#warning');
        warn.innerHTML="Oho !! Please Enter A Valid Number"
        submit.style.display="none";

    }
    else{
    chance =chance-1;
    GuessNumber.push(number);
    Chance(number,chance);
        if(random===number){
            const warn=document.querySelector('#warning');
            warn.style.color="red"
            warn.innerHTML="Hurry !!! You Won The Game";
        }
        else if(chance===0){
            const warn=document.querySelector('#warning');
            warn.innerHTML="Oops!!! You Miss The Chance Refresh And Try Again";
            submit.style.display="none";
        }
    }
})