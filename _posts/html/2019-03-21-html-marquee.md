---
layout: post
title: "marquee 태그"
date: 2019-03-12 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---

```html
<html lang="ko">
<!--marqueetest.html --> 
<head>
    <title>marquee 태그</title>
    <meta charset="UTF-8">
</head>
<body>
    <marquee>문자를 스크롤로 움직이게 하는 태그 입니다.</marquee>
    <h1>width, height</h1>
    <marquee width="50">가로 픽셀을 설정하였습니다.</marquee>
    <marquee height="20">세로 픽셀을 설정하였습니다.</marquee>
    <h1>bgcolor</h1>
    <marquee bgcolor="red">배경색을 주었습니다.</marquee>
    <h1>direction</h1>
    <marquee direction="right">direction은 스크롤 방향입니다 : right</marquee>
    <marquee direction="left">direction은 스크롤 방향입니다 : left</marquee>
    <marquee direction="up">direction은 스크롤 방향입니다 : up</marquee>
    <marquee direction="down">direction은 스크롤 방향입니다 : down</marquee>
    <h1>behavior</h1>
    <marquee behavior="alternate">정해진 범위 안에서 왔다갔다 합니다.</marquee>
    <marquee behavior="slide">한쪽 끝에 다다르면 스크롤이 멈춤</marquee>
    <marquee behavior="scroll">스크롤 반복. 기본값</marquee>
    <h1>scrolldelay, scrollamount</h1>
    <marquee scrolldelay="10">스크롤 지연 속도. 1/1000초 단위로 지정. 숫자가 커지면 스크롤 속도 느려짐</marquee>
    <marquee scrollamount="10">스크롤 속도. 숫자가 커지면 스크롤 속도가 빨라짐</marquee>
    <h1>loop</h1>
    <marquee loop="10">스크롤 반복 속도.</marquee>
    <marquee loop="infinite">스크롤 반복 속도. infinite는 무한 반복</marquee>
</body>
</html>
```
**[결과](/assets/sample/html/marqueetest.html)**