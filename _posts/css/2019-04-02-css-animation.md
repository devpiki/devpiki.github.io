---
layout: post
title: "transition, animation"
date: 2019-04-01 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## Transition : 속성들에 에니메이션 적용
```html
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<style type="text/css">
  li { list-style-type:none; }
  h1,ul { padding:10px; }
  .util li { display:inline; }
  .util li a { 
    float:left; 
    padding:10px 20px; 
    margin-right:1px; 
    background:#123456; 
    color:#abcedf;
    transition:background 2s, color 2s;
    -moz-transition:background 2s, color 2s;
    -webkit-transition:background 2s, color 2s;
    -o-transition:background 2s, color 2s;
  }
  .util li a:hover { background:#abcedf;  color:#123456; }
</style>
</head>
<body>
<ul class="util">
<li><a href="#">HOME</a></li>
<li><a href="#">JOIN</a></li>
<li><a href="#">SITEMAP</a></li>
</ul>  
</body>
</html>
```

## animation : 에니메이션 추가
```html
<!DOCTYPE html>
<html lang="ko">
<head><title> CSS3 </title>
<meta charset="UTF-8"/>
<style type="text/css">
p { 
  width:140px; 
  height:120px; 
  padding:10px;
  background:#c00; 
  color:#fff; 
  font-size:15px;
  animation:myfirst 5s infinite;
  -webkit-animation:myfirst 5s infinite;
}
@keyframes myfirst {
  0% { background:#c00; width:140px; height:120px; }
  25% { background:#00c; width:450px; height:120px; }
  50% { background:#808; width:450px; height:180px; }
  75% { background:#080; width:140px; height:180px; }
  100% { background:#c00; width:140px; height:120px; }
}
@-webkit-keyframes myfirst{
  0% { background:#c00; width:140px; height:120px; }
  25% { background:#00c; width:450px; height:120px; }
  50% { background:#808; width:450px; height:180px; }
  75% { background:#080; width:140px; height:180px; }
  100% { background:#c00; width:140px; height:120px; }
}
</style>
</head>
<body>
<p>Animation  is my pleasure.<br />
Animationwork gives me great pleasure.</p>
</body>
</html>
```

## animation : from to
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation : example 4s;
  -webkit-animation : example 4s;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

/* Standard syntax */
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}
</style>
</head>
<body>
<div></div>
</body>
</html>
```
