let mark = () => {
        let name = document.getElementById("name").value;
        let ta = document.getElementById("tam").value;
        let eng = document.getElementById("eng").value;
        let mat = document.getElementById("mat").value;
        let sci = document.getElementById("sci").value;
        let ss = document.getElementById("ss").value;

        let nameerr = document.getElementById("nameerr");
        let tamerr = document.getElementById("tamerr");
        let engerr = document.getElementById("engerr");
        let materr = document.getElementById("materr");
        let scierr = document.getElementById("scierr");
        let sserr = document.getElementById("sserr");
        // name
        ischecked = true;

        if (name == "") {
          nameerr.innerText = "Name field is required";
          document.getElementById("name").style.border = "1px solid red";
          ischecked = false;
        } else {
          nameerr.innerText = "";
           document.getElementById("tam").style.border = "";
        }
        // tamil
        if (ta == "") {
          tamerr.innerText = "Name field is required";
          document.getElementById("tam").style.border = "1px solid red";
          ischecked = false;
        } else if (ta < 0 || ta > 100) {
          tamerr.innerText = "Invalid mark";
          ischecked = false;
        } else {
          tamerr.innerText = "";
          document.getElementById("tam").style.border = "";
        }
        // english
        if (eng == "") {
          engerr.innerText = "Name field is required";
          document.getElementById("eng").style.border = "1px solid red";
          ischecked = false;
        } else if (eng < 0 || eng > 100) {
          engerr.innerText = "Invalid mark";
          ischecked = false;
        } else {
          engerr.innerText = "";
          document.getElementById("eng").style.border = "";
        }
        // maths
        if (mat == "") {
          materr.innerText = "Name field is required";
          document.getElementById("mat").style.border = "1px solid red";
          ischecked = false;
        } else if (mat < 0 || mat > 100) {
          materr.innerText = "Invalid mark";
          ischecked = false;
        } else {
          materr.innerText = "";
          document.getElementById("mat").style.border = "";
        }
        // science
        if (sci == "") {
          scierr.innerText = "Name field is required";
          document.getElementById("sci").style.border = "1px solid red";
          ischecked = false;
        } else if (sci < 0 || sci > 100) {
          scierr.innerText = "Invalid mark";
          ischecked = false;
        } else {
          scierr.innerText = "";
          document.getElementById("sci").style.border = "";
        }
        // social science
        if (ss == "") {
          sserr.innerText = "Name field is required";
          document.getElementById("ss").style.border = "1px solid red";
          ischecked = false;
        } else if (ss < 0 || ss > 100) {
          sserr.innerText = "Invalid mark";
          ischecked = false;
        } else {
          sserr.innerText = "";
          document.getElementById("ss").style.border = "";
        }
        if (ischecked) {
          let arr =[name, ta, eng, mat, sci, ss];
          document.getElementById("arr").innerText

          let[std,...totmrk]=arr;
          console.log(std)
          console.log(totmrk)
          let count=0
          for(let sum of totmrk){
             count+=Number(sum)
          }
          document.getElementById("arr").innerText=`Name :${std}`
          document.getElementById("total").innerText=`Total : ${count}`
        }
      };