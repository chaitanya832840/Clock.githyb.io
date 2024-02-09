function Time(){

    let clock=new Date()
    let hr=clock.getHours()
    let min=clock.getMinutes()
    let sec=clock.getSeconds()

   let hours= document.querySelector("#hours")
   if(hr>12)
   hr=hr-12
    if(hr<10)
    hr='0'+hr
   hours.innerHTML=hr
   let minutes=document.querySelector("#minutes")
   if(min<10)
   min='0'+min
   minutes.innerHTML=min
   if(sec<10)
   sec='0'+sec
   let seconds=document.querySelector("#seconds")
   seconds.innerHTML=sec

let day=document.querySelector("#day")
if(hrs>12)
day.innerHTML="PM"
    }
setInterval(Time,1000)