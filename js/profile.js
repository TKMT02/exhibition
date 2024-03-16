
//  画像のパス
const person_Path = "./assets/image/person";
//  画像のパス
const third_Path = "./assets/image/third";
//  画像のパス
const prm_Path = "./assets/image/prm_fvimage";
//  画像のパス
const logo_Path = "./assets/image/logoImage";
//  JSON叩きます。
const JSONData = "./assets/json/profile_content.json";


//  DomID読み込み

window.addEventListener('DOMContentLoaded', () =>{
    const urlpram = location.search;
    const pram = urlpram.replace("?id=", "");
    fetch(JSONData)
    .then(response => {
        return response.json();
    })
    .then(data => {
        //  データ処理
        //  JSONからデータ取得
        const id = data[pram][0]['class'];
        const No = data[pram][0]['number']
        const name = data[pram][0]['name'];
        const work = data[pram][0]['work'];
        const qual = data[pram][0]['qualification'];
        const hobby = data[pram][0]['hobby'];
        const hope_word = data[pram][0]['hope_word'];
        const hope_reason = data[pram][0]['hope_reason'];
        const prm_reason = data[pram][0]['prm_reason'];
        const prm_Image = data[pram][0]['prm_image'];
        const YouTubeURL = data[pram][0]['youtubeURL'];
        const portfolioURL = data[pram][0]['portfolioURL'];
        const prmURL = `./prm.html?id=${prm_Image}`;

        //  処理
        const qualification = qual.replace(/、/g,"<br>");


        //  エレメント取得 document.querySelector("");

        const idElement = document.querySelector(".content--class");
        const nameElement = document.querySelector(".content--name");
        const ImageElement = document.querySelector(".profile--image");
        const workElement = document.querySelector(".content--work");
        const qualificationElement = document.querySelector(".content--qualification");
        const hobbyElement = document.querySelector(".content--hobby");

        const hopeWordElement = document.querySelectorAll(".hope__word");
        const hopeReasonElemet = document.querySelector(".hope__reason");
        const prmReasonElemet = document.querySelector(".prm__reason");
        const youtubeURLElement = document.querySelector(".profile__content--video");
        const prmURLElement = document.querySelector(".prm_URL");

        const portfolioURLElemet = document.querySelector(".item--portfolioURL");

        const LogoElement = document.querySelector(".item--logo_design");

        const prmImageElement = document.querySelector(".content--prmImage");


        //  データからテキスト変換  elemet.textContent = "";

        idElement.textContent = `No.${No}`;
        nameElement.textContent = name;
        workElement.textContent = `${work}`;
        qualificationElement.innerHTML = qualification;
        hobbyElement.textContent = hobby;
        hopeWordElement.forEach(item =>{
            item.textContent = hope_word;
        })
        hopeReasonElemet.textContent = hope_reason;
        prmReasonElemet.textContent = prm_reason;
        portfolioURLElemet.href = portfolioURL;
        prmURLElement.href = prmURL;

        //  YouTubeURL埋め込みを変換
        youtubeURLElement.src = YouTubeURL;

        //  画像処理
        //  src = `${word_Path}/${id}.(拡張子)`;
        //  prm_imageが拡張子なしどうか。
        LogoElement.src = `${logo_Path}/logo_${id}.webp`;
        ImageElement.src = `${third_Path}/photo_${id}.webp`;
        prmImageElement.src = `${prm_Path}/fv_${prm_Image}.webp`;

    })
    .catch(error => {
        // エラーが発生した場合の処理
        console.error('エラー(Jsonにデータがない場合があります):', error);
    });
    profileshows();
})

//
//      ランダム自己紹介抽出
//

function profileshows(){
    const ClientWidth = window.screen.width;
    console.log(ClientWidth);
    let cw = 0;
    if(ClientWidth > 860){
        cw = 3;
    }
    else{
        cw = 2;
    }
    fetch(JSONData)
    .then(response => {
        // レスポンスを JSON として解析
        return response.json();
    })
    .then(data => {
        const keys = Object.keys(data);
        //親要素を取得  ul要素を取得
        const profile_Parent = document.querySelector(".profile__list");
        for (let i = 0; i < cw; i++) {
            //  親グループを作成（class="profile__item")

            let liElement = document.createElement("li");
            liElement.className = "profile__item";
            profile_Parent.appendChild(liElement);

            //  ランダム数値
            let RandomNum = Math.floor(Math.random() * 24);

            const key = keys[RandomNum];

            //  JSONの中身のdataをconstで定義
            const id = data[key][0]['class'];
            const name = data[key][0]['name'];
            const No = data[key][0]['number'];
            // console.log(id,name,image);  //  確認用

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
            ImgElement.src = `${person_Path}/picture_${id}.webp`; //本当
            ImgElement.setAttribute('alt',`${name}さんの画像`);
            
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
