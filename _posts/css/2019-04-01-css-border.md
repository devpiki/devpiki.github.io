---
layout: post
title: "Border"
date: 2019-04-01 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## border-width : 선 굵기
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title></title>
<style>
	p {width : 500px; height : 50px; border-style: solid;}
	p.test1 {border-width:medium; /*3px*/ }
	p.test2 {border-width:thin; /*1px*/ }
	p.test3 {border-width:thick; /*5px*/ }
	p.test4 {border-width:10px; }
</style>
</head>
<body>
  <p class="test1">border-width:medium</p>
  <p class="test2">border-width:thin</p>
  <p class="test3">border-width:thick</p>
  <p class="test3">border-width:10px</p>
</body>
</html>
```

## border-width : top, right, middle, left
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title></title>
<style>
	p {width : 500px; height : 50px; border-style: solid;}
	p.test1 {border-width: 10px; }
	p.test2 {border-width: 10px 20px; }
	p.test3 {border-width: 10px 20px 30px; }
	p.test4 {border-width: 10px 20px 30px 40px; }
</style>
</head>
<body>
  <p class="test1">border-width: 10px</p>
  <p class="test2">border-width: 10px 20px</p>
  <p class="test3">border-width: 10px 20px 30px</p>
  <p class="test4">border-width: 10px 20px 30px 40px</p>
</body>
</html>
```

## border-style : 선모양
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title></title>
<style>
	p {width : 500px; height : 50px;}
	p.test1 {border-style: none; }
	p.test2 {border-style: hidden; }
	p.test3 {border-style: dotted; }
	p.test4 {border-style: dashed; }
	p.test5 {border-style: solid; }
	p.test6 {border-style: double; }
	p.test7 {border-style: groove; }
	p.test8 {border-style: ridge; }
	p.test9 {border-style: inset; }
	p.test10 {border-style: outset; }
</style>
</head>
<body>
	<p class="test1">border-style: none</p>
	<p class="test2">border-style: hidden</p>
	<p class="test3">border-style: dotted</p>
	<p class="test4">border-style: dashed</p>
	<p class="test5">border-style: solid</p>
	<p class="test6">border-style: double</p>
	<p class="test7">border-style: groove</p>
	<p class="test8">border-style: ridge</p>
	<p class="test9">border-style: inset</p>
	<p class="test10">border-style: outset</p>
</body>
</html>
```

## border-style : top, right, middle, left
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title></title>
<style>
	p {width : 500px; height : 50px;}
	p.test1 {border-style: solid; }
	p.test2 {border-style: solid double; }
	p.test3 {border-style: solid double dotted; }
	p.test4 {border-style: solid double dotted dashed; }
</style>
</head>
<body>
	<p class="test1">border-style: solid</p>
	<p class="test2">border-style: solid double</p>
	<p class="test3">border-style: solid double dotted</p>
	<p class="test4">border-style: solid double dotted dashed</p>
</body>
</html>
```

## border-color : 선 색상
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title></title>
<style>
	p {width : 500px; height : 50px; border-width:10px; border-style:solid;}
	p.test1 {border-color: #ff00ff; }
	p.test2 {border-color: red; }
	p.test3 {border-color: rgb(255,255,0); }
	p.test4 {border-color: rgba(0,0,0,.3); }
    p.test5 {border-color: transparent; }
</style>
</head>
<body>
	<p class="test1">border-style: solid</p>
	<p class="test2">border-style: solid double</p>
	<p class="test3">border-style: solid double dotted</p>
	<p class="test4">border-style: solid double dotted dashed</p>
    <p class="test5">border-color: transparent</p>
</body>
</html>
```

## border-color : top, right, middle, left
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title></title>
<style>
	p {width : 500px; height : 50px; border-width:10px; border-style:solid;}
	p.test1 {border-color: #ff00ff; }
	p.test2 {border-color: #ff00ff red; }
	p.test3 {border-color: #ff00ff red rgb(255,255,0); }
	p.test4 {border-color: #ff00ff red rgb(255,255,0) rgba(0,0,0,.3); }
</style>
</head>
<body>
	<p class="test1">#ff00ff</p>
	<p class="test2">#ff00ff red</p>
	<p class="test3">#ff00ff red rgb(255,255,0)</p>
	<p class="test4">#ff00ff red rgb(255,255,0) rgba(0,0,0,.3)</p>
</body>
</html>
```

## border : border-width border-style(필수) border-color
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title></title>
<style>
	p {width : 500px; height : 50px; border-width:10px; border-style:solid;}
	p.test1 {border: 1px solid #ff0000; }
	p.test2 {border-top:1px solid #ff0000; border-right:2px dotted rgb(255,255,0);
		border-bottom:3px dashed rgba(0,0,0,.3); border-left: 4px double red; }
</style>
</head>
<body>
	<p class="test1">border</p>
	<p class="test2">border-top, border-right, border-bottom, border-left</p>
</body>
</html>
```
