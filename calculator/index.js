let screen=document.getElementById('input');
let buttons=document.getElementsByTagName('button');

let screenValue='';

for(let button of buttons){
    button.addEventListener('click',(e)=>{
        let clickedButtonText=e.target.innerText;
        console.log(clickedButtonText);
        if(clickedButtonText=='X'){
            clickedButtonText='*';
            screenValue+=clickedButtonText;
            screen.value=screenValue;

        }else if(clickedButtonText=='='){
            screen.value=eval(screenValue);
            // screenValue=screen.value
            screenValue='';
        }else if(clickedButtonText=='C'){
            screenValue='';
            screen.value=screenValue;
        }else{
            screenValue+=clickedButtonText;
            screen.value=screenValue;
        }
        
    })
}