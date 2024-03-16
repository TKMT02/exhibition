
//  ホバーするとアクティブをつける。

const portfolio_btn = document.querySelector(".btn_portfolio");
const prm_btn = document.querySelector(".btn_prm");


//  リストを取得

const list__portfolio = document.querySelector(".list__portfolio");
const list__prm = document.querySelector(".list__prm");

//  クリックすると色を維持

portfolio_btn.addEventListener("click", () =>{
    portfolio_btn.classList.add("active");
    prm_btn.classList.remove("active");
    //
    list__portfolio.classList.add("active");
    list__prm.classList.remove("active");
    //
})

prm_btn.addEventListener("click", () =>{
    prm_btn.classList.add("active");
    portfolio_btn.classList.remove("active");
    //
    list__prm.classList.add("active");
    list__portfolio.classList.remove("active");
})
