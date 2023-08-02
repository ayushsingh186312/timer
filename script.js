const daysEle=document.querySelector(".days");
const hourEle=document.querySelector(".hours");
const minEle=document.querySelector(".minutes");
const secEle=document.querySelector(".seconds");
const heading=document.querySelector(".head");








const second=1000,
minute=60*second,
hour=60*minute,
days=24*hour;


const timerfn=()=>{
    const now=new Date();
    let dd=String(now.getDate()).padStart(2,"0");
    let mm=String(now.getMonth()+1).padStart(2,"0"),
    yyyy=now.getFullYear();

    const enterDay = prompt("Enterr Day").padStart(2,"0");
    const enterMonth = prompt("Enterr Month").padStart(2,"0");

    let targetDate = `${enterMonth} / ${enterDay} / ${yyyy}`;
    //console.log(targetDate);
    if(now >targetDate)
    {
        //console.log(`${enterMonth} / ${enterDay} / ${yyyy+1}`);
        targetDate = `${enterMonth}/${enterDay}/${yyyy+1}`;
    } 



    const intervalid=setInterval(()=> {
    const tim=new Date(targetDate).getTime();
    const today=new Date().getTime();
    const dif=tim-today;
    const leftDay=Math.floor(dif/days);
    const leftHour = Math.floor((dif%days)/hour);
    const leftMin= Math.floor((dif%hour)/minute);
    const leftSec = Math.floor((dif%minute)/second);

    daysEle.innerText =leftDay;
    hourEle.innerText = leftHour;
    minEle.innerText = leftMin;
    secEle.innerText = leftSec;
    if(dif<0){
        timerfn.style.display='none';
        heading.innerText="Time's Up";
        clearInterval(intervalid);
    }

    //console.log({leftSec});
    //console.log(`${leftDay} : ${leftHour} : ${leftMin} : ${leftSec}`);
    },0);
};
timerfn();