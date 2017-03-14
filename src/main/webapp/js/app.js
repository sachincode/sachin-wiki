ace.settings.check('sidebar' , 'collapsed');

function message(text) {
	$("#g-message").removeClass().addClass("alert alert-block alert-success").text(text).show(100);
	$("#g-message").click(function() {
		$("#g-message").hide();
	});
	setTimeout(function() {
		$("#g-message").fadeOut();
	}, 3000);
}

function error(text) {
	$("#g-message").text(text).removeClass().addClass("alert alert-block alert-danger").show(100);
	$("#g-message").click(function() {
		$("#g-message").hide();
	});
}

var setting = {
    view: {
        fontCss: getFont,
        showIcon: false
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeClick: beforeClick,
        onClick: onClick
    }
};

function getFont(treeId, node) {
    return node.font ? node.font : {};
}

function beforeClick(treeId, treeNode, clickFlag) {
    console.log("[ beforeClick ] " + treeNode.id + ": " + treeNode.name );
    return (treeNode.click != false);
}

/**
 *
 * @param event
 * @param treeId zTree元素的id
 * @param treeNode zTree的节点
 * @param clickFlag 1 普通选中, 0 取消选中(ctrl+)
 */
function onClick(event, treeId, treeNode, clickFlag) {
    console.log("[ onClick ] clickFlag = " + clickFlag + " (" + (clickFlag===1 ? "普通选中": (clickFlag===0 ? "<b>取消选中</b>" : "<b>追加选中</b>")) + ")");
    window.location.href = "viewPage.do?wikiId=" + treeNode.id;
}

function createWikiCatalog(zNodes) {
    $.fn.zTree.init($("#treeWikiCatalog"), setting, zNodes);
}

$(document).ready(function () {
    var url = "getCatalogTree.do";
    if (window.location.pathname == "/viewPage.do") {
        url = url + window.location.search
    }
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data){
            console.log(data);
            createWikiCatalog(data);
        },
        error: function(data) {
            alert("获取WIKI目录失败！")
        }
    });
});
