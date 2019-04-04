---
layout: post
title: "Multiple Column"
date: 2019-04-01 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## column-count : 단 갯수
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div {
  border : 1px solid red;
  width : 100%;
}
.newspaper {
  -webkit-column-count: 3; /* Chrome, Safari, Opera */
  -moz-column-count: 3; /* Firefox */
  column-count: 3;
}
</style>
</head>
<body>
<div class="newspaper">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
aliquip ex ea commodo consequat. 
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat
</div>
</body>
</html>
```

## column-gap : 단 사이의 간격 
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div {
  border : 1px solid red;
  width : 100%;
}
.newspaper {
  -webkit-column-count: 3; /* Chrome, Safari, Opera */
  -moz-column-count: 3; /* Firefox */
  column-count: 3;
  -webkit-column-gap: 50px; /* Chrome, Safari, Opera */
  -moz-column-gap: 50px; /* Firefox */
  column-gap: 50px;
}
</style>
</head>
<body>
<div class="newspaper">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
aliquip ex ea commodo consequat. 
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat
</div>
</body>
</html>
```

## column-rule : 단 사이의 구분선 지정
```html
<!DOCTYPE html>
<html>
<head>
<style> 
div {
  border : 1px solid red;
  width : 100%;
}
.newspaper {
  -webkit-column-count: 3; /* Chrome, Safari, Opera */
  -moz-column-count: 3; /* Firefox */
  column-count: 3;
  -webkit-column-gap: 50px; /* Chrome, Safari, Opera */
  -moz-column-gap: 50px; /* Firefox */
  column-gap: 50px;
  -webkit-column-rule: 4px double #ff00ff; /* Chrome, Safari, Opera */
  -moz-column-rule: 4px double #ff00ff; /* Firefox */
  column-rule: 4px double #ff00ff;
}
</style>
</head>
<body>
<div class="newspaper">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
aliquip ex ea commodo consequat. 
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat
</div>
</body>
</html>
```
