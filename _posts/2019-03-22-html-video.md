---
layout: post
title: "video 태그"
date: 2019-03-12 13:50:19 +0900
categories: [HTML, Web]
tags: [HTML, Web]
comments: true
author : piki
---

```html
<!DOCTYPE html>
<html lang="ko">
<!--videotest.html --> 
<head>
    <title>video 태그</title>
    <meta charset="UTF-8">
</head>
<body>
<h1>기본 비디오 샘플</h1>
<video src="https://www.w3schools.com/html/mov_bbb.mp4">
  Sorry, your browser doesn't support embedded videos,  but don't worry, you can 
  <a href="https://www.w3schools.com/html/mov_bbb.mp4">download it</a>  
  and watch it with your favorite video player!
</video>
<h1>옵션</h1>
<video src="https://www.w3schools.com/html/mov_bbb.mp4" autoplay controls loop>
  Sorry, your browser doesn't support embedded videos,  but don't worry, you can 
  <a href="https://www.w3schools.com/html/mov_bbb.mp4">download it</a>  
  and watch it with your favorite video player!
</video>
<h1>포스터</h1>
<video src="https://www.w3schools.com/html/mov_bbb.mp4" 
    poster="https://peach.blender.org/wp-content/uploads/logo.gif">
  Sorry, your browser doesn't support embedded videos,  but don't worry, you can 
  <a href="https://www.w3schools.com/html/mov_bbb.mp4">download it</a>  
  and watch it with your favorite video player!
</video>
</body>
</html>
```
**[결과](/assets/sample/html/videotest.html)**