// fetch ('./sample.json')
// .then(res => {
//   return res.json();
// })
// .then(data => {
//   data.forEach(post => {
//     const markup = `<p>${post.body}</p>`;

//     document.querySelector('p.main-test').insertAdjacentHTML('beforeend', markup)
//   })
// })
// .catch(error => console.log(error));

fetch('./sample.json')
  .then(res => {
    return res.json();
  })
  .then(data => {
    const post0 = data[0];
    const markup0 = `<p>${post0.body}</p>`;
    document.querySelector('p.main-test').insertAdjacentHTML('beforeend', markup0);

    const post = data[1];
    const markup = `<p>${post.title}</p>`;
    document.querySelector('p.sub-topic').insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => console.log(error));





let div1 = document.getElementById("content")
let div2 = document.getElementById("sharepoint")
let div3 = document.getElementById("sage")
let div4 = document.getElementById("loan")
let div5 = document.getElementById("howtos")



let div6 = document.getElementById("hero")
let div7 = document.getElementById("page2")
let div8 = document.getElementById("page3")
let div9 = document.getElementById("page4")
let div10 = document.getElementById("page5")
let div11 = document.getElementById("page6")
let div12 = document.getElementById("page7")
let div13 = document.getElementById("page8")
let div14 = document.getElementById("page9")
let div15 = document.getElementById("page10")
let div16 = document.getElementById("page11")
let div17 = document.getElementById("page12")
let div18 = document.getElementById("page13")
let div19 = document.getElementById("page14")
let div20 = document.getElementById("page15")
let div21= document.getElementById("page16")



let link1 = document.getElementById("course_1")
let link2 = document.getElementById("course_2")
let link3 = document.getElementById("course_3")
let link4 = document.getElementById("course_4")
let link5 = document.getElementById("course_2")

let link6  = document.getElementById("hero_page")
let link7 = document.getElementById("page2_link")
let link8 = document.getElementById("page3_link")
let link9 = document.getElementById("page4_link")
let link10 = document.getElementById("page5_link")
let link11 = document.getElementById("page6_link")
let link12 = document.getElementById("page7_link")
let link13 = document.getElementById("page8_link")
let link14 = document.getElementById("page9_link")
let link15 = document.getElementById("page10_link")
let link16 = document.getElementById("page11_link")
let link17 = document.getElementById("page12_link")
let link18 = document.getElementById("page13_link")
let link19 = document.getElementById("page14_link")
let link20 = document.getElementById("page15_link")
let link21 = document.getElementById("page16_link")



// switching pages

link1.addEventListener("click", function(){
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none"
    div7.style.display = "none"
    div8.style.display = "none"
    div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})

link2.addEventListener("click", function(){
    div1.style.display = "none"
    div2.style.display = "block"
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none"
    div7.style.display = "none"
    div8.style.display = "none"
    div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})
link3.addEventListener("click", function(){
    div1.style.display = "none"
    div2.style.display = "none"
    div3.style.display = "block";
    div4.style.display = "none";
    div5.style.display = "none";
    div6.style.display = "none"
    div7.style.display = "none"
    div8.style.display = "none"
    div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})
link4.addEventListener("click", function(){
    div1.style.display = "none"
    div2.style.display = "none"
    div3.style.display = "none";
    div4.style.display = "block";
    div5.style.display = "none";
    div6.style.display = "none"
    div7.style.display = "none"
    div8.style.display = "none"
    div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})
link5.addEventListener("click", function(){
    div1.style.display = "none"
    div2.style.display = "none"
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "block";
    div6.style.display = "none"
    div7.style.display = "none"
    div8.style.display = "none"
    div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})







link6.addEventListener("click",function(){
  div1.style.display = "none"
    div2.style.display = "none"
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
  div6.style.display = "block"
  div7.style.display = "none"
  div8.style.display = "none"
  div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})

link7.addEventListener( "click", function(){
  div1.style.display = "none"
    div2.style.display = "none"
    div3.style.display = "none";
    div4.style.display = "none";
    div5.style.display = "none";
  div6.style.display = "none"
  div7.style.display = "block"
  div8.style.display = "none"
  div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})

link8.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "block"
div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"

})

link9.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "block"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"

})

link10.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "none"
div10.style.display = "block"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})

link11.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "block"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})

link12.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "block";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})

link13.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "block";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})

link14.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "block";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})

link15.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "block"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"

})
link16.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "block"
div9.style.display = "block"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "block"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})

link17.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "block"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"
})

link18.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "block"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "none"

})
link19.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "block"
div20.style.display = "none"
div21.style.display = "none"

})
link20.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "block"
div21.style.display = "none"

})
link21.addEventListener("click",function(){
  div1.style.display = "none"
  div2.style.display = "none"
  div3.style.display = "none";
  div4.style.display = "none";
  div5.style.display = "none";
div6.style.display = "none"
div7.style.display = "none"
div8.style.display = "none"
div9.style.display = "none"
div10.style.display = "none"
  div11.style.display = "none"
  div12.style.display = "none";
  div13.style.display = "none";
  div14.style.display = "none";
div15.style.display = "none"
div16.style.display = "none"
div17.style.display = "none"
div18.style.display = "none"
div19.style.display = "none"
div20.style.display = "none"
div21.style.display = "block"

})

  // drop down function on the divs

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// function toggleDropdown() {
//   var dropdown = document.getElementById('myDropdown');
//   dropdown.classList.toggle('open');
// }


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



window.onclick = function(event) {
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

  










 
  