function clock() {
    var date=new Date();
    var hour =date.getHours();
   var min =date.getMinutes();
    var second = data.getsecond();
var time =`<h1>
${hour} : ${min} : ${second}
</h1>`;
document.getElementById("template").innerHTML=time;
}
clock();
