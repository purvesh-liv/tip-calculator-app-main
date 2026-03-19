const bill = document.getElementById("bill")
const tips = document.querySelectorAll(".tip-btn")
const people = document.getElementById("people")
const resetBtn = document.getElementById("resetBtn");
const customTip = document.getElementById("customTip");
const totalAmount = document.getElementById("totalAmount");
const tipAmount = document.getElementById("tipAmount");

let newTip;
let numPeople;
let billAmount;

tips.forEach(tip=>{
    tip.addEventListener("click",()=>{
           newTip = JSON.parse(tip.dataset.tip);
           renderTotalTip(billAmount, newTip,numPeople);
          
    })
    
})
resetBtn.addEventListener("click",()=>{
    reset()
})

bill.addEventListener("change",(e)=>{
     billAmount = JSON.parse(e.target.value)
    renderTotalTip(billAmount,newTip,numPeople)
})
customTip.addEventListener("input", (e) => {
  newTip = JSON.parse(e.target.value);
  
  renderTotalTip(billAmount, newTip, numPeople);
});
people.addEventListener("input", (e) => {
   numPeople = JSON.parse(e.target.value);
   renderTotalTip(billAmount, newTip,numPeople);
  
});
function renderTotalTip(bill,tip,ppl){
       if(tip && ppl && bill){
         let tipAmountTotal = bill * (tip/100)
         let tipPerPerson = tipAmountTotal/ppl
         let totalPerPerson = (bill+tipAmountTotal)/ppl
          
         tipAmount.textContent = tipPerPerson.toFixed(3)
         totalAmount.textContent = totalPerPerson.toFixed(3)
       }
       
}

function reset(){
         tipAmount.textContent = "0.0";
         totalAmount.textContent = "0.0";
}