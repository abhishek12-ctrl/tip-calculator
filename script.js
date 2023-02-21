const bill = document.getElementById("billamt")
const tip = document.getElementById("tip_amt")
const people = document.getElementById("people")
const calcButton = document.getElementById("calculate")
const tipAmount = document.getElementById("tipamt")
const totalAmount = document.getElementById("totalamt")
const resetButton = document.getElementById("reset")
const tipButton = document.querySelectorAll("#btn")
const customButtom = document.getElementById("custom")

const billError = document.getElementById("billerr")
const tipError = document.getElementById("tiperr")
const peopleError = document.getElementById("peopleerr")

let billAmount = "";
let tipInput = "";
let numOfPeople = "";
var prevButton;

tip.style.setProperty('display','none');

tipButton.forEach((button)=>{

    button.addEventListener('click',(event)=>{

        tip.value = event.target.value;
        customButtom.style.display = "none"
        tip.style.removeProperty('display')
    })
})

customButtom.addEventListener('click',()=>{

    customButtom.style.display = "none"
    tip.style.removeProperty('display')

    tip.addEventListener('keyup',(event)=>{

        tipInput = event.target.value;
    })
})

calcButton.addEventListener('click',()=>{

    billError.style.visibility = "hidden";
    tipError.style.visibility = "hidden";
    peopleError.style.visibility = "hidden";

    billAmount = bill.value;
    numOfPeople = people.value;
    tipInput = tip.value;

    if( billAmount == "" ) billError.style.visibility = "visible";

    else if( tipInput == "" ) tipError.style.visibility = "visible";

    else if( numOfPeople == "" ) peopleError.style.visibility = "visible";

    else{

        let tip_amount = ( ( billAmount * tipInput ) / ( numOfPeople * 100 ) );

        tipAmount.innerHTML = "$" + tip_amount.toFixed(2);

        totalAmount.innerHTML = "$" + ( ( billAmount / numOfPeople ) + tip_amount ).toFixed(2);
    }
})

resetButton.addEventListener('click',()=>{

    bill.value = "";
    tip.value = "";
    people.value = "";

    tipAmount.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
    
    tip.style.setProperty('display','none');
    customButtom.style.removeProperty('display')

    billError.style.visibility = "hidden";
    tipError.style.visibility = "hidden";
    peopleError.style.visibility = "hidden";
})