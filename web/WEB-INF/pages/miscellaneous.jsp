<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <link rel="shortcut icon" href="/image/favicon.ico">
    <title> ${posts.title} | 举个栗子 </title>
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
    <div class="sjcd" onclick="$.Menu()">
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
                    <h1>${posts.title}</h1>
                    <div class="meta">
                        <time itemprop="datePublished">${posts.date} | ${posts.title}</time>
                    </div>
                    <div class="content" id="htmlcontent"></div>
                    <div class="post-left tagses" style="float: none;">
                        <div class="ad" id="hitokoto">
                            <script>
                                lwlhitokoto()
                            </script>
                        </div>
                    </div>
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
                        <span class="comment-num">${commentnum}</span> 条评论
                    </div>
                    <span id="loadxiaoshi">
                            <ol class="comment-list">
                                <c:forEach items="${commentList}" var="item">
                                    <li data-no-instant class="comment-body comment-parent comment-even">
                                        <div class="comment-id">
                                            <a href="${item.site}" target="_blank" rel="external nofollow">
                                                <img class="avatar" src="/image/3.jpg" alt=""/>
                                            </a>
                                            <div class="comment-main">
                                                <div class="comment-author">
                                                    <a href="${item.site}" target="_blank"
                                                       rel="external nofollow">${item.user}</a>
                                                    <div class="comment-meta">
                                                        <time class="comment-time">${item.date}</time>
                                                    </div>
                                                </div>
                                                <p> ${item.body}</p>
                                            </div>
                                        </div>
                                    </li>
                                </c:forEach>
                            </ol>
                        </span>
                    <div id="loading">
                        <div class="cssload-loader">
                            <div class="cssload-inner cssload-one"></div>
                            <div class="cssload-inner cssload-two"></div>
                            <div class="cssload-inner cssload-three"></div>
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
</div>
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
    $(document).ready(function () {
        $("#misubmit").click(function () {
            if ($("#author").val() && $("textarea").val()) {
                $.post("/comment/save", {
                        body: $("#textarea").val(),
                        user: $("#author").val(),
                        email: $("#mail").val(),
                        postid: "${posts.id}",
                        site: $("#url").val()
                    },
                    function () {
                        window.location.reload();
                    })
            } else {
                alert("称呼和评论内容是必填的哦。");
                return;
            }
        });
    });
</script>
<script>
    $(function () {
        $.get("/content/${posts.id}", function (data, status) {
            converter = new showdown.Converter();
            text = data;
            html = converter.makeHtml(text);
            $("#htmlcontent").html('<br>' + html + '<br><br>');
            $("#htmlcontent").hide();
            $("#htmlcontent").fadeIn("slow");
        });
    });
</script>
</body>
</html>