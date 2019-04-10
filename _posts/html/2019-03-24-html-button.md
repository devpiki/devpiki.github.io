---
layout: post
title: "button 태그"
date: 2019-03-24 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---
## type
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form>
 <input type="text" name="txt1" />
 <button type="button">Button</button>
 <button type="reset">Reset Button</button>
 <button type="submit">Submit Button</button>
</form>
</body>
</html>
```

## image button
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form>
 <button type="button">
  <img src="https://www.w3schools.com/images/compatible_chrome.gif" />
 </button>
</form>
</body>
</html>
```

## name, value
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="/formtest3.html" method="get">
 Choose your favorite subject:
 <button name="subject" type="submit" value="HTML">HTML</button>
 <button name="subject" type="submit" value="CSS">CSS</button>
</form>
</body>
</html>
```

## disabled
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form>
 <button type="button" disabled>Button</button>
</form>
</body>
</html>
```

## autofocus
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form>
 <button type="button" autofocus>Button</button>
</form>
</body>
</html>
```

## formaction
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="/formtest3.html" method="get">
 <input type="text" name="txt1" /><br>
 <button type="submit">Submit</button><br>
 <button type="submit" formaction="/hrtest.html">Button</button>
</form>
</body>
</html>
```


## formenctype
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="/formtest3.html" method="post" enctype="application/x-www-form-urlencoded">
 <input type="text" name="txt1" /><br>
 <button type="submit">Submit</button><br>
 <button type="submit" formenctype="text/plain">Button</button>
</form>
</body>
</html>
```

## formnovalidate
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="/formtest3.html" method="get">
 <input type="email" name="txt1" /><br>
 <button type="submit">Submit</button><br>
 <button type="submit" formnovalidate>Button</button>
</form>
</body>
</html>
```

## formtarget
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="/formtest3.html" method="get" target="_blank">
 <input type="email" name="txt1" /><br>
 <button type="submit">Submit</button><br>
 <button type="submit" formtarget="_self">Button</button>
</form>
</body>
</html>
```