---
layout: post
title: "textarea 태그"
date: 2019-03-25 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---

## textarea
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <textarea>
textarea
 </textarea>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## cols, rows, name
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <textarea cols="20" rows="5" name="txt1">
textarea
 </textarea>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## disabled, readonly 
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <textarea name="txt1" disabled>
textarea
 </textarea>
  <textarea name="txt2" readonly>
textarea
 </textarea>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## maxlength
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <textarea maxlength="10" name="txt1"></textarea>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## autofocus, placeholder, required
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <textarea autofocus name="txt1" placeholder="필수 입력 입니다." required></textarea>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## wrap
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <textarea rows="2" cols="20" name="hard" wrap="hard">
At W3Schools you will find free Web-building tutorials.
</textarea>
<textarea rows="2" cols="20" name="soft" wrap="soft">
At W3Schools you will find free Web-building tutorials.
</textarea>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```