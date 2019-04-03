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