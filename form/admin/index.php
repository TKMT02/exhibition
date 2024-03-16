<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>投稿管理画面</title>
    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">
</head>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    table{
        border: solid 2px rgb(0, 0, 0);
        border-collapse: collapse;
        width: 100%;
    }

    tr{
        width: 300px;
        border: 1px solid #000;
    }

    th,td{
        border: 1px solid #000;
    }

    .number{
        width: 35px;
        padding: 0;
    }

    .time, .workid, .workgenre{
        width: 85px;
        font-size: 12px;
    }

    .person{
        width: 150px;
    }

    .long{
        width: 520px;
    }

    .right{
        text-align: right;
    }
</style>
<body>
    <h1>アンケート結果確認ページ</h1>
    <table>
        <tr>
            <th class="number">連番</th>
            <th class="time">入力時刻</th>
            <th class="workid">作品番号</th>
            <th class="workgenre">作品種類</th>
            <th class="person">評価した人</th>
            <th>区分</th>
            <th class="long">アドバイスや良い点</th>
            <th class="long">その他</th>
        </tr>
    <?php
    // SQLiteデータベースに接続
    $db = new SQLite3('../db/form.db');

    // 投稿を取得するクエリ
    $query = "SELECT * FROM form";

    //  データ挿入
    $result = $db->query($query);

    // HTMLで投稿を表示
    ?>


    <?php
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        echo '<tr>';
        echo '<td class="right">' . $row['id'] . '</td>';
        echo '<td class="right">' . $row['date'] . '</td>';
        echo '<td class="right">' . $row['workid'] . '</td>';
        echo '<td class="workgenre">' . $row['workgenre'] . '</td>';
        echo '<td>' . $row['username'] . '</td>';
        echo '<td>' . $row['selects'] . '</td>';
        echo '<td>' . $row['advice'] . '</td>';
        echo '<td>' . $row['other'] . '</td>';
        echo '</tr>';
    }

    echo '</table>';


    //  -- sqlite3 CMD -- 
    //  .open --new forms.db
    //  create table form(id, username, selects, advice, other);
    //
    // CREATE TABLE forms(
    //     id INTEGER PRIMARY KEY,
    //     name TEXT,
    //     selects TEXT,
    //     advice TEXT,
    //     other TEXT
    // );

    ?>


</body>
</html>


</body>
</html>