<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8"/>
    <link rel="shortcut icon" href="/image/favicon.ico">
    <title> ${posts.title} | 举个栗子 </title>
    <meta name="KEYWords" contect="${posts.title}">
    <meta name="DEscription" contect="${posts.title}">
    <meta name="Author" contect="kk">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <script type="text/javascript" src="https://api.lwl12.com/hitokoto/main/get?encode=js&charset=utf-8"></script>
    <link rel="stylesheet" href="/css/1.css">
    <link rel="stylesheet" href="/css/2.css">
    <link rel="stylesheet" href="/css/3.css">
    <link rel="stylesheet" href="/css/mdstyle.css"/>
    <link rel="stylesheet" href="/css/editormd.css"/>
</head>

<body id="menu">
<form method="GET" action="/search" role="search" class="js-search search-form search-form--modal">
    <div class="search-form__inner">
        <div>
            <p class="micro mb-"> 输入后按回车搜索 ...</p>
            <a id="soux" href="" data-instant>
                <i class="icon-search"></i>
            </a>
            <input id="keyword" class="text-input" type="search" name="keyword" placeholder="Search" required="">
        </div>
    </div>
    <div class="search_close" onclick="$.Close()"></div>
</form>
<sidebar id="sidebar">
    <a href="/index">
        <div class="tx">
            <img class="b-lazy" src="/image/ban.jpg" data-src="/image/ban.jpg" itemprop="image" data-no-instant>
            <span> 举个栗子 </span>
        </div>
    </a>
    <ul class="cd">
        <li>
            <a class="" href="/index" title=" 主页 ">
                <i class="iconfont icon-quan"></i>
                <span> 主页 </span>
            </a>
        </li>
        <li>
            <a class="" href="/categories" title=" 分类 ">
                <i class="iconfont icon-kongxing"></i>
                <span> 分类 </span>
            </a>
        </li>
        <li>
            <a class="" href="/history" title=" 归档 ">
                <i class="iconfont icon-openwj"></i>
                <span> 归档 </span>
            </a>
        </li>

        <li>
            <a class="" href="/link" title=" 友链 ">
                <i class="iconfont icon-aite"></i>
                <span> 友链 </span>
            </a>
        </li>
        <li>
            <a class="" href="/about" title=" 关于 ">
                <i class="iconfont icon-wo"></i>
                <span> 关于 </span>
            </a>
        </li>
    </ul>
    <ul class="cd minx">
        <li class="maxico">
            <a class="inline" rel="nofollow" target="_blank" href="https://github.com/keFengis">
                <i class="iconfont icon-github"></i>
            </a>
            <a class="inline" rel="nofollow" target="_blank" href="">
                <i class="iconfont icon-weibo"></i>
            </a>
            <a class="inline" target="_blank" href="">
                <i class="iconfont icon-rss"></i>
            </a>
            <a class="inline" id="sousuo" onclick="$.Sousuo()">
                <i class="iconfont icon-search"></i>
            </a>
        </li>
    </ul>
</sidebar>
<div id="header" class="header">
    <div class="sjcd" id="sjcd" onclick="$.Menu()">
        <i></i>
    </div>
    <h1>
        <a href="/index">举个栗子</a>
    </h1>
    <a class="me" href="/about">
        <img class="b-lazy" src="/image/ban.jpg" data-src="/image/ban.jpg" itemprop="image" data-no-instant>
    </a>
</div>
<div class="bug">
    <div id="bug">
        <div id="main" class="main">
            <article>
                <div id="post" class="post">
                    <br>
                    <h1>${posts.title}</h1>
                    <div class="meta">
                        <time itemprop="datePublished">${posts.date} |
                            <c:forEach items="${classList}" var="type">
                                <c:if test="${type.classcode eq posts.type}">
                                    <a href="/classify/${type.classcode}">${type.classname}</a>
                                </c:if>
                            </c:forEach> | admin
                        </time>
                    </div>
                    <div class="content" id="htmlcontent">
                        <br>
                        <br>
                    </div>
                    <div class="post-left tagses" style="float: none;">
                        <div class="ad" id="hitokoto">
                            <script>
                                lwlhitokoto()
                            </script>
                        </div>
                    </div>
                    <nav class="page">
                        <a class="btn--one fenx" href="/archives/${np.id}" data-tooltip="${np.title}">
                            <i class="iconfont icon-zuo"></i>
                            <span class="hide-xs hide-sm text-small ml">PREVIOUS</span>
                        </a>
                        <a class="btn--one fenx nextright" href="/archives/${bp.id}" data-tooltip="${bp.title}">
                            <span class="hide-xs hide-sm text-small mr">NEXT</span>
                            <i class="iconfont icon-you"></i>
                        </a>
                        <div class="page-right fenxiang" id="fenxiang">
                            <a id="qq" class="btn--one two" target="_blank"
                               href="http://connect.qq.com/widget/shareqq/index.html?url=http://www.flydogx64.cn/archives/${posts.id}&title=${posts.title}&pics=http://www.flydogx64.cn/image/ban.jpg"
                               data-tooltip="分享至 QQ 好友">
                                <i class="iconfont icon-qq"></i>
                            </a>
                            <a id="qqkj" class="btn--one two" target="_blank"
                               href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.flydogx64.cn/archives/${posts.id}&title=${posts.title}&title=${posts.title}&&site= 科峰の博客 /&pics=http://www.flydogx64.cn/image/ban.jpg"
                               data-tooltip="分享至 QQ 空间">
                                <i class="iconfont icon-qqkj"></i>
                            </a>
                            <a id="sina" class="btn--one two" target="_blank"
                               href="http://service.weibo.com/share/share.php?http://www.flydogx64.cn/archives/${posts.id}&appkey= 科峰の博客 /&title=${posts.title}&&pic=http://www.flydogx64.cn/image/ban.jpg"
                               data-tooltip="分享至新浪微博">
                                <i class="iconfont icon-weibo"></i>
                            </a>
                        </div>
                    </nav>
                    <div id="comments">
                        <div id="respond-post-1222" class="respond" data-no-instant>
                            <div id="comment-form" role="form">
                                    <span id="author_info">
                                        <input type="text" name="user" maxlength="12" id="author" class="form-control"
                                               placeholder="称呼 *">
                                        <input type="email" name="email" id="mail" class="form-control"
                                               placeholder="电子邮箱选填">
                                        <input type="url" name="site" id="url" class="form-control"
                                               placeholder="你的网站选填(http://)"> </span>
                                <textarea name="body" id="textarea" class="form-control"
                                          placeholder="在这里输入你的评论..."></textarea>
                                <span>
                                        <button class="submit" id="misubmit">提交评论</button>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div class="info-com"> 已有
                        <span class="comment-num"><span id="comnum">${commentnum}</span></span> 条评论
                    </div>
                    <div id="comm">

                    </div>
                    </span>
                    <div id="loading">
                        <div class="cssload-loader">
                            <div class="cssload-inner cssload-one"></div>
                            <div class="cssload-inner cssload-two"></div>
                            <div class="cssload-inner cssload-three"></div>
                        </div>
                    </div>
                </div>
            </article>
            <footer id="footer" class="footer">
                © 2018&nbsp;举个栗子.Theme by YoDu&nbsp;
                <br>
            </footer>
        </div>
    </div>
</div>
</body>
<script src="/js/1.js" data-no-instant></script>
<script src="/js/2.js" type="text/javascript"></script>
<script src="/js/3.js" data-no-instant></script>
<script src="/js/4.js" data-no-instant></script>
<script src="/js/5.js" data-no-instant></script>
<script src="/js/6.js" data-no-instant></script>
<script src="/js/7.js" data-no-instant></script>
<script src="/js/8.js" data-no-instant></script>
<script src="/js/showdown.min.js"></script>
<script>
    /*异步加载内容和评论*/
    $(function () {
        $.get("/content/${posts.id}", function (data, status) {
            converter = new showdown.Converter();
            text = data;
            html = converter.makeHtml(text);
            $("#htmlcontent").html('<br>' + html + '<br><br>');
            $("#htmlcontent").hide();
            $("#htmlcontent").fadeIn(2000);
        });
        $.get("/comments/${posts.id}",
            function (data, status) {
                $("#comm").html(data.split('+-*/')[0]);
                $("#comnum").html(data.split('+-*/')[1])
                $("#comm").hide();
                $("#comm").fadeIn(2000);
            });
    });
    $("#misubmit").click(function () {
        if ($("#author").val() && $("textarea").val()) {
            $.post("/comment/save", {
                    body: $("#textarea").val(),
                    user: $("#author").val(),
                    email: $("#mail").val(),
                    postid: "${posts.id}",
                    site: $("#url").val()
                },
                function (data) {
                    $("#comm").html(data.split('+-*/')[0]);
                    $("#comnum").html(data.split('+-*/')[1])
                    $("#comm").hide();
                    $("#comm").fadeIn(2000);
                    var h = $(document).height() - $(window).height();
                    $(document).scrollTop(h);
                })
        } else {
            alert("称呼和评论内容是必填的哦。");
            return;
        }
    });
    /*异步同步评论*/
    commentform = '<div id="comment-form-reply" class="comment-form-reply" role="form" style="text-align: center">' +
        ' <span id="author_info">\n' +
        '<input type="text" name="ruser" maxlength="12" id="rauthor" ' +
        ' class="rform-control" placeholder="称呼 *"><br>' +
        ' <input type="text" name="remail" id="rmail" class="form-control"' +
        '   placeholder="电子邮箱选填"><br>' +
        '  <input type="text" name="site" id="rurl" class="form-control"' +
        '  placeholder="你的网站选填(http://)"> </span><br>' +
        ' <textarea name="body" id="rtextarea" ' +
        '   class="rform-control" placeholder="在这里输入你的评论..." cols="20" rows="10"></textarea><br>' +
        '   <span><button class="submit" onclick="replyTo()">提交评论</button></span>' +
        '  </div>';

    function reply(cid) {
        $("#savecid").val(cid)
        text = '取消回复&nbsp;&nbsp&nbsp&nbsp&nbsp';
        id = "#comment-" + cid;
        tsid = "#ts-" + cid;
        if ($(tsid).html() == '取消回复&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;') {
            $(".comment-form-reply").html('');
            $(tsid).html('回复&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
            return;
        }
        $(".comment-form-reply").html('');
        $(".ts").html('回复&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        $(tsid).html(text);
        $(id).append(commentform);
    }

    /**回复评论,存库*/
    function replyTo() {
        if ($(".rform-control").val() && $(".rform-control").val()) {
            $.post("/comment/save", {
                    body: $("#rtextarea").val(),
                    user: $("#rauthor").val(),
                    email: $("#rmail").val(),
                    postid: "${posts.id}",
                    site: $("#rurl").val(),
                    commentid: $("#savecid").val()
                },
                function (data) {
                    $("#comm").html(data.split('+-*/')[0]);
                    $("#comnum").html(data.split('+-*/')[1])
                    $("#comm").hide();
                    $("#comm").fadeIn(2000);
                    var h = $(document).height() - $(window).height();
                    $(document).scrollTop(h);
                })
        } else {
            alert("称呼和评论内容是必填的哦。");
            return;
        }
    }
</script>
</html>