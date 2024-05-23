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
{
 fetch('./sample.json')
  .then(res => {
    return res.json();
  })
  .then(data => {

//nav//
    const nav1 = data[0];
    const markup1 = `<a>${nav1.name}</a>`;
    document.querySelector('a.courses').insertAdjacentHTML('beforeend', markup1);

    const nav2 = data[1];
    const markup2 = `<a>${nav2.name}</a>`;
    document.querySelector('a.courses2').insertAdjacentHTML('beforeend', markup2);

    const nav3 = data[2];
    const markup3 = `<a>${nav3.name}</a>`;
    document.querySelector('a.courses3').insertAdjacentHTML('beforeend', markup3);

    const nav4= data[3];
    const markup4 = `<a>${nav4.name}</a>`;
    document.querySelector('a.courses4').insertAdjacentHTML('beforeend', markup4);

    //buttons//

    const button = data[0].sections[0];
    const click = `<p>${button.name}</p>`;
    document.querySelector('p.button').insertAdjacentHTML('beforeend',click);

    const button2 = data[0].sections[1];
    const click2 = `<p>${button2.name}</p>`;
    document.querySelector('p.button2').insertAdjacentHTML('beforeend',click2);

    const button3 = data[0].sections[2];
    const click3 = `<p>${button3.name}</p>`;
    document.querySelector('p.button3').insertAdjacentHTML('beforeend',click3);

    const button4 = data[0].sections[3];
    const click4 = `<p>${button4.name}</p>`;
    document.querySelector('p.button4').insertAdjacentHTML('beforeend',click4);


    ///link1//

    const backtext = data[0].sections[0].sections[0];
    const header = `<p>${backtext.content}</p>`;
    document.querySelector('p.back-text').insertAdjacentHTML('beforeend',header);

   const stopictext = data[0].sections[0].sections[0];
   const subtopic = `<p>${stopictext.stopic}</p>`;
   document.querySelector('p.stopic-text').insertAdjacentHTML('beforeend',subtopic);

   const bodytext = data[0].sections[0].sections[0];
   const body = `<p>${bodytext.bodytext}</p>`;
   document.querySelector('p.link-content').insertAdjacentHTML('beforeend',body);
  


////link2

   const backtext2 = data[0].sections[0].sections[1];
   const header2 = `<p>${backtext2.content}</p>`;
   document.querySelector('p.back-text-2').insertAdjacentHTML('beforeend',header2);

  const stopictext2 = data[0].sections[0].sections[1];
  const subtopic2 = `<p>${stopictext2.stopic}</p>`;
  document.querySelector('p.stopic-text-2').insertAdjacentHTML('beforeend',subtopic2);

  const bodytext2 = data[0].sections[0].sections[1];
   const body2 = `<p>${bodytext2.bodytext}</p>`;
   document.querySelector('p.link-content-2a').insertAdjacentHTML('beforeend',body2);

   const bodytextB2 = data[0].sections[0].sections[1];
   const bodyB2 = `<p>${bodytextB2.bodytextB}</p>`;
   document.querySelector('p.link-content-2b').insertAdjacentHTML('beforeend',bodyB2);

  ///link3///

  const backtext3 = data[0].sections[0].sections[2];
  const header3 = `<p>${backtext3.content}</p>`;
  document.querySelector('p.back-text-3').insertAdjacentHTML('beforeend',header3);

  const stopictext3 = data[0].sections[0].sections[2];
  const subtopic3 = `<p>${stopictext3.stopic}</p>`;
  document.querySelector('p.stopic-text-3').insertAdjacentHTML('beforeend',subtopic3);

  
   const bodytext3 = data[0].sections[0].sections[2];
   const body3 = `<p>${bodytext3.bodytext}</p>`;
   document.querySelector('p.link-content-3a').insertAdjacentHTML('beforeend',body3);

   const bodytextB3 = data[0].sections[0].sections[2];
   const bodyB3 = `<p>${bodytextB3.bodytextB}</p>`;
   document.querySelector('p.link-content-3b').insertAdjacentHTML('beforeend',bodyB3);

  ///link4

  const backtext4 = data[0].sections[0].sections[3];
  const header4 = `<p>${backtext4.content}</p>`;
  document.querySelector('p.back-text-4').insertAdjacentHTML('beforeend',header4);

  const stopictext4 = data[0].sections[0].sections[3];
  const subtopic4 = `<p>${stopictext4.stopic}</p>`;
  document.querySelector('p.stopic-text-4').insertAdjacentHTML('beforeend',subtopic4);

  const bodytext4 = data[0].sections[0].sections[3];
   const body4 = `<p>${bodytext4.bodytext}</p>`;
   document.querySelector('p.link-content-4a').insertAdjacentHTML('beforeend',body4);

   const bodytextB4 = data[0].sections[0].sections[3];
   const bodyB4 = `<p>${bodytextB4.bodytextB}</p>`;
   document.querySelector('p.link-content-4b').insertAdjacentHTML('beforeend',bodyB4);

  ///link5///

  const backtext5 = data[0].sections[0].sections[4];
  const header5 = `<p>${backtext5.content}</p>`;
  document.querySelector('p.back-text-5').insertAdjacentHTML('beforeend',header5);

  const stopictext5 = data[0].sections[0].sections[4];
  const subtopic5 = `<p>${stopictext5.stopic}</p>`;
  document.querySelector('p.stopic-text-5').insertAdjacentHTML('beforeend',subtopic5);

  const bodytext5 = data[0].sections[0].sections[4];
   const body5 = `<p>${bodytext5.bodytext}</p>`;
   document.querySelector('p.link-content-5a').insertAdjacentHTML('beforeend',body5);

   const bodytextB5 = data[0].sections[0].sections[4];
   const bodyB5 = `<p>${bodytextB5.bodytextB}</p>`;
   document.querySelector('p.link-content-5b').insertAdjacentHTML('beforeend',bodyB5);

  
  ///link6///

  const backtext6 = data[0].sections[0].sections[5];
  const header6 = `<p>${backtext6.content}</p>`;
  document.querySelector('p.back-text-6').insertAdjacentHTML('beforeend',header6);

  const stopictext6 = data[0].sections[0].sections[5];
  const subtopic6 = `<p>${stopictext6.stopic}</p>`;
  document.querySelector('p.stopic-text-6').insertAdjacentHTML('beforeend',subtopic6);

  const bodytext6 = data[0].sections[0].sections[5];
   const body6 = `<p>${bodytext6.bodytext}</p>`;
   document.querySelector('p.link-content-6a').insertAdjacentHTML('beforeend',body6);

   const bodytextB6 = data[0].sections[0].sections[5];
   const bodyB6 = `<p>${bodytextB6.bodytextB}</p>`;
   document.querySelector('p.link-content-6b').insertAdjacentHTML('beforeend',bodyB6);

////link7///

  const backtext7 = data[0].sections[0].sections[6];
  const header7= `<p>${backtext7.content}</p>`;
  document.querySelector('p.back-text-7').insertAdjacentHTML('beforeend',header7);

  const stopictext7 = data[0].sections[0].sections[6];
  const subtopic7= `<p>${stopictext7.stopic}</p>`;
  document.querySelector('p.stopic-text-7').insertAdjacentHTML('beforeend',subtopic7);

  const bodytext7 = data[0].sections[0].sections[6];
   const body7 = `<p>${bodytext7.bodytext}</p>`;
   document.querySelector('p.link-content-7a').insertAdjacentHTML('beforeend',body7);

   const bodytextB7 = data[0].sections[0].sections[6];
   const bodyB7 = `<p>${bodytextB7.bodytextB}</p>`;
   document.querySelector('p.link-content-7b').insertAdjacentHTML('beforeend',bodyB7);

  //link8///

  const backtext8 = data[0].sections[0].sections[7];
  const header8= `<p>${backtext8.content}</p>`;
  document.querySelector('p.back-text-8').insertAdjacentHTML('beforeend',header8);

  const stopictext8 = data[0].sections[0].sections[7];
  const subtopic8= `<p>${stopictext8.stopic}</p>`;
  document.querySelector('p.stopic-text-8').insertAdjacentHTML('beforeend',subtopic8);

  const bodytext8 = data[0].sections[0].sections[7];
   const body8 = `<p>${bodytext8.bodytext}</p>`;
   document.querySelector('p.link-content-8a').insertAdjacentHTML('beforeend',body8);

   const bodytextB8 = data[0].sections[0].sections[7];
   const bodyB8 = `<p>${bodytextB8.bodytextB}</p>`;
   document.querySelector('p.link-content-8b').insertAdjacentHTML('beforeend',bodyB8);

  ///link9///

  const backtext9 = data[0].sections[0].sections[8];
  const header9 = `<p>${backtext9.content}</p>`;
  document.querySelector('p.back-text-9').insertAdjacentHTML('beforeend',header9);

  const stopictext9 = data[0].sections[0].sections[8];
  const subtopic9= `<p>${stopictext9.stopic}</p>`;
  document.querySelector('p.stopic-text-9').insertAdjacentHTML('beforeend',subtopic9);

  const bodytext9 = data[0].sections[0].sections[8];
   const body9 = `<p>${bodytext9.bodytext}</p>`;
   document.querySelector('p.link-content-9a').insertAdjacentHTML('beforeend',body9);

   const bodytextB9 = data[0].sections[0].sections[9];
   const bodyB9 = `<p>${bodytextB9.bodytextB}</p>`;
   document.querySelector('p.link-content-9b').insertAdjacentHTML('beforeend',bodyB9);

///link10//

 const backtext10 = data[0].sections[0].sections[9];
  const header10 = `<p>${backtext10.content}</p>`;
  document.querySelector('p.back-text-10').insertAdjacentHTML('beforeend',header10);

  const stopictext10 = data[0].sections[0].sections[9];
  const subtopic10= `<p>${stopictext10.stopic}</p>`;
  document.querySelector('p.stopic-text-10').insertAdjacentHTML('beforeend',subtopic10);

  const bodytext10 = data[0].sections[0].sections[9];
   const body10 = `<p>${bodytext10.bodytext}</p>`;
   document.querySelector('p.link-content-10a').insertAdjacentHTML('beforeend',body10);

   const bodytextB10 = data[0].sections[0].sections[9];
   const bodyB10 = `<p>${bodytextB10.bodytextB}</p>`;
   document.querySelector('p.link-content-10b').insertAdjacentHTML('beforeend',bodyB10);


///link11//

 const backtext11 = data[0].sections[0].sections[10];
  const header11 = `<p>${backtext11.content}</p>`;
  document.querySelector('p.back-text-11').insertAdjacentHTML('beforeend',header11);

  const stopictext11 = data[0].sections[0].sections[10];
  const subtopic11= `<p>${stopictext11.stopic}</p>`;
  document.querySelector('p.stopic-text-11').insertAdjacentHTML('beforeend',subtopic11);

  const bodytext11= data[0].sections[0].sections[10];
   const body11 = `<p>${bodytext11.bodytext}</p>`;
   document.querySelector('p.link-content-11a').insertAdjacentHTML('beforeend',body11);

   const bodytextB11 = data[0].sections[0].sections[10];
   const bodyB11 = `<p>${bodytextB11.bodytextB}</p>`;
   document.querySelector('p.link-content-11b').insertAdjacentHTML('beforeend',bodyB11);
  
  

  ///link12//

  const backtext12 = data[0].sections[0].sections[11];
  const header12 = `<p>${backtext12.content}</p>`;
  document.querySelector('p.back-text-12').insertAdjacentHTML('beforeend',header12);

  const stopictext12 = data[0].sections[0].sections[11];
  const subtopic12= `<p>${stopictext12.stopic}</p>`;
  document.querySelector('p.stopic-text-12').insertAdjacentHTML('beforeend',subtopic12);

  const bodytext12 = data[0].sections[0].sections[11];
   const body12 = `<p>${bodytext12.bodytext}</p>`;
   document.querySelector('p.link-content-12a').insertAdjacentHTML('beforeend',body12);

   const bodytextB12 = data[0].sections[0].sections[11];
   const bodyB12 = `<p>${bodytextB12.bodytextB}</p>`;
   document.querySelector('p.link-content-12b').insertAdjacentHTML('beforeend',bodyB12);

  //link13//

  const backtext13 = data[0].sections[0].sections[12];
  const header13 = `<p>${backtext13.content}</p>`;
  document.querySelector('p.back-text-13').insertAdjacentHTML('beforeend',header13);

  const stopictext13 = data[0].sections[0].sections[12];
  const subtopic13= `<p>${stopictext13.stopic}</p>`;
  document.querySelector('p.stopic-text-13').insertAdjacentHTML('beforeend',subtopic13);

  const bodytext13 = data[0].sections[0].sections[12];
  const body13 = `<p>${bodytext13.bodytext}</p>`;
  document.querySelector('p.link-content-13a').insertAdjacentHTML('beforeend',body13);

  const bodytextB13 = data[0].sections[0].sections[12];
   const bodyB13 = `<p>${bodytextB13.bodytextB}</p>`;
   document.querySelector('p.link-content-13b').insertAdjacentHTML('beforeend',bodyB13);

  //link14//

  const backtext14 = data[0].sections[0].sections[13];
  const header14 = `<p>${backtext14.content}</p>`;
  document.querySelector('p.back-text-14').insertAdjacentHTML('beforeend',header14);

  const stopictext14 = data[0].sections[0].sections[13];
  const subtopic14= `<p>${stopictext14.stopic}</p>`;
  document.querySelector('p.stopic-text-14').insertAdjacentHTML('beforeend',subtopic14);

  const bodytext14 = data[0].sections[0].sections[13];
  const body14 = `<p>${bodytext14.bodytext}</p>`;
  document.querySelector('p.link-content-14a').insertAdjacentHTML('beforeend',body14);

  const bodytextB14 = data[0].sections[0].sections[13];
   const bodyB14 = `<p>${bodytextB14.bodytextB}</p>`;
   document.querySelector('p.link-content-14b').insertAdjacentHTML('beforeend',bodyB14);

  //link15//

  const backtext15 = data[0].sections[0].sections[14];
  const header15 = `<p>${backtext15.content}</p>`;
  document.querySelector('p.back-text-15').insertAdjacentHTML('beforeend',header15);

  const stopictext15 = data[0].sections[0].sections[14];
  const subtopic15= `<p>${stopictext15.stopic}</p>`;
  document.querySelector('p.stopic-text-15').insertAdjacentHTML('beforeend',subtopic15);

  const bodytext15 = data[0].sections[0].sections[14];
  const body15 = `<p>${bodytext15.bodytext}</p>`;
  document.querySelector('p.link-content-15a').insertAdjacentHTML('beforeend',body15);

  const bodytextB15 = data[0].sections[0].sections[14];
   const bodyB15 = `<p>${bodytextB15.bodytextB}</p>`;
   document.querySelector('p.link-content-15b').insertAdjacentHTML('beforeend',bodyB15);

  //link16//

  const backtext16 = data[0].sections[0].sections[15];
  const header16 = `<p>${backtext16.content}</p>`;
  document.querySelector('p.back-text-16').insertAdjacentHTML('beforeend',header16);

  const stopictext16 = data[0].sections[0].sections[15];
  const subtopic16= `<p>${stopictext16.stopic}</p>`;
  document.querySelector('p.stopic-text-16').insertAdjacentHTML('beforeend',subtopic16);

  const bodytext16 = data[0].sections[0].sections[15];
  const body16 = `<p>${bodytext16.bodytext}</p>`;
  document.querySelector('p.link-content-16a').insertAdjacentHTML('beforeend',body16);

  const bodytextB16 = data[0].sections[0].sections[15];
  const bodyB16 = `<p>${bodytextB16.bodytextB}</p>`;
  document.querySelector('p.link-content-16b').insertAdjacentHTML('beforeend',bodyB16);





  })
  .catch(error => console.log(error));


}

let link1 = document.getElementById("course_1")
let link2 = document.getElementById("course_2");
let link3 = document.getElementById("course_3");
let link4 = document.getElementById("course_4");
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


let div1 = document.getElementById("content")
let div2 = document.getElementById("sage");
let div3 = document.getElementById("loan");
let div4 = document.getElementById("howtos");


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


link1.addEventListener("click",function(){

  div1.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";

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

link2.addEventListener("click",function(){

        div1.style.display = "none";
        div2.style.display = "block";
        div3.style.display = "none";
        div4.style.display = "none";

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

link3.addEventListener("click",function(){

  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "block";
  div4.style.display = "none";

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

link4.addEventListener("click",function(){

  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "block";

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



























// // switching pages

  // drop down function on the divs

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

  










 
  