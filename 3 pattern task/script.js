let pattern_1=()=>{
    document.writeln("<h3>S pattern</h3>")
    for(i=1;i<=5;i++){
         for(j=5;j>=i;j--){
            document.writeln("s")
    }
    document.writeln("<br>")
}
}
let pattern_2=()=>{
     document.writeln("<h3>Number pattern</h3>")
 for(i=1;i<=5;i++){
        for(j=5;j>=i;j--){
            document.writeln(j)
    }
    document.writeln("<br>")
}
}

let pattern_3=()=>{
document.writeln("<h3>Slanding * Pattern</h3>")
for(i=1;i<=5;i++){
        for(j=1;j<=i;j++){
            document.writeln("&nbsp;&nbsp;")
        }
        for(k=i;k<=5;k++){
         document.writeln("*&nbsp;")
    }
     document.writeln("<br>")
}
}
// for(i=1;i<=5;i++){
//         for(j=i;j<=5;j++){
//             document.writeln("&nbsp;&nbsp;")
//         }
//         for(k=1;k<=i;k++){
//          document.writeln(k)
//     }
//      document.writeln("<br>")
// }


let ischecked=true
while(ischecked){
let a=prompt('enter a number \n 1.pattern 1 \n 2.pattern 2 \n 3.pattern 3 \n 4.exit')

switch(a){
    case "1":
        pattern_1()
     break;

      case "2":
         pattern_2()
     break;

      case "3":
        pattern_3()
     break;
      case "4":
         ischecked=false
     break;

     default:
        console.log("Invalid number!")
      break;
}
}