---
layout: post
title: "frame 태그"
date: 2019-03-23 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---
## cols
```html
<!DOCTYPE html>
<html lang="ko">
  <frameset cols="25%,*,25%">
    <frame src="atest.html">
    <frame src="dltest.html">
    <frame src="ptest.html">
  </frameset>
</html>
```

## rows
```html
<!DOCTYPE html>
<html lang="ko">
  <frameset rows="25%,*,25%">
    <frame src="atest.html">
    <frame src="dltest.html">
    <frame src="ptest.html">
  </frameset>
</html>
```

## noframes
```html
<!DOCTYPE html>
<html lang="ko">
  <frameset rows="25%,*,25%">
    <frame src="atest.html">
    <frame src="dltest.html">
    <frame src="ptest.html">
    <noframes>이 브라우저는 프레임을 지원하지 않습니다.</noframes>
  </frameset>
</html>
```


## target
```html
<!DOCTYPE html>
<html>
  <!-- frametest.html -->
  <frameset rows="10%,*">
    <frame src="ptest.html">
    <frame src="frametest2.html">
  </frameset>
</html>
```
```html
<!DOCTYPE html>
<html>
  <!-- frametest2.html -->
  <frameset cols="15%,*">
    <frame src="dltest.html" />
    <frame src="atest.html" />
  </frameset>
</html>
```
```html
<!DOCTYPE html>
<html>
<!-- atest.html -->
<head>
  <meta charset="utf-8" />
  <title>a 태그</title>
</head>
<body>
  <p>
    <a href="oltest.html" target="_parent">target="_parent"</a>
  </p>
  <p>
    <a href="oltest.html" target="_top">target="_top"</a>
  </p>
</body>
</html>
```

**[결과](/assets/sample/html/frametest.html)**