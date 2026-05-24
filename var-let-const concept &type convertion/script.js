// window.alert("do you want lesrn js external")
// window.print("")
// console.log("print output")
// document.write("external")



// variables automatically.......

day = 7
day = 11
console.log(day)

// var-reassign
var days = 7
days = 10
console.log("var", days)

// redeclare
var day = 7
var day = 11
console.log("var", day)

// hoisted (var a)
a = 10
console.log(a)


// let..........
// reassign
let b = 10
b = 11
console.log(b)

//redeclare
// let dec=10
// let dec=11
// console.log(dec)   //error

//hoisted
d = 10
console.log(d) //let can't be hoist

// const.........
// reassign
// const week=3
// week=5
// console.log(week)  //error

//redeclare
// const total_day=10
// const total_day=11
// console.log(total_day) //error

//scope-automatically
sp = "scope-auto"
console.log(sp) 
{
    console.log(sp)
}
console.log(sp)


//scope-var

console.log(c) 
{
    var c = "scope in var"
    console.log(c)
}
console.log(c)

//scope-let
let e = "scope in let"
console.log(e) 
{
    console.log(e)
}
console.log(e)

//scope-const
const a1=10
console.log(a1)
{
    console.log(a1)
}
console.log(a1)


// type coversition 
// number to boolean
a=300
b=Boolean(a)
console.log(typeof b,b)

// boolean to string
let booln=true
let bln=String(booln)
console.log( typeof bln,bln)

// Boolean  to number
let bool_num=true
let num1=Number(bool_num)
console.log(typeof num1,num1)

// string to number
let str="10"
let str_a=Number(str)
console.log(typeof str_a,str_a)


//string to boolean
let str1=""
let name=Boolean(str1)
console.log(typeof name,name)

//  number to string
let num= 55
let num_re = String(num)
console.log( typeof num_re ,num_re)
