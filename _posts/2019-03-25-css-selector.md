---
layout: post
title:  "Selectors"
date:   2019-03-25 13:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## 타입 선택자
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  p {
    background-color: yellow;
  }
</style>
</head>
<body>
 <h1>Welcome to My Homepage</h1>
 <div>
   <p id="firstname" class="red-ptag">My name is Donald.</p>
   <p id="hometown">I live in Duckburg.</p>
 </div>
 <p class="red-ptag">My best friend is Mickey.</p>
</body>
</html>
```

## id 선택자
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  #firstname {
    background-color: yellow;
  }
</style>
</head>
<body>
 <h1>Welcome to My Homepage</h1>
 <div>
   <p id="firstname" class="red-ptag">My name is Donald.</p>
   <p id="hometown">I live in Duckburg.</p>
 </div>
 <p class="red-ptag">My best friend is Mickey.</p>
</body>
</html>
```

## class 선택자
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  .red-ptag {
    background-color: red;
  }
</style>
</head>
<body>
 <h1>Welcome to My Homepage</h1>
 <div>
   <p id="firstname" class="red-ptag">My name is Donald.</p>
   <p id="hometown">I live in Duckburg.</p>
 </div>
 <p class="red-ptag">My best friend is Mickey.</p>
</body>
</html>
```

## 전체 선택자
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  * {
    background-color: red;
  }
</style>
</head>
<body>
 <h1>Welcome to My Homepage</h1>
 <div>
   <p id="firstname" class="red-ptag">My name is Donald.</p>
   <p id="hometown">I live in Duckburg.</p>
 </div>
 <p class="red-ptag">My best friend is Mickey.</p>
</body>
</html>
```

## 자식 선택자
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  div > p {
    background-color: yellow;
  }
</style>
</head>
<body>
 <h1>Welcome to My Homepage</h1>
 <div>
   <div>My name is Donald.</div>
   <p>I live in Duckburg.</p>
 </div>
 <div>
   <p>
     <div>I live in Duckburg.</div>
   </p>
 </div>
 <div>
   <span>
     <p>test123</p>
   </span>
 </div>
 <p class="red-ptag">My best friend is Mickey.</p>
</body>
</html>
```

## 인접 선택자
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  div + p {
    background-color: yellow;
  }
</style>
</head>
<body>
 <h1>Welcome to My Homepage</h1>
 <div>
   <h2>My name is Donald</h2>
   <p>I live in Duckburg.</p>
 </div>
 <p>My best friend is Mickey.</p>
 <p>I will not be styled.</p>
</body>
</html>
```

## 종속 선택자
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  p#more {
    background-color: yellow;
  }
  p.styled {
    background-color: red;
  }
</style>
</head>
<body>
 <h1>Welcome to My Homepage</h1>
 <div>
   <h2>My name is Donald</h2>
   <p>I live in Duckburg.</p>
 </div>
 <p id="more">My best friend is Mickey.</p>
 <p class="styled">I will not be styled.</p>
</body>
</html>
```

## 하위 선택자
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  div.more h2 {
    background-color: yellow;
  }
  </style>
</head>
<body>
 <h1>Welcome to My Homepage</h1>
 <div class="more">
   <h2>My name is Donald</h2>
   <p>I live in Duckburg.</p>
 </div>
 <div class="more">
   <h2>My name is Donald</h2>
   <p>I live in Duckburg.</p>
 </div>
 <div>
   <h2>My name is Donald</h2>
   <p>I live in Duckburg.</p>
 </div>
</body>
</html>
```

## 그룹 선택자
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
  <style>
  h1, p {
    background-color: yellow;
  }
  </style>
</head>
<body>
<h1>Welcome to My Homepage</h1>
<div>
  <p>My name is Donald.</p>
  <p>I live in Duckburg.</p>
</div>
<p>My best friend is Mickey.</p>
</body>
</html>
```


