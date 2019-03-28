---
layout: post
title: "input 태그-type"
date: 2019-03-24 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---
## type="button"
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form>
 <input type="button" value="버튼" />
</form>
</body>
</html>
```

## type="checkbox", checked 
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html">
 <label for="ck1">Bike</label><input type="checkbox" value="1" name="ty1" id="ck1" /><br/>
 <label for="ck2">Car</label><input type="checkbox" value="2" name="ty1" id="ck2" /><br/>
 <!-- checked -->
 <label for="ck3">Boat</label><input type="checkbox" value="3" name="ty1" id="ck3" checked /><br/>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## type="file", multiple, accept
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="post" enctype="multipart/form-data">
 Select a file: <input type="file" name="files"><br/>
 <input type="submit" value="Submit">
</form>
<!-- multiple -->
<form action="atest.html" method="post" enctype="multipart/form-data">
 Select a file: <input type="file" name="files" multiple><br/>
 <input type="submit" value="Submit">
</form>
<!-- multiple -->
<form action="atest.html" method="post" enctype="multipart/form-data">
 Select a file: <input type="file" name="files" accept="audio/*,video/*,image/*"><br/>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## type="hidden"
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <input type="hidden" name="hid1" value="test123">
 <input type="hidden" name="hid1" value="test123">
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## type="image", align, alt, height, width
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 First name: <input type="text" name="fname"><br>
 Last name: <input type="text" name="lname"><br>
  <!-- submit -->
  <input type="image" src="https://www.w3schools.com/images/compatible_chrome.gif" alt="Submit" />
</form>
<form action="atest.html" method="get">
  First name: <input type="text" name="fname"><br>
  <input type="image" src="https://www.w3schools.com/images/compatible_chrome.gif" alt="Submit" align="right" />
</form>
<form action="atest.html" method="get">
  First name: <input type="text" name="fname"><br>
  <input type="image" src="https://www.w3schools.com/images/compatible_chrome.gif" alt="Submit" height="10" width="10" />
</form>
</body>
</html>
```

## type="password"
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 Email: <input type="text" name="email" /><br>
 Password: <input type="password" name="pwd" /><br>
</form>
</body>
</html>
```

## type="radio", name, checked
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
  <input type="radio" name="gender" value="male" checked> Male<br>
  <input type="radio" name="gender" value="female"> Female<br>
  <input type="radio" name="gender" value="other" > Other<br>  
  <input type="submit" value="Submit">
</form>
</body>
</html>
```

## type="reset", type="submit", type="text"
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
  <input type="text" name="txt1" value="111" /><br>
  <input type="text" name="txt2" /><br>
  <input type="text" name="txt3" /><br>  
  <input type="radio" name="gender" value="male" checked> Male<br>
  <input type="radio" name="gender" value="female"> Female<br>
  <input type="radio" name="gender" value="other" > Other<br>  
  <input type="reset" value="Reset">
  <input type="submit" value="Submit">
</form>
</body>
</html>
```

## type="color", type="date", type="datetime-local", type="month"
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
  <input type="color" name="col1" /><br>
  <input type="date" name="dat1" /><br>
  <input type="datetime-local" name="dat2" /><br>
  <input type="month" name="dat3" /><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>
```

## type="email", multiple
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
  <input type="email" name="email1"><br>
  <input type="email" name="email2" multiple><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>
```

## type="number",type="range", min, max, step, value
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
  <input type="number" name="num1" min="5" max="100" step="3" value="20"><br>
  <input type="range" name="num1" min="5" max="100" step="3" value="20"><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>
```

## type="search", name
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
  검색 : <input type="search" name="q"><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>
```

## type="tel"
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get">
  <!-- only Safari -->
  <input type="tel" name="usrtel"><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>
```

## type="time", type="week"
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get">
  <input type="time" name="time1"><br>
  <input type="week" name="week1"><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>
```

## type="url"
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get">
  <input type="url" name="url1"><br>
  <input type="submit" value="Submit">
</form>
</body>
</html>
```