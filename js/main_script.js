'use strict';

//  ヘッダーのクリックによる色変化

const profile_li = document.querySelector(".toppage__item--profile");
const portfolio_li = document.querySelector(".toppage__item--portfolio");
const prm_li = document.querySelector(".toppage__item--prm");

profile_li.addEventListener('click', () =>{
    location.href = "index.html" + "?list=profile";
})

portfolio_li.addEventListener('click', () =>{
    location.href = "index.html" + "?list=portfolio"
})

prm_li.addEventListener('click', () =>{
    location.href = "index.html" + "?list=prm"
})

//
//
//

const profile_content = document.querySelector(".profile__main");
const portfolio_content = document.querySelector(".portfolio__main");
const prm_content = document.querySelector(".prm__main");

const footer = document.querySelector("footer");

window.addEventListener("DOMContentLoaded", () =>{
    const urlpram = location.search;
    const pram = urlpram.replace("?list=", "");
    if(pram == "profile"){
        profile_li.classList.add('current__item--profile');
        profile_content.classList.remove('hidden');
        profile_content.classList.add('fade-in');
        footer.style.backgroundColor = "#00A3FFl";
    }
    if(pram == "portfolio"){
        portfolio_li.classList.add('current__item--portfolio');
        portfolio_content.classList.remove('hidden');
        portfolio_content.classList.add('fade-in');
        footer.style.backgroundColor = "#FF63C1";
    }
    if(pram == "prm"){
        prm_li.classList.add('current__item--prm');
        prm_content.classList.remove('hidden');
        prm_content.classList.add('fade-in');
        footer.style.backgroundColor = "#00E941";
    }
    else if(pram == ""){
        location.href = "./index.html" + "?list=profile";
        //  強制的にprofileに飛ばす。
    }
})

//  トップへ戻る

//  

const MenuBtn = document.querySelector('.MenuBtn');

window.addEventListener('scroll', () =>{
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledDistance = Math.round(window.scrollY,0);
    if (scrolledDistance === scrollableHeight) {
        MenuBtn.style.display = "none";
    }
    else{
        MenuBtn.style.display = "block";
    }
})

//  制作クレジットモーダルウィンドウ

function OpenModal(){
    const modal = document.querySelector(".overview__modal");
    modal.classList.toggle("active");
}