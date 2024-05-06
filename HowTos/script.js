let div1 = document.getElementById("content")
let div2 = document.getElementById("sharepoint")
let div3 = document.getElementById("sage")
let div4 = document.getElementById("loan")
let div5 = document.getElementById("howtos")
let link1 = document.getElementById("course_1")
let link2 = document.getElementById("course_2")
let link3 = document.getElementById("course_3")
let link4 = document.getElementById("course_4")
let link5 = document.getElementById("course_2")

link1.addEventListener("click", function(){
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
})

link2.addEventListener("click", function(){
    div1.style.display = "none"
    div2.style.display = "block"
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
})
link3.addEventListener("click", function(){
    div1.style.display = "none"
    div2.style.display = "none"
    div3.style.display = "block";
    div4.style.display = "none";
    div5.style.display = "none";
})
link4.addEventListener("click", function(){
    div1.style.display = "none"
    div2.style.display = "none"
    div3.style.display = "none";
    div4.style.display = "block";
    div5.style.display = "none";
})
link5.addEventListener("click", function(){
    div1.style.display = "none"
    div2.style.display = "none"
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "block";
})


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}



window.onclick = function(event) {
    if (!event.target.matches('.dropbutton')) {
      var dropdowns = document.getElementsByClassName("dropdown_content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  


// 


function myFunctionTwo() {
    document.getElementById("myDropdown_two").classList.toggle("show_two");
}



window.onclick = function(event) {
    if (!event.target.matches('.dropbutton_two')) {
      var dropdowns = document.getElementsByClassName("dropdown_content_two");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show_two')) {
          openDropdown.classList.remove('show_two');
        }
      }
    }
  }

//   

function myFunctionThree() {
    document.getElementById("myDropdown_three").classList.toggle("show_three");
}



window.onmouseover = function(event) {
    if (!event.target.matches('.dropbutton_three')) {
      var dropdowns = document.getElementsByClassName("dropdown_content_three");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show_three')) {
          openDropdown.classList.remove('show_three');
        }
      }
    }
  }

  //



  function myFunctionFour() {
    document.getElementById("myDropdown_four").classList.toggle("show_four");
}



window.onclick = function(event) {
    if (!event.target.matches('.dropbutton_four')) {
      var dropdowns = document.getElementsByClassName("dropdown_content_four");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show_four')) {
          openDropdown.classList.remove('show_four');
        }
      }
    }
  }

  