---
layout: post
title: "Twemoji (Twitter Emoji)"
date: 2019-04-18 13:50:19 +0900
categories: [web, javascript]
tags: [javascript, twitter, emojis]
comments: true
author : piki
---

- [https://twemoji.twitter.com/](https://twemoji.twitter.com/)
- [https://github.com/twitter/twemoji](https://github.com/twitter/twemoji)
- 트위터 오픈 소스 이모티콘
- 사용 방법 - 태그 입력

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title></title>
	
</head>
<body>
    <h1>Twem &#x2764; ji</h1>
    <script src="http://twemoji.maxcdn.com/2/twemoji.min.js?12.0.0"></script>	
    <script>
      // I \u2764 emoji!
      twemoji.parse(document.body);
    </script>
  </body>
</html>
```

- 스크립트 입력

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title></title>
	<script src="http://twemoji.maxcdn.com/2/twemoji.min.js?12.0.0"></script>	
</head>
<body>

<script type="text/javascript">
	var div = document.createElement('div');
	div.textContent = 'I \u2764\uFE0F emoji!';
	document.body.appendChild(div);

	twemoji.parse(document.body);

	var img = div.querySelector('img');

	// note the div is preserved
	console.log(img.parentNode === div); // true

	console.log(img.src);      
	console.log(img.alt);      
	console.log(img.className);
	console.log(img.draggable);
</script>
</body>	
</html>
```

- 이미지로 출력 되고 있어서 사이즈 조절등은 api를 참조 하던지 아니면 CSS 로 조정 하면 될 것 같음
- 자세한 api는 github 참조

