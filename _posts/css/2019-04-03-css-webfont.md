---
layout: post
title: "Web font"
date: 2019-04-03 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

```html
<!DOCTYPE html>
<html>
<head>
<style>
@font-face {
  font-family: NanumGothicRegularWeb;
  src: local("NanumGothic Regular"),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-Regular.eot?#iefix) format('embedded-opentype'),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-Regular.woff) format('woff'),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-Regular.woff2) format('woff2'),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-Regular.ttf) format('truetype');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: NanumGothicBoldWeb;
  src: local("NanumGothic Bold"),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-Bold.eot?#iefix) format('embedded-opentype'),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-Bold.woff) format('woff'),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-Bold.woff2) format('woff2'),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-Bold.ttf) format('truetype');
  font-style: normal;
  font-weight: normal;
}
@font-face {
  font-family: NanumGothicExtraBoldWeb;
  src: local("NanumGothic ExtraBold"),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-ExtraBold.eot?#iefix) format('embedded-opentype'),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-ExtraBold.woff) format('woff'),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-ExtraBold.woff2) format('woff2'),
       url(https://devpiki.github.io/assets/fonts/NanumGothic-ExtraBold.ttf) format('truetype');
  font-style: normal;
  font-weight: normal;
}


h1.a {
  font-family: NanumGothicRegularWeb, sans-serif;
}
h1.b {
  font-family: NanumGothicBoldWeb, sans-serif;
}
h1.c {
  font-family: NanumGothicExtraBoldWeb, sans-serif;
}
</style>
</head>
<body>
<h1 class="a">test123</h1>
<h1 class="b">test123</h1>
<h1 class="c">test123</h1>
</body>
</html>
```