function refreshTime()  // funkcja służąca do odświeżania czasu
{

    var t = new Date();
    var sec = t.getSeconds();
    var minutes = t.getMinutes();
    var hours = t.getHours();
                      
    /* dodawanie warunków*/
    
    if(sec < 10) sec = "0" + sec;                 
    if(minutes < 10) minutes = "0" + minutes;
    if(hours < 10) hours = "0" + hours;
    
    document.getElementById("time").innerHTML = hours + ":" +
        minutes + ":" + sec;
    
    setTimeout("refreshTime()", 1000);

}
