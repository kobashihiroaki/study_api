// 「Ajax通信スタート！」ボタンが押された時の処理
document.getElementById("api_action").addEventListener("click", function() {
    alert("社員一覧を表示します");
    // 通信先のURLです

    const requestUrl = "api/list.php";

    // ここからAjax通信処理を記述してください
    fetch(requestUrl)
    .then(function (response) {
    	if (response.ok) {
    		return response.json();
	    } else {
	    	alert ("エラーです");
	    	exit;
	    }
    })
    .then(function (json) {
//    	console.log(json);
//    	if (Array.isArray(json) === FALSE) {
//    		alert('エラー');
//    		exit;
//    	}
    	let table = document.getElementById('api_list');
    	table.deleteRow(0);
    	let newRow;
    	let newCell;
    	let newText;
    	for (let i = 0; i < json.length; i++) {
    		newRow = table.insertRow();
        	newCell = newRow.insertCell();
        	newText = document.createTextNode(json[i]['id']);
        	newCell.appendChild(newText);
        	newCell = newRow.insertCell();
        	newText = document.createTextNode(json[i]['name']);
        	newCell.appendChild(newText);
        	newCell = newRow.insertCell();
        	newText = document.createTextNode(json[i]['department']);
        	newCell.appendChild(newText);
        	newCell = newRow.insertCell();
        	newText = document.createTextNode(json[i]['start_date']);
        	newCell.appendChild(newText);
    	}

    })
    .catch(e => {
    	alert("エラー");
    })
});

