---
layout: post
title: "인용문 - q, blockquote"
date: 2019-03-12 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---

```html
<html lang="ko">
<!--blocktest.html --> 
<head>
    <title>인용문 태그</title>
    <meta charset="UTF-8"/>
</head>
<body>
    <h1>q 태그</h1>
    <p>p 태그 안의 q 태그
        <q>q 태그는 문단 안에서 인용 할 때 사용 합니다.</q>
        를 사용 하였습니다.
    </p>
    
    
    <h1>blockquote 태그</h1>
    <p>blockquote 태그란 :</p>
    <blockquote>
        blockquote 태그는 새로운 문단에서 인용 할때 사용 합니다.
    </blockquote>
    <p>blockquote 태그 사용 :</p>
    <blockquote>
        <p>
        blockquote 태그안에 별도 단락 태그로 묶을수도 있습니다.
        </p>
    </blockquote>
    <p>blockquote 태그 속성값 cite :</p>
    <blockquote cite="https://www.w3schools.com/tags/tag_blockquote.asp">
        cite 속성은 인용문의 출처를 표시 합니다.
        화면에 별도 표시되지는 않지만 검색엔진이 이 주소 정보를 사용할 수 있습니다.
    </blockquote>
</body>
</html>
```
**[결과](/assets/sample/html/blocktest.html)**