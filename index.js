
// const GuessNumber=[]
const min=1;
const max=100;
const random=Math.floor(Math.random()*(max-min+1)+min);

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
    const number=Number(document.querySelector("#number").value);

console.log(number);

    if(number<=0||number===''||isNaN(number)||number>100){
        const warn=document.querySelector('#warning');
        warn.innerHTML="Oho !! Please Enter A Valid Number";
        // submit.style.display="none";

    }
    else{
    chance =chance-1;
    // GuessNumber.push(number);
    Chance(number,chance);
        if(random===number){
            const warn=document.querySelector('#warning');
            warn.style.color="green"
            warn.innerHTML="Hurry !!! You Won The Game";
            submit.style.display="none";

        }
        else if(chance===0){
            const warn=document.querySelector('#warning');
            warn.style.color="red"
            warn.innerHTML="Oops!!! You Miss The Chance Refresh And Try Again The Actual Number Is :"+random;
            submit.style.display="none";
        }
    }
})