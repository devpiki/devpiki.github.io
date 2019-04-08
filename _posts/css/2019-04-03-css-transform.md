---
layout: post
title: "box변형-transform"
date: 2019-04-03 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

```html
<!DOCTYPE html>
<html lang="ko">
<head><title> CSS3 </title>
<meta charset="utf-8" />
<style type="text/css">
h1 {  
	width:350px; 
    height:70px; 
    margin-bottom:20px; 
    border:3px solid red;
    background:url(https://www.w3schools.com/images/compatible_chrome.gif);
    background-color:gray;
}
/*이동*/
.tra { 
	transform:translate(20px,-30px);
	-ms-transform:translate(20px,-30px); 
	-moz-transform:translate(20px,-30px); 
	-webkit-transform:translate(20px,-30px);
	-o-transform:translate(20px,-30px); 
}
/*회전*/
.rot {
	transform:rotate(30deg);
	-ms-transform:rotate(30deg);
	-moz-transform:rotate(30deg);
	-webkit-transform:rotate(30deg);
	-o-transform:rotate(30deg);
}
/*크기변경*/
.sca {
	transform:scale(1.3,0.7);
	-ms-transform:scale(1.3,0.7); 
	-moz-transform:scale(1.3,0.7); 
	-webkit-transform:scale(1.3,0.7); 
	-o-transform:scale(1.3,0.7); 
}
/*기울이기*/
.ske { 
	transform:skew(30deg,20deg);
	-ms-transform:skew(30deg,20deg);
	-moz-transform:skew(30deg,20deg);
	-webkit-transform:skew(30deg,20deg);
	-o-transform:skew(30deg,20deg);
}
</style>
</head>
<body>
  <h1>test123</h1>
  <h1 class="tra">이동-translate</h1>
  <h1 class="rot">회전-rotate</h1>
  <h1 class="sca">크기변경-scale</h1>
  <h1 class="ske">기울이기-skew</h1>
</body>
</html>
```