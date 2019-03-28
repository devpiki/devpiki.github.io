---
layout: post
title: "fieldset, legend"
date: 2019-03-24 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---
## fieldset
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form>
 <fieldset>
  Name: <input type="text"><br>
  Email: <input type="text"><br>
  Date of birth: <input type="text">
 </fieldset>
</form>
</body>
</html>
```

## legend
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form>
 <fieldset>
 	<legend>Personalia:</legend>
  Name: <input type="text"><br>
  Email: <input type="text"><br>
  Date of birth: <input type="text">
 </fieldset>
</form>
</body>
</html>
```

## fieldset - disabled
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form>
 <fieldset disabled>
 	<legend>Personalia:</legend>
  Name: <input type="text"><br>
  Email: <input type="text"><br>
  Date of birth: <input type="text">
 </fieldset>
</form>
</body>
</html>
```