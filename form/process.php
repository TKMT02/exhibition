<?php
    // SQLiteデータベースに接続
    $db = new SQLite3('db/form.db');
    // POSTデータを取得
    //  作品取得する必要あり※
    $form_name = $_POST['name'];
    $form_select = $_POST['select'];
    $form_advice = $_POST['advice'];
    $form_other = $_POST['other'];
    $form_workID =$_POST['workID'];
    $form_workGenre =$_POST['workGenre'];
    $form_data = date("n.j G:i:s");
    //  
    // 投稿をデータベースに挿入
    $query = "INSERT INTO form(workid, workgenre, username, selects, advice, other, date) VALUES ('$form_workID', '$form_workGenre', '$form_name', '$form_select', '$form_advice', '$form_other', '$form_data')";
    $db->exec($query);

    // ページをリダイレクトして再読み込み
    header("Location: form_complete.html");
    exit;
?>


