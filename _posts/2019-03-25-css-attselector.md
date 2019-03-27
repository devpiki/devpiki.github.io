---
layout: post
title:  "속성 선택자 - Attribute Selectors"
date:   2019-03-25 13:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## [attribute]
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  a[target] {
    background-color: yellow;
  }
</style>
</head>
<body>
  <h1>Welcome to My Homepage</h1>
  <a href="https://www.w3schools.com">w3schools.com</a>
  <a href="http://www.disney.com" target="_blank">disney.com</a>
  <a href="http://www.wikipedia.org" target="_top">wikipedia.org</a>
  <p class="red-ptag">My best friend is Mickey.</p>
</body>
</html>
```

## [attribute = value]
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  a[target=_blank] {
    background-color: yellow;
  }
  p[name=titles] {
    background-color: red;
  }
</style>
</head>
<body>
  <h1>Welcome to My Homepage</h1>
  <a href="https://www.w3schools.com">w3schools.com</a>
  <a href="http://www.disney.com" target="_blank">disney.com</a>
  <a href="http://www.wikipedia.org" target="_top">wikipedia.org</a>
  <p name="titles">My best friend is Mickey.</p>
  <p >My best friend is Mickey.</p>
  <p >My best friend is Mickey.</p>
</body>
</html>
```

## [attribute ~= value]
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  [title~=flower] {
    border: 5px solid yellow;
  }
</style>
</head>
<body>
  <h1>Welcome to My Homepage</h1>
  <img src="klematis.jpg" title="klematis flower Test" width="150" height="113">
  <img src="img_flwr.gif" title="flowers" width="224" height="162">
  <img src="landscape.jpg" title="landscape" width="160" height="120">
</body>
</html>
```

## [attribute |= value]
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  [lang|=en] {
    background: yellow;
  }
</style>
</head>
<body>
  <h1>Welcome to My Homepage</h1>
  <p lang="en">Hello!</p>
  <p lang="en-us">Hi!</p>
  <p lang="en-gb">Ello!</p>
  <p lang="us-en">Hi!</p>
  <p lang="enno">Hei!</p>
  <p lang="no">Hei!</p>
</body>
</html>
```

## [attribute ^= value]
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  div[class^="test"] {
    background: #ffff00;
  }
</style>
</head>
<body>
  <h1>Welcome to My Homepage</h1>
  <div class="first_test">The first div element.</div>
  <div class="second">The second div element.</div>
  <div class="test">The third div element.</div>
  <div class="test123">The four div element.</div>
  <p class="test">This is some text in a paragraph.</p>
</body>
</html>
```

## [attribute $= value]
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  div[class^="test"] {
    background: #ffff00;
  }
</style>
</head>
<body>
  <h1>Welcome to My Homepage</h1>
  <div class="test_first">The first div element.</div>
  <div class="second">The second div element.</div>
  <div class="test">The third div element.</div>
  <div class="123test">The four div element.</div>
  <p class="test">This is some text in a paragraph.</p>
</body>
</html>
```

## [attribute *= value]
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  div[class*="test"] {
    background: #ffff00;
  }
</style>
</head>
<body>
  <h1>Welcome to My Homepage</h1>
  <div class="first_test">The first div element.</div>
  <div class="second">The second div element.</div>
  <div class="test">The third div element.</div>
  <div class="123test">The four div element.</div>
  <div class="test123">The five div element.</div>
  <div class="123test123">The six div element.</div>
  <p class="test">This is some text in a paragraph.</p>
</body>
</html>
```