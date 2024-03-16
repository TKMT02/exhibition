<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2023年度 １年生の展示会アンケートフォーム</title>
    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://kit.fontawesome.com/a9e8ce8a3d.js" crossorigin="anonymous"></script>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZWKTS7GBBM"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ZWKTS7GBBM');
    </script>
</head>
<body>

    <?php
        //  作品取得
        $form_name = htmlentities($_POST['name'], ENT_QUOTES);
        $form_select = htmlentities($_POST['select'], ENT_QUOTES);
        $form_advice = htmlentities($_POST['advice'], ENT_QUOTES);
        $form_other = htmlentities($_POST['other'], ENT_QUOTES);

        $form_workID = htmlentities($_POST['workID'], ENT_QUOTES);
        $form_workNo = htmlentities($_POST['workNo'], ENT_QUOTES);
        $form_workName = htmlentities($_POST['workName'], ENT_QUOTES);
        $form_workTitle = htmlentities($_POST['workTitle'], ENT_QUOTES);
        $form_workImage = htmlentities($_POST['workImage'], ENT_QUOTES);
        $form_workGenre = htmlentities($_POST['workGenre'], ENT_QUOTES);

        $confirm_name = trim($form_name);
        if(empty($confirm_name)){
            $error[] = "不備：お名前 <br> 入力し直しをお願いします。";
        }
        $confirm_text = trim($form_advice);
        if(empty($confirm_text)){ 
            $error[] = "不備：良かった点 <br> 入力し直しをお願いします。";
        }

        if(empty($form_other )){
            $form_other = "なし";
        }

    ?>

    <header>
        <div class="mainvisual"></div>
    </header>
    <div class="shapes">
        <div class="shapes_diagonal"></div>
        <div class="shapes_diagonal_1"></div>
    </div>
    <div class="container">
        <h1 class="title">１年生展示会アンケート確認画面</h1>
        <p class="lore">回答の内容をご確認ください。</p>

        <?php if(empty($error)) : ?>
            <form action="process.php" method="post">
                <!--フォーム-->
                
                <input type="hidden" name="name" value="<?php echo $form_name; ?>">
                <input type="hidden" name="select" value="<?php echo $form_select; ?>">
                <input type="hidden" name="advice" value="<?php echo $form_advice; ?>">
                <input type="hidden" name="other" value="<?php echo $form_other; ?>">
                <!--作品選択の画面追加-->

                <div class="select__container">
                    <div class="wrap">
                        <h2 class="select__no">No.<?php echo $form_workNo ?></h2>
                        <p>名　前：<span class="select__name"><?php echo $form_workName ?></span></p>
                        <p>作品名：<span class="select__title"><?php echo $form_workTitle ?></span></p>
                    </div>
                    <img src="<?php echo $form_workImage ?>" alt="選択された画像" class="select__image"/>

                    <input type="hidden" name="workID" value="<?php echo $form_workID ?>" class="workID">
                    <input type="hidden" name="workGenre" value="<?php echo $form_workGenre ?>" class="workGenre">

                </div>    

                <div class="confirm_box">
                    <div class="confirm_container">
                        <h2>お名前</h2>
                        <p>
                            <?php echo "$form_name"; ?>  
                        </p>
                        <h2>区分</h2>
                        <p>
                            <?php echo "$form_select"; ?>
                        </p>

                        <h2>良かった点・アドバイス</h2>
                        <p>
                            <?php echo "$form_advice"; ?>
                        </p>

                        <h2>その他・伝えたいこと</h2>
                        <p> 
                            <?php echo "$form_other"; ?></p>
                    </div>
                </div>

                <!--送信内容-->

                <div class="btn_container">
                    <button type="button" class="cfm_btn backbtn">入力画面に戻る</button>
                    <button type="submit" class="cfm_btn submit">送　信</button>
                </div>
            </form>
        <?php else : ?>
            <h2 class="error_message_h">入力に不備があります。</h2>
            <?php foreach ($error as $value) : ?>
                <p class="error_message_p"><?php echo $value; ?></p>
                <button type="button" class="cfm_btn backbtn" id="back">入力画面に戻る</button>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
    <footer class="footer">
        <p class="copyright">© 2024 東京電子専門学校1年生 展示会委員会</p>
    </footer>
    <script>
        document.querySelector(".backbtn").addEventListener("click", () =>{
            history.back();
        });
    </script>
</body>
</html>