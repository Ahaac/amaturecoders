const addtwo=()=>{
   const x = parseInt(document.getElementById('first').value);
   const y = parseInt(document.getElementById('second').value);
   document.getElementById('result').innerHTML = x + "+" + y + "=" + (x+y);
}