
function newPage(){
   window.open('tricket.html')
   return
}

 const seatNumber=document.getElementsByClassName('number');
console.log(seatNumber)
    let count=0;

 

 for(const seat of seatNumber){
 
     seat.addEventListener('click', function(e){
        
        count=count+1;

        document.getElementById('phone-input').addEventListener('keyup', function(event){
         const number=parseInt(event.target.value);
         if(count===1 && number===number || count===2 && number===number || count===3 && number===number ||count===4 && number===number){
            const buttonNext=document.getElementById('button-next')
            buttonNext.removeAttribute('disabled')
           }
         
       })

       

        if(count<=4){
         document.getElementById('set-count').innerText=40-count;
         document.getElementById('bocking-seat').innerText=count;
     
         console.log(e.target.innerText)
         e.target.style.background='green';
         e.target.setAttribute("disabled", false);
 
         const tricketUpdate=document.getElementById('tricket-update');
 
         const div=document.createElement('div');
         const addSeat=document.createElement('h2');
         addSeat.innerText=e.target.innerText;
         const econ=document.createElement('h2');
         econ.innerText='Economoy';
         const addPrice=document.createElement('h2');
         addPrice.innerText=550;
         div.appendChild(addSeat);
         div.appendChild(econ);
         div.appendChild(addPrice);
         tricketUpdate.appendChild(div);
 
 
     // total update  
     const totalPrice=document.getElementById('total-price');
     totalPrice.innerText=count*550;
     // Grand total update 
     const grandTotal=document.getElementById('grand-total');
     grandTotal.innerText=count*550;
     
        }
        else{
         alert('very bad')
        }




        

     }) 
     }




      document.getElementById('apply-button').addEventListener('click', function(){
        console.log('clicked')
    
        const inputText=document.getElementById('input-value').value;
        console.log(inputText)
        
        const inputValue=inputText.split(' ').join('').toUpperCase();
        console.log(inputValue);
        if(count===4 && inputValue==='NEW15'){
         document.getElementById('input-value').classList.add('hidden')
         document.getElementById('apply-button').classList.add('hidden')
            const discount=count*550*.15;
            const grandTotal=document.getElementById('grand-total');
             grandTotal.innerText=count*550-discount;
             console.log(discount)
   
            
      const discountPriceAdd=document.getElementById('total-discount')
      const totalDiscount=document.createElement('h3')
      const discountPrice=document.createElement('h3')
      totalDiscount.innerText='Total-Discount';
      discountPrice.innerText=`BTD:${discount}`;
      discountPriceAdd.appendChild(totalDiscount)
      discountPriceAdd.appendChild(discountPrice)
}


else if(count===2 &&inputValue==='COUPLE20'){
   document.getElementById('input-value').classList.add('hidden')
   document.getElementById('apply-button').classList.add('hidden')
  const discount=count*550*.20;
  const grandTotal=document.getElementById('grand-total');
   grandTotal.innerText=count*550-discount;
   console.log(discount)

   const discountPriceAdd=document.getElementById('total-discount')
   const totalDiscount=document.createElement('h3')
   const discountPrice=document.createElement('h3')
   totalDiscount.innerText='Total-Discount';
   discountPrice.innerText=`BTD:${discount}`;
   discountPriceAdd.appendChild(totalDiscount)
   discountPriceAdd.appendChild(discountPrice)



}
else{
   alert('select coupon & seat booking')
}

    

 })
        
       
        
 


     