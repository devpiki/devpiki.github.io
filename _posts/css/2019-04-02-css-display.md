---
layout: post
title: "display"
date: 2019-04-02 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## display: none
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title></title>
<style>
	p.ex1 {color: red; display: none;}
</style>
</head>
<body>
	<div>
	test123 test123 test123 test123 test123  
	<p class="ex1">HELLO WORLD!</p> 
	test123 test123 test123 test123 test123 
	</div>
</body>
</html>
```

## display: inline
```html
<!DOCTYPE html>
<html>
<head>
<style>
div.ex1 {color: red; display: inline;}
</style>
</head>
<body>
<div>
	test123 test123 test123 test123 test123 
	<div class="ex1">HELLO WORLD!</div> 
	test123 test123 test123 test123 test123 
</div>
</body>
</html>
```

## display: block
```html
<!DOCTYPE html>
<html>
<head>
<style>
span.ex1 {color: red; display:block;}
</style>
</head>
<body>
<div>
	test123 test123 test123 test123 test123 
	<span class="ex1">HELLO WORLD!</span> 
	test123 test123 test123 test123 test123 
</div>
</body>
</html>
```

## display: inline-block
```html
<!DOCTYPE html>
<html>
<head>
<style>
a {color: red; border:1px solid red;width:100px;}
a {display: inline-block}
</style>
</head>
<body>
<div>
	test123 test123 test123 test123 test123 
	<a class="ex1">HELLO WORLD!</a> 
	test123 test123 test123 test123 test123 
</div>
</body>
</html>
```

## display: none 과 visibility:hidden의 차이
```html
<!DOCTYPE html>
<html>
<head>
<style>
a {color: red; border:1px solid red;width:100px;}
a {display: inline-block}
a.ex1 {visibility :hidden;}
/*a.ex1 {display: none;}*/
</style>
</head>
<body>
<div>
	test123 test123 test123 test123 test123 
	<a class="ex1">HELLO WORLD!</a> 
	test123 test123 test123 test123 test123 
</div>
</body>
</html>
```


## display: flex
```html
<!DOCTYPE html>
<html>
<head>
<style> 
#main {
  width: 400px;
  height: 400px;
  border: 1px solid red;
  display: -webkit-flex; /* Safari */
  -webkit-flex-direction: row; /* Safari 6.1+ */
  display: flex;
  flex-direction: row;
}
#main div {
  width: 50px;
  height: 50px;
}
#main div:nth-child(1){
  flex : 1;
  -webkit-flex: 1; /* Safari 6.1+ */
  -ms-flex: 1; /* IE 10 */ 
}
#main div:nth-child(2){
  flex : 2;
  -webkit-flex: 2; /* Safari 6.1+ */
  -ms-flex: 2; /* IE 10 */ 
}
</style>
</head>
<body>
<div id="main">
  <div style="background-color:coral;">A</div>
  <div style="background-color:lightblue;">B</div>
  <div style="background-color:khaki;">C</div>
  <div style="background-color:pink;">D</div>
  <div style="background-color:lightgrey;">E</div>
  <div style="background-color:lightgreen;">F</div>
</div>
</body>
</html>
```