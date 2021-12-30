/*******↓*我的 ajax*↓*******/

function doAjax0(url, onsuccess) {
    $.ajax({
        url: url,
        type: "GET",
        success: onsuccess,
        error: function (re) {
            alert("服务器错误： " + re.status);
        }
    });
}

function doAjax(url, data) {
    if(!confirm("确定操作？")) {
        return;
    }
    $.ajax({
        url: url,
        data: data,
        type: "POST",
        success: function (re) {
            // var job = JSON.parse(re);
            if (re.success) {
                alert(re.mess);
                location.reload();
                return;
            }
            alert(re.mess);
        },
        error: function (re) {
            alert("服务器错误： " + re.status);
        }
    });
}
