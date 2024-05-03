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