---
layout: post
title: "outline"
date: 2019-04-01 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## outline : border를 감싸는 또 다른 테두리
```html
<!DOCTYPE html>
<html>
<head>
<style>
div.a {
  border: 1px solid red;
  outline: 5px dotted green;
}
</style>
</head>
<body>
<div class="a">A div element with a 2 pixels blue dashed outline. Also notice that the outline is outside of any border.</div>
</body>
</html>
```

## outline-offset : border와 outline과의 간격
```html
<!DOCTYPE html>
<html>
<head>
<style>
div.a {
  margin: 20px;
  border: 1px solid red;
  outline: 5px dotted green;
  outline-offset: 15px;
}
</style>
</head>
<body>
<div class="a">A div element with a 2 pixels blue dashed outline. Also notice that the outline is outside of any border.</div>
</body>
</html>
```