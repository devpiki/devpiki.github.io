---
layout: post
title: "Singleton Pattern"
date: 2021-11-01 13:50:19 +0900
categories: [web, javascript, css, 웹디자인기능사]
tags: [web, javascript, css, 웹디자인기능사]
comments: true
author : piki
---

- 싱글톤 패턴
	- 생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴. [위키](https://ko.wikipedia.org/wiki/%EC%8B%B1%EA%B8%80%ED%84%B4_%ED%8C%A8%ED%84%B4)
	- 특정 클래스의 객체 인스턴스를 하나만 만들도록 함
- 예시 [참조소스](https://codepen.io/JoeCoulam/pen/mRqbzz)

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>Creating a singleton Class in ES6</h1>
<span id="txt"></span>

<script>
let txt = document.getElementById('txt');
let sInstance = null;

class SingletonExample {
  constructor() {
    if (!sInstance) {
      sInstance = this;
      txt.textContent = "Singleton Class Created!";
    } else {
      txt.innerHTML += "<br>Whoopsie, you're only allowed one instance of this Class!";
    }
    return sInstance;
  }
}

let singletonExample = new SingletonExample();
let singletonExample2 = new SingletonExample();

//test
txt.innerHTML += '<br>' + (singletonExample === singletonExample2);
txt.innerHTML += '<br>' + (singletonExample === sInstance);
txt.innerHTML += '<br>' + (singletonExample2 === sInstance);
singletonExample['test123'] = 'dfdfdf';
txt.innerHTML += '<br>' + (singletonExample2['test123']);
</script>
</body>
</html>
```

- Angular 는 싱글톤 패턴의 대표적인 프레임워크
	- https://angular.io/guide/singleton-services
- 싱글톤은 인스턴스가 필요 할때 계속 만들어 내는것이 아닌 기존의 인스턴스를 사용 하는 형태임
	- 메모리 낭비를 줄일수 있다
	- 두번째 객체의 로딩 시간도 줄일 수 있다.

