

const JSONFilePath_Profile = "./assets/json/profile_content.json";

const JSONFilePath_PRM = "./assets/json/prm_content.json";

const fvImage_Path = "./assets/image/prm_fvimage";

//  自己紹介の表示画像一覧の場所
const profilePath = "./assets/image/person";

//
//      PRMのゲット
//

let members = [];

window.addEventListener('DOMContentLoaded', () =>{
    const urlpram = location.search;
    const pram = urlpram.replace("?id=", "");
    //  画像ファーストビューのパス
    //  JSON叩きます。
    fetch(JSONFilePath_PRM)
        .then(response => {
            return response.json();
        })
        .then(data => {
            //  データ処理
            //  JSONからデータ取得
            const id = data[pram][0]['groupID'];
            const title = data[pram][0]['title']
            const groupName = data[pram][0]['groupName'];
            const explain_short = data[pram][0]['explain_short'];
            const explain_long = data[pram][0]['explain_long'];
            const member = data[pram][0]['groupMember'];
            const prPoint = data[pram][0]['prPoint'];
            const youtubeURL = data[pram][0]['youtubeURL'];
            const memberData = data[pram][0]['memberNum'];
            
            members = memberData.split('、');

            //  メンバーの分割
            const groupMember = member.replace(/、/g," ・  ");


            //  エレメント取得 document.querySelector("");

            // const idElement = document.querySelector(".content--class");
            const titleElement = document.querySelector(".prm__content--ttl");
            const explainShortElement = document.querySelector(".prm__content--explain1");
            const explainLongElement = document.querySelector(".prm__content--explain2");
            const groupNameElement = document.querySelector(".prm__content--name");
            const groupMemberElement = document.querySelector(".prm__content--member");

            const prPointElement = document.querySelector(".prm__reason");
            const fvImageElement = document.querySelector(".content--prmFvImage");
            const YouTubeElement = document.querySelector(".prm__content--video");

            //  データからテキスト変換  elemet.textContent = "";

            // idElement.textContent = `No.${id}`;
            titleElement.textContent = title;
            explainShortElement.textContent = explain_short;
            YouTubeElement.textContent = youtubeURL;
            groupNameElement.innerHTML = groupName;
            groupMemberElement.textContent = groupMember;
            explainLongElement.textContent = explain_long;
            prPointElement.textContent = prPoint;

            //  ファーストビューの処理
            // fvImageElement.src = "https://placehold.jp/600x700.png";     // 仮置き
            fvImageElement.src = `${fvImage_Path}/fv_${id}.webp`;

            //  YouTubeの埋め込みリンク変更処理
            YouTubeElement.src = youtubeURL;
        })
        .catch(error => {
            // エラーが発生した場合の処理
            console.error('エラー(Jsonにデータがない場合があります):', error);
        });
        profileshows();
})




//  自己紹介一覧表示のJSON
function profileshows(){
    fetch(JSONFilePath_Profile)
        .then(response => {
            // レスポンスを JSON として解析
            return response.json();
        })
        .then(data => {
            const keys = Object.keys(data);
            //親要素を取得  ul要素を取得
            const profile_Parent = document.querySelector(".profile__list");
            for (let i = 0; i < members.length; i++) {
                //  親グループを作成（class="profile__item")

                let liElement = document.createElement("li");
                liElement.className = "profile__item";
                profile_Parent.appendChild(liElement);

                //  あらかじめ変数を入れる。
                const u = members[i];

                //  JSONの中身のdataをconstで定義
                const id = data[u][0]['class'];
                const name = data[u][0]['name'];
                const No = data[u][0]['number'];
                // console.log(id,name,image);  //  確認用

                //  エレメントの作成
                const groupElemet = document.createElement("div");
                const ImgElement = document.createElement("img");
                const idElement = document.createElement("h3");
                const TextElemet = document.createElement("div");
                const pElement = document.createElement("p");

                //  クラス名設定
                groupElemet.className = `profile__${id}`;
                groupElemet.id = `${id}`;
                ImgElement.className = "profile__item--headpic";
                idElement.className = "profile__item--number";
                pElement.className = "profile__item--name"; 
                TextElemet.className = "profile__area";

                //  中身設定    JSONから取り出す。

                // ImgElement.src = "https://placehold.jp/450x500.png";    //  偽物
                ImgElement.src = `${profilePath}/picture_${id}.webp`; //本当
                ImgElement.setAttribute('alt',`${name}さんの画像`);
                
                idElement.textContent = `No.${No}`;
                pElement.textContent = `${name}`;

                //  アペンド
                liElement.appendChild(groupElemet);
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
};



setTimeout(()=> {
    //  自己紹介部分
    const profileBox = document.querySelectorAll('.profile__item');

    profileBox.forEach(function(item){
        item.addEventListener('click', function(){
            const profile = item.querySelector("div");
            const getID = profile.getAttribute("id");
            location.href = "./profile.html" + `?id=${getID}`
        });
        console.log("処理完了");
    });
}, 2000);

