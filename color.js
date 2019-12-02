/*var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("body");

function changeBackground(){
    body.style.background = `linear-gradient(to right,${color1.value},${color2.value});`;
}
color1.addEventListener("input",changeBackground);
color2.addEventListener("input",changeBackground);*/

/*function show() {
    console.log('hello show function')
}
function showcallback(callback){
    callback()

}//called
showcallback(show);//callin



function user(name , age , company , salary){    //function constructor
this.name = name;
this.age = age;
this.company = company;
this.salary = salary;
}
let user1 = new user("manu",20,"qspider",3000);
let user2 = new user("anu",30,"jspider",6000)
console.log(user1);
console.log(user2);

var languages =["java","python","nodejs","ruby"];//for pop method
languages.pop();
console.log(languages);

var languages =["java","python","nodejs","ruby"];//for shift method
languages.shift();
console.log(languages);

var languages =["java","python","nodejs","ruby"];//for push method
languages.push("angular");
console.log(languages);

var languages =["java","python","nodejs","ruby"];//for unshift method
languages.unshift("angular");
console.log(languages);

var languages =["java","python","nodejs","ruby"];//for splice method
languages.splice(1,1,'cython');
console.log(languages);

var languages =["java","python","nodejs","ruby"];//for splice method
languages.splice(1,0,'cython');
console.log(languages);

var languages =["java","python","nodejs","ruby"];//for loop
//for(var i=0;i<languages.length;i++){//
   // console.log(languages[i]);//
//}

languages.forEach(function(value,index,array){
  // console.log(value);
   // console.log(index);
  //  console.log(array);
    console.log(`${index};${value}`);
});*/

var employees = [
    {
  emp_id :"cap101",
  emp_name : "manu",
  emp_photo : "https://pixabay.com/photos/holiday-table-thanksgiving-table-1926946/",
  emp_age :20,
  emp_gender :"female",
  emp_company : "capgemini",
  emp_salary : 30000,
  emp_designation : "web developer",
 // emp_doj : new date ('2015/05/05'),
  emp_location : "mandya",
  emp_education : "BE"



    },
    {
        emp_id :"cap102",
    emp_name : "anu",
    emp_photo : "https://pixabay.com/photos/wintry-dawn-secret-light-trees-4532412/",
    emp_age :10,
    emp_gender :"female",
    emp_company : "capgemini",
    emp_salary : 40000,
    emp_designation : "web technology",
 //   emp_doj : new date ('2015/04/05'),
    emp_location : "mandya",
    emp_education : "mtech"
},
    {
    emp_id :"cap103",
    emp_name : "ashu",
    emp_photo : "https://pixabay.com/photos/meadow-nature-summer-spring-grass-4623279/",
    emp_age :30,
    emp_gender :"male",
    emp_company : "wipro",
    emp_salary : 40000,
    emp_designation : "java developer",
 //   emp_doj : new date ('2015/05/05'),
    emp_location : "lucknow",
    emp_education :"btech"
},
    {
    emp_id :"cap104",
    emp_name : "divyank",
    emp_photo : "https://pixabay.com/photos/paris-the-river-seine-eiffel-tower-4627143/",
    emp_age :23,
    emp_gender :"male",
    emp_company : "JCB",
    emp_salary : 80000,
    emp_designation : "developer",
 //   emp_doj : new date ('2015/05/05'),
    emp_location : "indor",
    emp_education :"engnerring"
}
   
]


var emp =[];
employees.forEach(empData =>{
  var test = emp.push(`
  <div class="card">
  <img src="${empData.emp_photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${empData.emp_name}</h5>
    <span class="badge badge-success float-right">${empData.emp_id}</span>
    <br>
    
    <span class="badge badge-success float-right">${empData.emp_designation}</span>
    <br>
    <li class="list-group-item"> salary : ${empDate.emp_salary}</li>
    <li class="list-group-item"> location : ${empDate.emp_location}</li>
    <li class="list-group-item">education : ${empDate.emp_education}</li> 
    <li class="list-group-item"> age : ${empDate.emp_age}</li>
    <li class="list-group-item"> company: ${empDate.emp_company}</li>
    <li class="list-group-item"> gender : ${empDate.emp_gender}</li>
    <li class="list-group-item"> date of joining : ${empDate.emp_doj.tostring()}</li>

    <a href="#" class="btn btn-primary">Go somewhere </a>
  </div>
</div>
`);
  

});


document.getElementById("template").innerHTML = emp;


/*var names =["manu","anu","shashi","varu"];
var str= "hello javascript";
var num = [10,50,30,60,1,30,54];
var test  = names.sort();
var numsort = num.sort(function(a,b){
    return a-b;
});


var stringreverse=[...str].reverse().join("");
console.log(numsort);
console.log(stringreverse);
function username(str){
    return[...str].reverse().join("");
}
console.log(username("jspider"));


//var test = names.reverse();
//var test1 = num.reverse();
//var test2= Array.from(str);
//var test3=test2.reverse();
//console.log(test);
//console.log(test3);*/


















































































































































































































































































































































































































































































































































