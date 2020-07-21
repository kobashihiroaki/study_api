<?php
header("Content-Type: application/json; charset=utf-8");

// ここからAPI処理を記述してください
$hostname = 'localhost';
$username = 'root';
$passwd = 'hiroaki';
$dbname = 'test';
$data = [];
$link =  mysqliconnect('localhost', 'root', 'hiroaki', 'test');
mysqli_set_charset($link, 'utf8');

if ($link !== FALSE) {
    $sql = "SELECT id, name, department, start_date FROM employees";
    $result = mysqli_query($link, $sql);
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    $json = json_encode($data);
    echo $json;
}
