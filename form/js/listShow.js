//  profile.htmlのみ読み込み。
//  getで data=?? の形で読み込み。
//  得たdata型をjsonに返して取得する。


//  ファイル管理

//  自己紹介リスト＋ポートフォリオ一覧のJSONの場所
const JSONFilePath_Profile = "../assets/json/profile_content.json";

//  自己紹介リスト＋ポートフォリオ一覧のJSONの場所
const JSONFilePath_PRM = "../assets/json/prm_content.json";

//  自己紹介の表示画像一覧の場所
const profilePath = "../assets/image/person";

//  ポートフォリオサイトのFVの場所
const portfolioPath = "../assets/image/portfolio_fvimage"

//  進級制作のFVの場所
const prmPath = "../assets/image/prm_fvimage"

//  関数処理（必要なエレメント処理）

window.addEventListener("DOMContentLoaded", () =>{
    portfolioShows();
    prmShows();
});


//  ポートフォリオのJSON
async function portfolioShows(){
    fetch(JSONFilePath_Profile)
    .then(response => {
        // レスポンスを JSON として解析
        return response.json();
    })
    .then(data => {
        const keys = Object.keys(data);
        //親要素を取得  ul要素を取得
        const portfolio_Parent = document.querySelector(".portfolio__list");
        for (let i = 0; i < keys.length; i++) {
            //  親グループを作成（class="portfolio__item")
            const liElement = document.createElement("li");
            liElement.className = "portfolio__item";
            portfolio_Parent.appendChild(liElement);

            const key = keys[i];

            //  JSONの中身のdataをconstで定義
            const id = data[key][0]['class'];
            const name = data[key][0]['name'];
            const fvimage = `fv_${id}`;
            const No = data[key][0]['number'];
            const portfolioURL = data[key][0]['portfolioURL'];

            //  エレメントの作成
            const groupElemet = document.createElement("div");
            const aElement = document.createElement("a");
            const ImgElement = document.createElement("img");
            const idElement = document.createElement("h3");
            const pElement = document.createElement("p");
            const TextElemet = document.createElement("div");

            //  クラス名設定
            groupElemet.className = `portfolio__${id}`;
            aElement.href = portfolioURL;
            aElement.target = "_blank";
            groupElemet.id = `${id}`;
            ImgElement.className = "portfolio__item--headpic";
            idElement.className = "portfolio__item--number";
            pElement.className = "portfolio__item--name"; 
            TextElemet.className = "portfolio__area";

            //  中身設定    JSONから取り出す。

            ImgElement.src = `${portfolioPath}/${fvimage}.webp`;     //  本物
            ImgElement.setAttribute('alt',`${name}さんのポートフォリオ`);
            ImgElement.setAttribute('loading','lazy');
            ImgElement.width = "640";
            ImgElement.height = "360";
            
            idElement.textContent = `No.${No}`;
            pElement.textContent = `${name}`;

            //  アペンド
            liElement.appendChild(aElement);
            aElement.appendChild(groupElemet);
            groupElemet.appendChild(ImgElement);
            groupElemet.appendChild(TextElemet);
            TextElemet.appendChild(idElement);
            TextElemet.appendChild(pElement);
        }
    })
    .catch(error => {
        // エラーが発生した場合の処理
        console.error('エラー(Jsonにデータがない場合があります):', error);
    });
}

//
//
//
//
//



//  進級制作のJSON叩き

function prmShows(){
    fetch(JSONFilePath_PRM)
        .then(response => {
            // レスポンスを JSON として解析
            return response.json();
        })
        .then(data => {
            //親要素を取得  ul要素を取得
            const keys = Object.keys(data);
            const prm_Parent = document.querySelector(".prm__list");
            for (let i = 0; i < keys.length; i++) {
                //  親グループを作成（class="prm__item")

                let liElement = document.createElement("li");
                liElement.className = "prm__item";
                prm_Parent.appendChild(liElement);

                const key = keys[i];

                //  JSONの中身のdataをconstで定義
                const id = data[key][0]['groupID'];
                const groupname = data[key][0]['groupName'];
                const ttl = data[key][0]['title'];
                const fvimage = data[key][0]['fvImage'];

                //  エレメントの作成
                const groupElemet = document.createElement("div");
                const ImgElement = document.createElement("img");
                const h3Elemet = document.createElement("h3");   //ｸﾞﾙｰﾌﾟ名
                const pElement = document.createElement("p");   //タイトル
                const TextElement = document.createElement("div");

                //  クラス名設定
                groupElemet.className = `prm__${id}`;
                groupElemet.id = `${id}`;
                ImgElement.className = "prm__item--headpic";
                h3Elemet.className = "prm__item--groupname";
                pElement.className = "prm__item--ttl"; 
                TextElement.className = "prm__area";

                //  中身設定    JSONから取り出す。

                // ImgElement.src = "https://placehold.jp/450x300.png";    //  偽物
                ImgElement.src = `${prmPath}/fv_${id}.webp`; //   本当
                ImgElement.setAttribute('alt',`グループ名:${groupname}の進級制作のファーストビュー`);
                
                h3Elemet.textContent = `${groupname}`;
                pElement.textContent = `${ttl}`;

                //  アペンド
                liElement.appendChild(groupElemet);
                groupElemet.appendChild(ImgElement);
                groupElemet.appendChild(TextElement);
                TextElement.appendChild(h3Elemet);
                TextElement.appendChild(pElement);
            }
        })
        .catch(error => {
            // エラーが発生した場合の処理
            console.error('エラー(Jsonにデータがない場合があります):', error);
        });
}

//
//      各グループの中のIDを取得し、profileに返す
//


setTimeout(()=> {

    //  ポートフォリオをクリックするとフォームに飛ばす。
    const portfolioBox = document.querySelectorAll('.portfolio__item');
    portfolioBox.forEach(function(item){
        item.addEventListener('click', function(){
            const portfolio = item.querySelector("div");
            const getID = portfolio.getAttribute("id");
            location.href = "./form.html" + `?select=${getID}`;
        });
    });

    //  進級制作をクリックするとフォームに飛ばす。
    const prmBox = document.querySelectorAll('.prm__item');
    prmBox.forEach(function(item){
        item.addEventListener('click', function(){
            const prm = item.querySelector("div");
            const getID = prm.getAttribute("id");
            location.href = "./form.html" + `?select=${getID}`;
        });
    });
    
},1000);