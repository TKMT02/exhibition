//
//  読み込みのスクリプト
//

// 選ばれた作品（select=GP,H101)を読み込んで、
// 番号と名前と作品と画像を取得する。
// input要素にも出力をする
// それをhtmlに出力する。

const JSONFilePath_PRM = "../assets/json/prm_content.json";

const JSONFilePath_Profile = "../assets/json/profile_content.json";

const prmPath = "../assets/image/prm_fvimage";

const portfolioPath = "../assets/image/portfolio_fvimage";

window.addEventListener("DOMContentLoaded", () =>{
    //  PRAMを取得
    const NowURL = location.search;
    let pram = NowURL.replace("?select=", "").slice(0,2);
    const Nodata = NowURL.replace("?select=", "");
    console.log(pram);
    console.log(Nodata);
    if(Nodata == "all"){
        //  出力先を決める。
        const NoElement = document.querySelector(".select__no");
        const NameElement = document.querySelector(".select__name");
        const TitleElement = document.querySelector(".select__title");
        const ImageElement = document.querySelector(".select__image");

        //  出力する。

        NoElement.textContent = `No.00`;
        NameElement.textContent = "ウェブ・メディア科";
        TitleElement.textContent = "2023年度展示会";
        ImageElement.src = "../assets/image/logo.svg";

        //  インプットのValueに値を入力
        document.querySelector(".workID").value = `00`;
        document.querySelector(".workGenre").value = "展示会全体";
        document.querySelector(".workNo").value = `00`;
        document.querySelector(".workName").value = "ウェブ・メディア科";
        document.querySelector(".workTitle").value = "2023年度展示会";
        document.querySelector(".workImage").value = "../assets/image/logo.svg";
        exit();
    };
    if(pram == "GP"){
        //  JSONを取得
        fetch(JSONFilePath_PRM)
        .then(responce => {
            return responce.json();
        })
        .then(data => {
            const key = Object.keys(data);

            let i = 0;
            while ( Nodata !== key[i]){
                i = i + 1;
            }

            const keys = key[i];


            //  親要素を取得
            const id = data[keys][0]['groupID'];
            const groupName = data[keys][0]['groupName'];
            const title = data[keys][0]['title'];
            const image = `fv_${id}.webp`;
            const No = id.slice(2,4);

            //  出力先を決める。
            const NoElement = document.querySelector(".select__no");
            const NameElement = document.querySelector(".select__name");
            const TitleElement = document.querySelector(".select__title");
            const ImageElement = document.querySelector(".select__image");

            //  出力する。

            NoElement.textContent = `No.${No}`;
            NameElement.textContent = groupName;
            TitleElement.textContent = title;
            ImageElement.src = `${prmPath}/${image}`;

            //  インプットのValueに値を入力
            document.querySelector(".workID").value = `${id}`;
            document.querySelector(".workGenre").value = "進級制作";
            document.querySelector(".workNo").value = `${No}`;
            document.querySelector(".workName").value = groupName;
            document.querySelector(".workTitle").value = title;
            document.querySelector(".workImage").value = `${prmPath}/${image}`;
        })
    }
    
    else if(pram == "H1" || "G1"){
        //  JSONを取得
        fetch(JSONFilePath_Profile)
        .then(responce => {
            return responce.json();
        })
        .then(data => {
            const key = Object.keys(data);
            
            let i = 0;
            while ( Nodata !== key[i]){
                i = i + 1;
            }
            
            //  親要素を取得
            const keys = key[i];
            const id = data[keys][0]['class'];
            const name = data[keys][0]['name'];
            const title = "ポートフォリオ";
            const image = `fv_${id}.webp`;
            const No = data[keys][0]['number'];

            //  出力先を決める。
            const NoElement = document.querySelector(".select__no");
            const NameElement = document.querySelector(".select__name");
            const TitleElement = document.querySelector(".select__title");
            const ImageElement = document.querySelector(".select__image");

            //  出力する。

            NoElement.textContent = `No.${No}`;
            NameElement.textContent = name;
            TitleElement.textContent = title;
            ImageElement.src = `${portfolioPath}/${image}`;

            //  インプットのValueに値を入力
            document.querySelector(".workID").value = `${id}`;
            document.querySelector(".workGenre").value = "ポートフォリオ";
            document.querySelector(".workNo").value = `${No}`;
            document.querySelector(".workName").value = name;
            document.querySelector(".workTitle").value = title;
            document.querySelector(".workImage").value = `${portfolioPath}/${image}`;
        })
    };
});

//
//
//
//  正規表現

window.addEventListener("DOMContentLoaded", () =>{
    const inputElement = document.querySelectorAll('#InputElement');
    inputElement.forEach(function(item){
        item.addEventListener('input', function () {
            let inputValue = item.value;
            let sanitizedValue = inputValue.replace(/[\s　]/g, ''); 
            item.value = sanitizedValue;
        });
    })

});