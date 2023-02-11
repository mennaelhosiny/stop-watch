
let [ms,secs,mins,hrs]=[0,0,0,0]
let timeRef=document.querySelector('.timer')
let int=null

document.getElementById('start').addEventListener("click",

() =>{
  if(int !== null){
    clearInterval(int)
  }
  int=setInterval(displayTimer,10)
})



document.getElementById('stop').addEventListener("click",
()=>{
   clearInterval(int)
})

document.getElementById('reset').addEventListener("click",
()=>{
    clearInterval(int);
   [ms,secs,mins,hrs]=[0,0,0,0]
   timeRef.innerHTML= "00 : 00 : 00 : 000"

})
function displayTimer(){
    ms+=10;
    if(ms==1000){
        ms=0;
        secs++
        if (secs==60){
            secs=0;
            mins++
            if(mins==60){
                mins=0
                hrs++
            }
        }
    }

let h=hrs<10? "0"+hrs:hrs;
let m=mins<10? "0"+mins:mins;
let s=secs<10? "0"+secs:secs;
let mss=ms<10?"00"+ms:ms<100?"0"+ms:ms;

timeRef.innerHTML=`${h} : ${m} : ${s} : ${mss}`

}



