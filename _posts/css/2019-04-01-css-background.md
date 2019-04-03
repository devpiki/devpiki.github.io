---
layout: post
title: "background"
date: 2019-04-01 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## background-color
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title></title>
<style>
body {background-color : #000000;}
p.a {background-color : red;}
p.b {background-color : #ff9900;}
p.c {background-color : rgb(255,130,255)}
p.d {background-color : rgba(255,130,255,.5)}
p.e {background-color : transparent;color :white;}
</style>
</head>
<body>
<p class="a">test123</p>
<p class="b">test123</p>
<p class="c">test123</p>
<p class="d">test123</p>
<p class="e">test123</p>
</body>
</html>
```

## background-image
```html
<!DOCTYPE html>
<html>
<head>
<style>
body  {
  background-image: url("https://www.w3schools.com/cssref/paper.gif");
  background-color: #cccccc;
}
</style>
</head>
<body>
<h1>The background-image Property</h1>
<p>Hello World!</p>
</body>
</html>
```

## background-image : 2개
```html
<!DOCTYPE html>
<html>
<head>
<style>
body  {
  background-image: url("https://www.w3schools.com/cssref/img_tree.gif")
  	, url("https://www.w3schools.com/cssref/paper.gif");
  background-color: #cccccc;
}
</style>
</head>
<body>
<h1>The background-image Property</h1>
<p>Hello World!</p>
</body>
</html>
```

## background-image : 2개
```html
<!DOCTYPE html>
<html>
<head>
<style>
body  {
  background-image: url("https://www.w3schools.com/cssref/img_tree.gif")
  	, url("https://www.w3schools.com/cssref/paper.gif");
  background-color: #cccccc;
}
</style>
</head>
<body>
<h1>The background-image Property</h1>
<p>Hello World!</p>
</body>
</html>
```

## background-repeat : 배경 이미지 반복
```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
	background-image: url("https://www.w3schools.com/cssref/w3css.gif");
	width : 100%;
	height : 110px;
	margin : 10px 0;
}
div.a  {background-repeat:repeat;}
div.b  {background-repeat:no-repeat;}
div.c  {background-repeat:repeat-x;}
div.d  {background-repeat:repeat-y;}
div.e  {background-repeat:space;}
div.f  {background-repeat:round;}
</style>
</head>
<body>
<div class="a">test123</div>
<div class="b">test123</div>
<div class="c">test123</div>
<div class="d">test123</div>
<div class="e">test123</div>
<div class="f">test123</div>
</body>
</html>
</html>
```

## background-position : 배경 이미지의 위치
```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
	background-image: url("https://www.w3schools.com/images/compatible_chrome.gif");
	width : 100%;
	height : 100px;
	margin : 10px 0;
	background-repeat:no-repeat;
	border: 1px solid red;
}
div.a  {background-position:left;}
div.b  {background-position:right;}
div.c  {background-position:center;}
div.d  {background-position:top;}
div.e  {background-position:center;}
div.f  {background-position:bottom;}
div.g  {background-position:50% 50%;}
</style>
</head>
<body>
<div class="a"></div>
<div class="b"></div>
<div class="c"></div>
<div class="d"></div>
<div class="e"></div>
<div class="f"></div>
<div class="g"></div>
</body>
</html>
```

