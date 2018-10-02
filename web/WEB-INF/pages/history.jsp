<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8"/>
    <link rel="shortcut icon" href="/image/favicon.ico">
    <title> 文章归档 </title>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
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
<div id="zhezhao" onclick="$.Menu()"></div>
<div class="bug">
    <div id="bug">
        <div id="main" class="main">

            <article>
                <div id="post" class="post">
                    <h1 class="title"> 时间归档</h1>
                    <div id="archives" class="content">
                        <h5 class="archive-result text-color-base text-xlarge" data-message-zero="no post found"
                            data-message-one="1 post found"
                            data-message-other="{n} posts found"></h5>
                        <c:forEach items="${yearList}" var="years">
                            <div class="archive archive-year">
                                <h3>${years.year} 年</h3>
                                <c:forEach items="${monthList}" var="month">
                                    <c:if test="${years.year eq month.year}">
                                        <ul class="archive-posts archive-month" data-date="">
                                            <h4>
                                                <a class="guidang"
                                                   href="/records/${month.year}/${month.month}">${month.month} 月</a>
                                            </h4>
                                            <c:forEach items="${postList}" var="post">
                                                <c:if test="${post.year eq years.year && post.month eq month.month}">
                                                    <li class="li_guidang archive-post archive-day" data-date="">
                                                        <a class="guidang" href="/archives/${post.id}">${post.title}</a>
                                                    </li>
                                                </c:if>
                                            </c:forEach>
                                        </ul>
                                    </c:if>
                                </c:forEach>
                            </div>
                        </c:forEach>
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
<script src="/js/1.js" data-no-instant></script>
<script src="/js/2.js" type="text/javascript"></script>
<script src="/js/3.js" data-no-instant></script>
<script src="/js/4.js" data-no-instant></script>
<script src="/js/5.js" data-no-instant></script>
<script src="/js/6.js" data-no-instant></script>
<script src="/js/7.js" data-no-instant></script>
<script src="/js/8.js" data-no-instant></script>
</body>

</html>