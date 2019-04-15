---
layout: post
title: "Mediaquery Layout"
date: 2019-04-04 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## float 형태의 layout
```html
<!DOCTYPE html>
<html lang="ko">
<head>
<title>CSS Template</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
/*박스 사이즈를 어떻게 계산할지 설정*/
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* 헤더 스타일 지정 */
.header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
  font-size: 35px;
}

/* 세개의 동일한 열을 생성 */
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
  height: 300px; /* 임시로 만들어놓음 : 실제 개발시에는 수정또는 삭제 해야 함 */
}

/* float 제거 */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* footer 스타일 지정 */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}

/* 반응형 레이아웃 - 3개의 열을 밑으로 표시 */
@media (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
</head>
<body>

<h2>CSS Template using Float</h2>
<p>In this example, we have created a header, three equal columns and a footer. On smaller screens, the columns will stack on top of each other.</p>
<p>Resize the browser window to see the responsive effect.</p>

<div class="header">
  <h2>Header</h2>
</div>

<div class="row">
  <div class="column" style="background-color:#aaa;">Column</div>
  <div class="column" style="background-color:#bbb;">Column</div>
  <div class="column" style="background-color:#ccc;">Column</div>
</div>

<div class="footer">
  <p>Footer</p>
</div>

</body>
</html>
```

## display:flex 형태의  layout
```html
<!DOCTYPE html>
<html lang="ko">
<head>
<title>CSS Template</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
/*박스 사이즈 */
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* 헤더 스타일 지정 */
.header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
  font-size: 35px;
}

/* flexboxes를 위한 row */
/*display: flex : 엘리먼트의 크기나 위치를 잡아줌*/
.row {
  display: -webkit-flex;
  display: flex;
}

/* 옆에 붙어 있는 열 생성 */
/*flex: 1 너비에 대한 속성값(0 1 auto)-숫자가 커질수록 비율이 커짐*/
.column {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 10px;
  height: 300px; /* 임시로 만들어놓음 : 실제 개발시에는 수정또는 삭제 해야 함 */
}

/* footer 스타일 지정 */
.footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}

/* 반응형 레이아웃 - 3개의 열을 밑으로 표시 */
/*flex-direction : 컨테이너 안에 위치되는 방법*/
/*https://www.w3schools.com/cssref/playit.asp?filename=playcss_flex-direction&preval=row*/
@media (max-width: 600px) {
  .row {
    -webkit-flex-direction: column;
    flex-direction: column;
  }
}
</style>
</head>
<body>

<h2>CSS Template using Flexbox</h2>
<p>In this example, we have created a header, three equal columns and a footer. On smaller screens, the columns will stack on top of each other.</p>
<p>Resize the browser window to see the responsive effect.</p>
<p><strong>Note:</strong> Flexbox is not supported in Internet Explorer 10 eand earlier versions.</p>

<div class="header">
  <h2>Header</h2>
</div>

<div class="row">
  <div class="column" style="background-color:#aaa;">Column</div>
  <div class="column" style="background-color:#bbb;">Column</div>
  <div class="column" style="background-color:#ccc;">Column</div>
</div>

<div class="footer">
  <p>Footer</p>
</div>

</body>
</html>
```


## Simple layout
```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: block;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

html {
  font-family: "Lucida Sans", sans-serif;
}

.header {
  background-color: #9933cc;
  color: #ffffff;
  padding: 15px;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.menu li:hover {
  background-color: #0099cc;
}

.aside {
  background-color: #33b5e5;
  padding: 15px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.footer {
  background-color: #0099cc;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  padding: 15px;
}

/* For desktop: */
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

@media only screen and (max-width: 768px) {
  [class*="col-"] {
    width: 100%;
  }
  /*만약 모바일에서 메뉴를 위에 겹쳐 사용 하고 싶으면*/
  /*
  .row {
  	position: relative;
  }
  .menu {
  	position: absolute;
  	top : 0;
  	left : 0;
  	border : 1px solid red;
  	background: white;
  }
  */
}

</style>
</head>
<body>

<div class="header">
  <h1>Chania</h1>
</div>
<div class="row">
  <div class="col-3 menu">
    <ul>
    <li>메뉴 1</li>
    <li>메뉴 2</li>
    <li>메뉴 3</li>
    <li>메뉴 4</li>
    </ul>
  </div>
  <div class="col-6">
    <h1>The City</h1>
    <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
  </div>
  <div class="col-3 right">
    <div class="aside">
      <h2>What?</h2>
      <p>Chania is a city on the island of Crete.</p>
      <h2>Where?</h2>
      <p>Crete is a Greek island in the Mediterranean Sea.</p>
      <h2>How?</h2>
      <p>You can reach Chania airport from all over Europe.</p>
    </div>
  </div>
</div>
<div class="footer">
  <p>Resize the browser window to see how the content respond to the resizing.</p>
</div>
</body>
</html>
```