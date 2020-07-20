// 「Ajax通信スタート！」ボタンが押された時の処理
document.getElementById("api_action").addEventListener("click", function() {
    alert("社員一覧を表示します");
    // 通信先のURLです

    const requestUrl = "api/list.php";

    // ここからAjax通信処理を記述してください
    fetch(requestUrl)
    .then(function (response) {
    	return response.json();
    })
    .then(function (json) {
    	console.log(json);
//    	document.getElementById
    })
});

