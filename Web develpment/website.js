setInterval(() => {
    let RealTime=document.getElementById('RealTime');
    let time=new Date();
    let stdtime=`${time.getFullYear()}/${time.getMonth()}/${time.getDate()}  ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    RealTime.innerHTML=stdtime;
    
}, 1);
