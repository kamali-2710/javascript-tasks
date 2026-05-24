let Employees ={
    employee_name : 'kamali',
    employee_id : '1',
    date:"27/4/2003",
    joining_date:"2/5/2025",
    gender:"female",
    age:23,
    // object inside object
    description:{
           role:"Fullstack developer",
           salary :50000
    },
    //array
    project:["kamvy","02/04/2026","02/07/2026",92],
    //function
    combine:function(){
     let b= this.role+this.salary
}
}
console.log(Employees)
//Dot notation
console.log(Employees.employee_id)

//Bracket notation
console.log(Employees['employee_id'])

// accessing object inside object
console.log(Employees.description.salary)
console.log(Employees['description']['salary'])

//destructuring/unpack (obj access)
let{role,salary}=Employees.description
console.log(role)

// array access
 let[project_name, prj_starting_date,  prj_ending_date]=Employees.project
 console.log( `project_name = ${project_name}`,`prj_starting_date = "${prj_starting_date}`,`prj_ending_date = ${prj_ending_date}`) 
 
 //add new key
 Employees.performance = "good"
 Employees.process=["start","end"]
 Employees.contact=2343435865

 //modify/update/edit
 Employees.project[2]="20/9/2026"
 console.log(Employees)
 Employees.description.contact=8778456712

 //delete
 delete Employees.process

 //object key,value,enteries fetch
//  =================================

//  values only
 let get_value = Object.values(Employees)
 console.log(get_value)

//key only
let get_key = Object.keys(Employees.description)
console.log(get_key)

// key and value (entries)
let get = Object.entries(Employees)
console.log(get)