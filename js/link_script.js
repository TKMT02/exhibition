//  リスト（メインindex.html)以外で読み込み

'use strict';

//  ヘッダーのクリックによる色変化

const profile_li = document.querySelector(".toppage__item--profile");
const portfolio_li = document.querySelector(".toppage__item--portfolio");
const prm_li = document.querySelector(".toppage__item--prm");

profile_li.addEventListener('click', () =>{
    location.href = "index.html" + "?list=profile";
})

portfolio_li.addEventListener('click', () =>{
    location.href = "index.html" + "?list=portfolio";
})

prm_li.addEventListener('click', () =>{
    location.href = "index.html" + "?list=prm";
})