// function getDetails() {
// console.log("working...!");
// }
var sscValue;
var sscmks;
var sscmks1;
var sscradio;
var sscper;
var sscyop;

var interValue;
var intermks;
var intermks1;
var interradio;
var interper;
var interyop;

var btechValue;
var btechmks;
var btechmks1;
var btechradio;
var btechper;
var btechyop;

var name;
var rollno;
var email;
var store;
var co;


function getDetails() {

  name=document.getElementById('name').value;
  rollno=document.getElementById('rollno').value;
  email=document.getElementById('email').value;
  sscValue=document.getElementById('sscValue').value;
  sscmks=document.getElementById('sscmks');
  sscmks1=document.getElementById('sscmks1');
  sscper=document.getElementById('sscper').value;
  sscyop=document.getElementById('sscyop').value;

  interValue=document.getElementById('interValue').value;
  intermks=document.getElementById('intermks');
  intermks1=document.getElementById('intermks1');
  interper=document.getElementById('interper').value;
  interyop=document.getElementById('interyop').value;

  btechValue=document.getElementById('btechValue').value;
  btechmks=document.getElementById('btechmks');
  btechmks1=document.getElementById('btechmks1');
  btechper=document.getElementById('btechper').value;
  btechyop=document.getElementById('btechyop').value;



  if (sscmks.checked) {
   sscradio=sscmks.value;

  }
  else{
    sscradio=sscmks1.value;

      }


  if (intermks.checked) {
   interradio=intermks.value;

  }
  else{
    interradio=intermks1.value;

  }


if (btechmks.checked) {
 btechradio=btechmks.value;

}
else{
  btechradio=btechmks1.value;

}
console.log(sscValue+" "+sscradio+" "+sscper+" "+sscyop);
console.log(interValue+" "+interradio+" "+interper+" "+interyop);
console.log(btechValue+" "+btechradio+" "+btechper+" "+btechyop);

name=document.getElementById('name').value;
rollno=document.getElementById('rollno').value;
email=document.getElementById('email').value;
co=document.getElementById('co').value;
console.log(co);
console.log(name+" "+rollno+" "+email);
if (!window.indexedDB) {
  console.log("indexedDB db is not working..!");
}
var request=window.indexedDB.open("svitDB",1);
request.onerror=e=>{
  console.log(e);
}
request.onupgradeneeded=e=>{
var dbname=e.target.result;
dbname.createObjectStore("cse",{keyPath:"rollno"});
  console.log("upgraded..!");

}

request.onsuccess=e=>{
  var dbname=e.target.result;
  store =dbname.transaction("cse","readwrite").objectStore("cse");
  store.put(
{
"name":name,
"rollno":rollno,
"email":email,
"co":co,
  "edudetails":
  {
    "ssc": [
      sscValue,
      sscradio,
      sscper,
      sscyop
    ],
     "inter": [
       interValue,
       interradio,
       interper,
       interyop
     ],
     "btech": [
       btechValue,
       btechradio,
       btechper,
       btechyop
     ]
  }
      }
);
  console.log("success..!");
}
localStorage.setItem("roll",rollno);
window.open("resume.html","_self");

}
