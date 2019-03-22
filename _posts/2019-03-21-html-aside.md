---
layout: post
title:  "aside 태그"
date:   2019-03-12 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---

```html
<html lang="ko">
<!--asidetest.html --> 
<head>
    <title>aside 태그</title>
    <meta charset="UTF-8">
</head>
<body>
    <article>
        <h1>aside 태그</h1>
        <p>aside 태그란 W3C 에서 부차적인 내용을 담는 태그라고 정의 하였습니다.</p>
        <p>aside 태그가 article 안쪽에 있을경우 article 본문과 관련 있는 내용 입니다. </p>
        <aside>
            <h2>W3C</h2>
            <p>W3C 란 World Wide Web Consortium을 말합니다.</p>
        </aside>
    </article>
    <aside>
        <h2>aside 태그 샘플 웹페이지</h2>
        <p>article 바깥쪽에 있을때는 전체 웹페이지와 관계 있는 내용 입니다.</p>
        <p>오른쪽 사이드 바가 대표적인 예입니다.</p>
    </aside>
</body>
</html>
```