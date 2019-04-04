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

## background-attachment : 이미지를 고정할지 스크롤할지를 선택
```html
<!DOCTYPE html>
<html>
<head>
<style>
body  {
  background-image: url("https://www.w3schools.com/cssref/img_tree.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
</head>
<body>
<p style="margin-bottom:1000px;">The background-image is fixed. Try to scroll down the page.</p>
<p>If you do not see any scrollbars, try to resize the browser window.</p>
</body>
</html>
```

## background : 단축 속성
```html
<!DOCTYPE html>
<html>
<head>
<style>
body  {
	background : gray url("https://www.w3schools.com/cssref/img_tree.gif") no-repeat fixed 10px 30px;
}
</style>
</head>
<body>
<p style="margin-bottom:1000px;">The background-image is fixed. Try to scroll down the page.</p>
<p>If you do not see any scrollbars, try to resize the browser window.</p>
</body>
</html>
```

## background-size : 바탕화면 사이즈
```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
  border: 2px solid black;
  padding: 25px;
  background: url("https://www.w3schools.com/images/compatible_chrome.gif");
  background-repeat: no-repeat;
  margin-bottom : 10px;
}
#ex1 {
  background-size: auto;
}
#ex2 {
  background-size: 300px;
}
#ex3 {
  background-size: 300px 10px;
}
#ex4 {
  background-size: 20%;
}
#ex5 {
  background-size: 100% 100%;
}
#ex6 {
  background-size: cover;
}
#ex7 {
  background-size: contain;
}
</style>
</head>
<body>
<div id="ex1">
  <p>background-size: auto</p>
</div>
<div id="ex2">
  <p>background-size: 300px</p>
</div>
<div id="ex3">
  <p>background-size: 300px 10px</p>
</div>
<div id="ex4">
  <p>background-size: 20%</p>
</div>
<div id="ex5">
  <p>background-size: 100% 100%</p>
</div>
<div id="ex6">
  <p>background-size: cover</p>
</div>
<div id="ex7">
  <p>background-size: contain</p>
</div>
</body>
</html>
```

## background-origin : 배경 이미지의 시작 위치를 정함
```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
  padding: 25px;
  background: url("https://www.w3schools.com/images/compatible_chrome.gif");
  background-repeat: no-repeat;
  margin-bottom : 30px;
  padding:25px;
  border:10px dotted #000000;
}
#ex1 {
  background-origin:padding-box;
}
#ex2 {
  background-origin:border-box;
}
#ex3 {
  background-origin:content-box;
}
</style>
</head>
<body>
<div id="ex1">
  <p>background-origin:padding-box</p>
</div>
<div id="ex2">
  <p>background-origin:border-box</p>
</div>
<div id="ex3">
  <p>background-origin:content-box</p>
</div>
</body>
</html>
```

## background-clip : 배경색을 어디까지 칠해 줘야 하는지 결정
```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
  padding: 25px;
  background-color : yellow;
  margin-bottom : 30px;
  padding:25px;
  border:10px dotted #000000;
}
#ex1 {
  background-clip:border-box;
}
#ex2 {
  background-clip:padding-box;
}
#ex3 {
  background-clip:content-box;
}
</style>
</head>
<body>
<div id="ex1">
  <p>background-clip:border-box</p>
</div>
<div id="ex2">
  <p>background-clip:padding-box</p>
</div>
<div id="ex3">
  <p>background-clip:content-box</p>
</div>
</body>
</html>
```

## linear-gradient : background 에 그라데이션 표현
```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
  padding: 25px;
  background-color: red;/*gradients를 지원하지 않는 브라우저를 위해*/
  margin-bottom : 30px;
  padding:25px;
}
#ex1 {
  background-image: linear-gradient(red, yellow);
}
#ex2 {
  background-image: linear-gradient(to right, red, yellow);
}
#ex3 {
  background-image: linear-gradient(to bottom right, red, yellow);
}
#ex4 {
  background-image: linear-gradient(90deg, red, yellow);
}
#ex5 {
  background-image: linear-gradient(red, yellow, green);
}
</style>
</head>
<body>
<div id="ex1">
  <p>background-image: linear-gradient(red, yellow)</p>
</div>
<div id="ex2">
  <p>background-image: linear-gradient(to right, red, yellow)</p>
</div>
<div id="ex3">
  <p>background-image: linear-gradient(to bottom right, red, yellow)</p>
</div>
<div id="ex4">
  <p>background-image: linear-gradient(90deg, red, yellow)</p>
</div>
<div id="ex5">
  <p>background-image: linear-gradient(red, yellow, green)</p>
</div>
</body>
</html>
```