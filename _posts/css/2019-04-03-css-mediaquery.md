---
layout: post
title: "Mediaquery"
date: 2019-04-03 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## basic
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
body {
  background-color: yellow;
}
div.example{
	border : 1px solid red;
}
/*max-width가 600px 일때 까지는 */
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
  div.example {
    display: none;
  }
}
</style>
</head>
<body>
<p>Resize the browser window. When the width of this document is 600 pixels or less, the background-color is "lightblue", otherwise it is "yellow".</p>
<div class="example">Example DIV.</div>
<p>Resize the browser window. When the width of this document is 600 pixels or less, the background-color is "lightblue", otherwise it is "yellow".</p>
</body>
</html>
```

## Responsive navigation menu
[바로가기](https://www.w3schools.com/csS/tryit.asp?filename=trycss_mediaqueries_navbar)
```html
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
  padding : 0;
  margin : 0;
}
a {
    color: #f2f2f2;
    text-decoration: none;
    display:inline-block;
    padding: 14px 16px;
}
.topnav {
  overflow: auto;
  background-color: #333;
}
.topnav li {
  float: left;
  display: block;
  text-align: center;
  text-decoration: none;
}
.topnav li:hover {
  background-color: #ddd;
  color: black;
}
@media only screen and (max-width: 600px) {
  .topnav li {
    float: none;
    width: 100%;
  }
}
</style>
</head>
<body>
<ul class="topnav">
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
</ul>
</body>
</html>
```

## Responsive Four Column Layout
[바로가기](https://www.w3schools.com/csS/tryit.asp?filename=trycss_mediaqueries_ex2)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}
.column {
  float: left;
  width: 25%;
  padding: 20px;
  border : 1px solid red;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
@media screen and (max-width: 600px) {
  .column {
    width: 50%;
  }
}
@media screen and (max-width: 300px) {
  .column {
    width: 100%;
  }
}
</style>
</head>
<body>
<div class="row">
  <div class="column" style="background-color:#aaa;">
  <h2>Column 1</h2>
  <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#bbb;">
  <h2>Column 2</h2>
  <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#ccc;">
  <h2>Column 3</h2>
  <p>Some text..</p>
  </div>
  <div class="column" style="background-color:#ddd;">
  <h2>Column 4</h2>
  <p>Some text..</p>
  </div>
</div>
</body>
</html>
```

## Responsive Image Grid
[바로가기](https://www.w3schools.com/csS/tryit.asp?filename=trycss_mediaqueries_img_gallery)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial;
}
.header {
  text-align: center;
  padding: 32px;
}
.row {
  padding: 0 4px;
}
.column {
  float: left;
  width: 25%;
  padding: 0 4px;
}
.column img {
  margin-top: 8px;
  vertical-align: middle;
  width:100%;
}
@media screen and (max-width: 800px) {
  .column {
     width: 50%;
  }
}
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
</head>
<body>
<div class="header">
  <h1>Responsive Image Grid</h1>
  <p>Resize the browser window to see the responsive effect.</p>
</div>
<div class="row"> 
  <div class="column">
    <img src="https://www.w3schools.com/w3images/wedding.jpg" />
    <img src="https://www.w3schools.com/w3images/rocks.jpg" />
    <img src="https://www.w3schools.com/w3images/falls2.jpg" />
    <img src="https://www.w3schools.com/w3images/paris.jpg" />
    <img src="https://www.w3schools.com/w3images/nature.jpg" />
    <img src="https://www.w3schools.com/w3images/mist.jpg" />
    <img src="https://www.w3schools.com/w3images/paris.jpg" />
  </div>
  <div class="column">
    <img src="https://www.w3schools.com/w3images/underwater.jpg" />
    <img src="https://www.w3schools.com/w3images/ocean.jpg" />
    <img src="https://www.w3schools.com/w3images/wedding.jpg" />
    <img src="https://www.w3schools.com/w3images/mountainskies.jpg" />
    <img src="https://www.w3schools.com/w3images/rocks.jpg" />
    <img src="https://www.w3schools.com/w3images/underwater.jpg" />
  </div> 
  <div class="column">
    <img src="https://www.w3schools.com/w3images/wedding.jpg" />
    <img src="https://www.w3schools.com/w3images/rocks.jpg" />
    <img src="https://www.w3schools.com/w3images/falls2.jpg" />
    <img src="https://www.w3schools.com/w3images/paris.jpg" />
    <img src="https://www.w3schools.com/w3images/nature.jpg" />
    <img src="https://www.w3schools.com/w3images/mist.jpg" />
    <img src="https://www.w3schools.com/w3images/paris.jpg" />
  </div>
  <div class="column">
    <img src="https://www.w3schools.com/w3images/underwater.jpg" />
    <img src="https://www.w3schools.com/w3images/ocean.jpg" />
    <img src="https://www.w3schools.com/w3images/wedding.jpg" />
    <img src="https://www.w3schools.com/w3images/mountainskies.jpg" />
    <img src="https://www.w3schools.com/w3images/rocks.jpg" />
    <img src="https://www.w3schools.com/w3images/underwater.jpg" />
  </div>
</div>
</body>
</html>
```