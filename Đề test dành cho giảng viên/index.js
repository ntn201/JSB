var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".playVideo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//get the iframe from  youtube

let playVid = document.querySelector(".video")


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  playVid.src = playVid.src
}

btn.onclick = function () {
  modal.style.display = "block"
}

var close1 = document.getElementsByClassName("close1")[0];

var modal1 = document.getElementById("myModal-1");

// Get the button that opens the modal
var btn1 = document.querySelector("#modal-1");


btn1.onclick = function () {
  modal1.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
close1.addEventListener("click",function () {
  modal1.style.display = "none";
})  

// ------------



var modal2 = document.getElementById("myModal-2");

// Get the button that opens the modal
var btn2 = document.querySelector("#modal-2");
var close2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
  modal2.style.display = "flex"
}

close2.addEventListener("click",function () {
  modal2.style.display = "none";
}) 


//   -------------
var close3 = document.getElementsByClassName("close3")[0];
var modal3 = document.getElementById("myModal-3")

// Get the button that opens the modal
var btn3 = document.querySelector("#modal-3");


btn3.onclick = function () {
  modal3.style.display = "flex";
}

close3.onclick = function () {
  modal3.style.display = "none";
}
//   -------------
var close4 = document.getElementsByClassName("close4")[0];

var modal4 = document.getElementById("myModal-4");

// Get the button that opens the modal
var btn4 = document.querySelector("#modal-4");


btn4.onclick = function () {
  modal4.style.display = "flex";
}

close4.addEventListener("click",function (){
  modal4.style.display = "none";
})





