/* ***

* 
* By: Morizunzhu
* Last Update: 2020.1.14

*** */
$(document).ready(function () {
    //页脚版权信息
    var copyrightInfo =
        '<div class="github-badge">\n' +
        '    <a href="http://www.typecho.org" target="_blank" title="由Typecho强力驱动">\n' +
        '        <span class="badge-subject">Powered</span>\n' +
        '        <span class="badge-value bg-blue">Typecho</span>\n' +
        '    </a>\n' +
        '</div>' +
        '&nbsp;|&nbsp;\n' +
        '<div class="github-badge">\n' +
        '    <a href="https://www.ihewro.com/archives/489/" target="_blank" title="站点使用Handsome主题，作者：友人C">\n' +
        '        <span class="badge-subject">Theme</span>' +
        '        <span class="badge-value bg-orange">Handsome</span>\n' +
        '    </a>\n' +
        '</div>' +
        '&nbsp;|&nbsp;\n' +
        '<div class="github-badge">\n' +
        '    <a href="http://www.cloudmo.top" target="_blank" title="Handsome由就当一次路过丶修改">\n' +
        '        <span class="badge-subject">Modified</span>' +
        '        <span class="badge-value bg-red">就当一次路过丶</span>\n' +
        '    </a>\n' +
        '</div>';
    //备案号信息
    var recodeInfo =
        '<div class="github-badge">\n' +
        '    <a href="" target="_blank" title="">\n' +
        '        <span class="badge-subject">Copyright</span>' +
        '        <span class="badge-value bg-blue">©2019-2020</span>\n' +
        '    </a>\n' +
        '</div>' +
        '&nbsp;|&nbsp;\n' +
        '<div class="github-badge">\n' +
        '    <a href="http://www.beian.miit.gov.cn" target="_blank" title="">\n' +
        '        <span class="badge-subject">苏</span>' +
        '        <span class="badge-value bg-brightgreen">ICP备19037502号</span>\n' +
        '    </a>\n' +
        '</div>';
    $('#footer span.pull-right').html(copyrightInfo);
    $('#footer span.text-ellipsis').last().html(recodeInfo);

    $("body").prepend("<canvas id='stage1' class='stage' style='position: fixed;'></canvas>")


    $(".post-thumbnail >a").each(function (index, element) {
        var item = document.createElement("div");
        $(item).css("width", "100%");
        $(item).addClass("post-thumbnail-inner-modal ");
        // $(item).css("background-color","rgba(0, 0, 0, 0.3)");
        $(this).append(item);
    });

    $(".panel-picture header").each(function (index, element) {
        var top = $(this).find("h3 a span");
        $(this).prepend(top);
        $(this).find("h3 a span").remove();
    });

    setTimeout(function () {
        document.querySelector(".skPlayer-source").volume = 0.12;
    }, 3000);
})