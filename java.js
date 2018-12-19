function bigtext(x) {
 document.getElementById("myP").style.fontSize = "xx-large";
}

function normaltext(x) {
 document.getElementById("myP").style.fontSize = "x-large";
}

function bigImg(x) {
    x.style.height = "400px";
    x.style.width = "350px";
}

function normalImg(x) {
    x.style.height = "300px";
    x.style.width = "250px";

}

function myEx1first() {
  var exp1 ="Attitude is everything. It is true scientifically that if your your attitude is positive your overall performance will be better as well as your future."

   document.getElementById("a").innerHTML =exp1;
}
function myEx1sec() {
  var emplainOne = document.getElementById("b");
  if (emplainOne.style.display === "none") {
    emplainOne.style.display = "block";
  } else {
    emplainOne.style.display = "none";
  }
}

function myEx2first() {
  var exp2 =" Reserchers has found out people has became selfish, depressed, addicted to social media and overall changing our positive attitude. The Devil symbolized social media and cellphone companies as evil, or how user of this devices made this people devils "

   document.getElementById("c").innerHTML =exp2;
}
function myEx2sec() {
  var emplainOne = document.getElementById("d");
  if (emplainOne.style.display === "none") {
    emplainOne.style.display = "block";
  } else {
    emplainOne.style.display = "none";
  }
}

function devImg(x) {
    x.style.height = "300px";
    x.style.width = "250px";
}
function devNORImg(x) {
    x.style.height = "200px";
    x.style.width = "150px";
}

function myChangetitle() {
var t = document.getElementById("myComment").value;
document.getElementById("demo").innerHTML = t;
}


function goBack() {
      window.history.back()
    }
    
function goForward() {
      window.history.forward()
}

