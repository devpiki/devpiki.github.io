---
layout: post
title: "position, z-index"
date: 2019-04-02 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## static, relative, absolute, fixed
```html
<!DOCTYPE html>
<html>
<head>
<style>
div{border: 3px solid #73AD21;}
div.s {
	position: static;
}
div.r {
  position: relative;
  left: 30px;
  top : 10px;
}
div.a {
  position: absolute;
  left: 30px;
  top : 10px;
}
div.f {
  position: fixed;
  right: 0;
  bottom : 0;
}
</style>
</head>
<body>
<div class="s">
This div element has position: static;
</div>
<div class="r">
This div element has position: relative;
</div>
<div class="a">
This div element has position: absolute;
</div>
<div class="f">
This div element has position: fixed;
</div>
</body>
</html>
```

## relative, absolute 의 관계
```html
<!DOCTYPE html>
<html>
<head>
<style>
div{border: 3px solid #73AD21;}
div.r {
  position: relative;
  left: 30px;
  top : 10px;
  width : 50%;
  height :500px;
}
div.a {
  position: absolute;
  left: 100px;
  top : 10px;
  width : 100px;
  height :100px;
}
</style>
</head>
<body>
<div class="r">
	<div class="a">This div element has position: absolute;</div>
</div>
</body>
</html>
```

## sticky
```html
<!DOCTYPE html>
<html>
<head>
<style>
div.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 5px;
  border: 2px solid #4CAF50;
}
</style>
</head>
<body>
<p>test123 test123 test123 test123 </p>
<p>test123 test123 test123 test123 </p>
<p>test123 test123 test123 test123 </p>
<div class="sticky">I am sticky!</div>
<div style="padding-bottom:2000px">
  <p>test123 test123 test123 test123 </p>
  <p>test123 test123 test123 test123 </p>
  <p>test123 test123 test123 test123 </p>
  <p>test123 test123 test123 test123 </p>
  <p>test123 test123 test123 test123 </p>
</div>
</body>
</html>
```

## left, top, right, bottom
```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
  position: relative;
}
.container img {
  width: 100%;
  opacity: 0.3;
}
.container div {
  position: absolute;
  font-size: 18px;
}
.center {
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
}
.left_top{
  top: 8px;
  left: 16px;
}
.right_top {
  top: 8px;
  right: 16px;
}
.left_bottom {
  bottom: 8px;
  left: 16px;
}
.right_bottom {
  bottom: 8px;
  right: 16px;
}
</style>
</head>
<body>
<div class="container">
  <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt="Cinque Terre">
  <div class="center">center</div>
  <div class="left_top">Left Top</div>
  <div class="right_top">Right Top</div>
  <div class="left_bottom">Left Bottom</div>
  <div class="right_bottom">Right Bottom</div>
</div>
</body>
</html>
```

## position:absolute; left:-9999px;
### 접근성과 관련
```html
<!DOCTYPE html>
<html lang="ko">
<head><title>CSS</title>
<meta charset="UTF-8"/>
<style type="text/css">
  li{ list-style-type:none; }
  h2 { font-size:0; line-height:0; width:0; height:0; position:absolute; left:-9999px; }
  p { display:inline-block; width:100px; padding:10px; border:1px solid red; }
</style></head>
<body>
  <h1>접근성 관련 샘플</h1>
	<h2>타이틀 1</h2>
	<p>내용1 내용1 내용1 내용1 내용1 내용1 내용1 내용1 내용1 내용1 내용1 내용1 내용1 내용1 내용1 내용1 </p>
	<h2>타이틀 2</h2>
	<p>내용2 내용2 내용2 내용2 내용2 내용2 내용2 내용2 내용2 내용2 내용2 내용2 내용2 내용2 내용2 내용2 </p>
	<h2>타이틀 3</h2>
	<p>내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 내용3 </p>
</body>
</html>
```

## z-index : 요소의 순서
```html
<!DOCTYPE html>
<html>
<head>
<style>
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
</style>
</head>
<body>
<h1>The z-index Property</h1>
<img src="https://www.w3schools.com/cssref/w3css.gif" width="100" height="140">
<p>Because the image has a z-index of -1, it will be placed behind the heading.</p>
</body>
</html>
```