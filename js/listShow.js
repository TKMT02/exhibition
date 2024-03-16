//  profile.htmlのみ読み込み。
//  getで data=?? の形で読み込み。
//  得たdata型をjsonに返して取得する。


//  ファイル管理

//  自己紹介リスト＋ポートフォリオ一覧のJSONの場所
const JSONFilePath_Profile = "./assets/json/profile_content.json";

//  自己紹介リスト＋ポートフォリオ一覧のJSONの場所
const JSONFilePath_PRM = "./assets/json/prm_content.json";

//  自己紹介の表示画像一覧の場所
const profilePath = "./assets/image/person";

//  ポートフォリオサイトのFVの場所
const portfolioPath = "./assets/image/portfolio_fvimage"

//  進級制作のFVの場所
const prmPath = "./assets/image/prm_fvimage"

//  関数処理（必要なエレメント処理）

window.addEventListener("DOMContentLoaded", () =>{
    let urlpram = location.search;
    let pram = urlpram.replace("?list=", "");
    if(pram == "profile"){
        profileshows();
    }
    if(pram == "portfolio"){
        portfolioShows();
    }
    if(pram == "prm"){
        prmShows();
    }
});



//  自己紹介一覧表示のJSON
async function profileshows(){
    fetch(JSONFilePath_Profile)
        .then(response => {
            // レスポンスを JSON として解析
            return response.json();
        })
        .then(data => {
            //親要素を取得  ul要素を取得
            const keys = Object.keys(data);
            const profile_Parent = document.querySelector(".profile__list");
            for (let i = 0; i < keys.length; i++) {
                //  親グループを作成（class="profile__item")
                const liElement = document.createElement("li");
                liElement.className = "profile__item";
                profile_Parent.appendChild(liElement);

                const key = keys[i];

                //  JSONの中身のdataをconstで定義
                const id = data[key][0]['class'];
                const name = data[key][0]['name'];
                const No = data[key][0]['number'];

                //  エレメントの作成
                const groupElemet = document.createElement("div");
                const aElement = document.createElement("a");
                const ImgElement = document.createElement("img");
                const idElement = document.createElement("h3");
                const TextElemet = document.createElement("div");
                const pElement = document.createElement("p");

                //  クラス名設定
                groupElemet.className = `profile__${id}`;
                aElement.href = `./profile.html?id=${id}`;
                groupElemet.id = `${id}`;
                ImgElement.className = "profile__item--headpic";
                idElement.className = "profile__item--number";
                pElement.className = "profile__item--name"; 
                TextElemet.className = "profile__area";

                //  中身設定    JSONから取り出す。

                ImgElement.src = `${profilePath}/picture_${id}.webp`; // 本当
                ImgElement.setAttribute('alt',`${name}さんの写真`);
                ImgElement.setAttribute('loading','lazy');
                ImgElement.width = "900";
                ImgElement.height = "1000";
                
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
                ImgElement.width = "900";
                ImgElement.height = "1000";
                
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

async function prmShows(){
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
                const aElement = document.createElement("a");
                const ImgElement = document.createElement("img");
                const h3Elemet = document.createElement("h3");   //ｸﾞﾙｰﾌﾟ名
                const pElement = document.createElement("p");   //タイトル
                const TextElement = document.createElement("div");

                //  クラス名設定
                groupElemet.className = `prm__${id}`;
                groupElemet.id = `${id}`;
                aElement.href = `./prm.html?id=${id}`;
                ImgElement.className = "prm__item--headpic";
                h3Elemet.className = "prm__item--groupname";
                pElement.className = "prm__item--ttl"; 
                TextElement.className = "prm__area";

                //  中身設定    JSONから取り出す。
                ImgElement.src = `${prmPath}/fv_${id}.webp`; //   本当
                ImgElement.setAttribute('alt',`グループ名:${groupname}の進級制作`);
                ImgElement.setAttribute('loading','lazy');
                ImgElement.width = "900";
                ImgElement.height = "1000";
                
                h3Elemet.textContent = `${groupname}`;
                pElement.textContent = `${ttl}`;

                //  アペンド
                liElement.appendChild(aElement);
                aElement.appendChild(groupElemet);
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
