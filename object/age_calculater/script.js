// const calculate=()=>{
//     let dob=document.getElementById("dob").value
//     let birth=new Date(dob).getFullYear();
//     let current=new Date().getFullYear();
//     document.getElementById(out).inntertext=`your age is:${current-birth}`
// }

// const age = () => {
//   let dob = document.getElementById("dob").value;
//   let birthYear = new Date(dob).getFullYear();
//   let currentYear = new Date().getFullYear();

//   document.getElementById("out").innerText =
//     "Year : " + (currentYear - birthYear);
// };

const age = () => {
  let dob = new Date(document.getElementById("dob").value);
  let today = new Date();

  let ageYear = today.getFullYear() - dob.getFullYear();

  let monthDiff = today.getMonth() - dob.getMonth();
  let dateDiff  = today.getDate() - dob.getDate();

  document.getElementById("age").innerHTML =
    `Age: ${ageYear} years<br>`,
    `Month diff: ${monthDiff}`,
    `Date diff: ${dateDiff}`;
};

