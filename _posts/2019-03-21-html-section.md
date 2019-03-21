---
layout: post
title:  "section 태그"
date:   2019-03-12 13:50:19 +0900
categories: [HTML, Web]
tags: [HTML, Web]
comments: true
author : piki
---

```html
<html lang="ko">
<!--sectiontest.html --> 
<head>
    <title>section 태그</title>
    <meta charset="UTF-8">
</head>
<body>
    <section>
        <h1>section 태그</h1>
        <p>머리글, 바닥글, 기타 문서의 다른 섹션과 같은 article을 포함한 문서의 섹션 들을 정의</p>
    </section>
    <article>
        <h1>html 언어</h1>
        <section>
            <h2>section 태그</h2>
            <p>서로 관계 있는 문서를 분리 하는 역할(문서를 다른 주제로 구분짓기 위해 사용)</p>
        </section>
        <section>
            <h2>article 태그</h2>
            <p>블로그 게시물, 뉴스 기사, 논평</p>
        </section>
        <section>
            <h2>header 태그</h2>
            <p>로고 또는 아이콘, 저자 정보 </p>
            <p>footer, address 또는 다른 header 요소 내에는 배치 할 수 없다</p>
        </section>
    </article>
    <article>
        <h1>css 언어</h1>
        <section>
            <h2>display 속성</h2>
            <p>요소를 어떻게 표시할지 선택</p>
        </section>
        <section>
            <h2>visibility 속성</h2>
            <p>요소를 보이게 할지 말지를 결정하는 속성</p>
        </section>
    </article>
    <article>
        <h1>javascript 언어</h1>
        <section>
            <h2>window 객체</h2>
            <p> 브라우저의 요소들과 자바스크립트 엔진, 그리고 모든 변수를 담고 있는 객체</p>
        </section>
        <section>
            <h2>document 객체</h2>
            <p>웹 페이지에 존재하는 HTML 요소에 접근하고자 할 때 사용하는 객체</p>
        </section>
    </article>
</body>
</html>
```