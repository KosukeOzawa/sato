
let nav=document.getElementById("nav");
let concept=document.getElementById("concept");
let stregs=document.getElementById("stregs");
let service=document.getElementById("service");
let service_cover=document.getElementById("service_cover");
let gallary=document.getElementById("gallary");
let footer=document.getElementById("footer");



/* ナビ　*/
document.addEventListener("scroll" , function(){
    if( 0 > concept.getBoundingClientRect().bottom ){
        nav.classList.add("nav1");
    }else{
        nav.classList.remove("nav1");
    }
})



/* コンセプトアニメーション */
document.addEventListener("scroll" , function(){
    if(pageYOffset>400){
        concept.classList.add("concept1");
    }
})



/* 特徴アニメーション */
let d1=document.getElementById("d1");
let d2=document.getElementById("d2");
let d3=document.getElementById("d3");

let text_h=document.getElementById("text_h");

document.addEventListener("scroll" , function(){
    if( 0 > concept.getBoundingClientRect().top ){
        d1.classList.add("d4");
        d2.classList.add("d5");
        d3.classList.add("d6");
    }
})

document.addEventListener("scroll" , function(){
    if( 0 > concept.getBoundingClientRect().top ){
        stregs.classList.add("stregs1");
    }
})

document.addEventListener("scroll" , function(){
    if( 0 > concept.getBoundingClientRect().top ){
       text_h.classList.add("text_h1");
    }
})



/* サービスアニメーション */
document.addEventListener("scroll" , function(){
    if( 250 > stregs.getBoundingClientRect().bottom ){
        service.classList.add("service1");
    }
})



/* ナビ点滅 */
let list1=document.getElementById("list1");
let list2=document.getElementById("list2");
let list3=document.getElementById("list3");
let list4=document.getElementById("list4");


document.addEventListener("scroll" , function(){
    if( 0 > concept.getBoundingClientRect().bottom ){
    list1.classList.add("list1");
   }
   
   if( 0 > stregs.getBoundingClientRect().bottom ){
    list1.classList.remove("list1");
   }
})

document.addEventListener("scroll" , function(){
    if( 0 > stregs.getBoundingClientRect().bottom ){
        list2.classList.add("list2");
    }else{
        list2.classList.remove("list2");
    }

    if( 0 > service_cover.getBoundingClientRect().bottom ){
        list2.classList.remove("list2");
    }
})

document.addEventListener("scroll" , function(){
    if( 0 > service_cover.getBoundingClientRect().bottom ){
        list3.classList.add("list3");
    }else{
        list3.classList.remove("list3");
    }

    if( 550 > gallary.getBoundingClientRect().bottom ){
        list3.classList.remove("list3");
    }
})

document.addEventListener("scroll" , function(){
    if( 550 > gallary.getBoundingClientRect().bottom ){
        list4.classList.add("list4");
    }else{
        list4.classList.remove("list4");
    }
})

/* スクロール */

let mark = document.getElementById("mark");
let header = document.getElementById("header");

document.addEventListener("scroll" , function(){
    if(header.getBoundingClientRect().top < -250){
        mark.classList.add("mark1");
    }
})






