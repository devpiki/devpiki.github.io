---
layout: post
title: "audio 태그"
date: 2019-03-22 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---
## 기본 오디오 샘플
```html
<!DOCTYPE html>
<html lang="ko">
<!--audiotest1.html --> 
<head>
    <title>audio 태그</title>
    <meta charset="UTF-8"/>
</head>
<body>
<h1>기본 오디오 샘플</h1>
<audio src="https://www.w3schools.com/tags/horse.mp3" controls>
  Your browser does not support the <code>audio</code> element.
</audio>
</body>
</html>
```
**[결과](/assets/sample/html/audiotest1.html)**

## 옵션들
```html
<!DOCTYPE html>
<html lang="ko">
<!--audiotest2.html --> 
<head>
    <title>audio 태그</title>
    <meta charset="UTF-8"/>
</head>
<body>
<h1>옵션들</h1>
<audio src="https://www.w3schools.com/tags/horse.mp3" 
  controls autoplay>
  Your browser does not support the <code>audio</code> element.
</audio>
</body>
</html>
```
**[결과](/assets/sample/html/audiotest2.html)**