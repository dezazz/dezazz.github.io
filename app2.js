const input1= document.getElementById('input1');
const input2= document.getElementById('input2');
const plus=document.getElementById('plus');
const min=document.getElementById('min');
const time=document.getElementById('time');
const divide=document.getElementById('divide');
const output=document.getElementById('output');

let angka1 = 0;
let angka2 = 0;
let hasil = 0;





plus.addEventListener('click', function() { 
  angka1 = parseInt(input1.value);
  angka2 = parseInt(input2.value);
  hasil=angka1+angka2;
  output.innerHTML=hasil;
  
    
});


min.addEventListener('click', function() { 
    angka1 = parseInt(input1.value);
    angka2 = parseInt(input2.value);
    hasil=angka1-angka2;
    output.innerHTML=hasil;
    
      
  });
  


  time.addEventListener('click', function() { 
    angka1 = parseInt(input1.value);
    angka2 = parseInt(input2.value);
    hasil=angka1*angka2;
    output.innerHTML=hasil;
    
      
  });
  

  divide.addEventListener('click', function() { 
    angka1 = parseInt(input1.value);
    angka2 = parseInt(input2.value);
    hasil=angka1/angka2;
    output.innerHTML=hasil;
    
      
  });
  
