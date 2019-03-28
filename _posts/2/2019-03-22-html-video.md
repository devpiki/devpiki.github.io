---
layout: post
title: "video 태그"
date: 2019-03-22 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---
## 기본 비디오 샘플
```html
<!DOCTYPE html>
<html lang="ko">
<!--videotest1.html --> 
<head>
    <title>video 태그</title>
    <meta charset="UTF-8">
</head>
<body>
<h1>기본 비디오 샘플</h1>
<video src="https://www.w3schools.com/html/mov_bbb.mp4" controls>
  Sorry, your browser doesn't support embedded videos,  
    but don't worry, you can 
  <a href="https://www.w3schools.com/html/mov_bbb.mp4">download it</a>  
  and watch it with your favorite video player!
</video>
</body>
</html>
```
**[결과](/assets/sample/html/videotest1.html)**

## 옵션들
```html
<!DOCTYPE html>
<html lang="ko">
<!--videotest2.html --> 
<head>
    <title>video 태그</title>
    <meta charset="UTF-8">
</head>
<body>
<h1>옵션</h1>
<video src="https://www.w3schools.com/html/mov_bbb.mp4" autoplay controls loop>
  Sorry, your browser doesn't support embedded videos,  
    but don't worry, you can 
  <a href="https://www.w3schools.com/html/mov_bbb.mp4">download it</a>  
  and watch it with your favorite video player!
</video>
</body>
</html>
```
**[결과](/assets/sample/html/videotest2.html)**

## 포스터
```html
<!DOCTYPE html>
<html lang="ko">
<!--videotest3.html --> 
<head>
    <title>video 태그</title>
    <meta charset="UTF-8">
</head>
<body>
<h1>포스터</h1>
<video src="https://www.w3schools.com/html/mov_bbb.mp4" 
    poster="https://www.w3schools.com/images/w3html5.gif">
  Sorry, your browser doesn't support embedded videos,  
    but don't worry, you can 
  <a href="https://www.w3schools.com/html/mov_bbb.mp4">download it</a>  
  and watch it with your favorite video player!
</video>
</body>
</html>
```
**[결과](/assets/sample/html/videotest3.html)**

## source
```html
<!DOCTYPE html>
<html lang="ko">
<!--videotest4.html --> 
<head>
    <title>video 태그</title>
    <meta charset="UTF-8">
</head>
<body>
<h1>source</h1>
<video width="320" height="240" controls>
  <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4">
  <source src="https://www.w3schools.com/html/movie.ogg" type="video/ogg">
  죄송합니다. 당신의 브라우저는 HTML5 동영상을 지원하지 않습니다.
</video>
</body>
</html>
```
**[결과](/assets/sample/html/videotest4.html)**

## 자막
```html
<!DOCTYPE html>
<html lang="ko">
<!--videotest5.html --> 
<head>
    <title>video 태그</title>
    <meta charset="UTF-8">
</head>
<body>
<h1>자막</h1>
<video controls="" class="trackSupported">
  <source src="/assets/developerStories-en.webm" type="video/webm; codecs=&quot;vp8, vorbis&quot;">
  <track src="/assets/developerStories-subtitles-en.vtt" label="English subtitles" kind="subtitles" srclang="en" default="">
</video>
</body>
</html>
```
**[결과](/assets/sample/html/videotest5.html)**