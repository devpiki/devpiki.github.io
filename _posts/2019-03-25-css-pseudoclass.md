---
layout: post
title:  "가상클래스(추상클래스, 수도클래스, pseudo-class)"
date:   2019-03-25 13:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## link, visited, hover, active
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
a:link { /*방문하지 않은 링크*/
  background-color: yellow;
}
a:visited { /*방문한 링크*/
  background-color: blue;
}
a:hover { /*링크 위에 마우스 올려놨을때*/
  background-color: red;
}
a:active { /*링크가 활성화(마우스 클릭뒤)*/
  background-color: green;
}
</style>
</head>
<body>
  <a href="https://www.daum.net" target="_blank">Daum</a>
  <a href="https://www.naver.com" target="_blank">Naver</a>
  <a href="https://www.google.com" target="_blank">Google</a>
  <a href="https://www.nate.com" target="_blank">Nate</a>
</body>
</html>
```



