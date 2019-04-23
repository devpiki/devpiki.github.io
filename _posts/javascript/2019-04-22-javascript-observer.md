---
layout: post
title: "Observer Pattern"
date: 2019-04-22 13:50:19 +0900
categories: [web, javascript]
tags: [javascript, pattern, observer]
comments: true
author : piki
---

- 옵저버 패턴
	- 객체의 상태 변화를 관찰하는 관찰자들, 즉 옵저버들의 목록을 각각의 객체에 등록 시키고 각 객체들의 상태가 변화 할때 마다 객체가 직접 옵저버에게 통지 하도록 하는 디자인 패턴. [위키](https://ko.wikipedia.org/wiki/%EC%98%B5%EC%84%9C%EB%B2%84_%ED%8C%A8%ED%84%B4)
- 예시 [참조소스](https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/)

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<input type="text" class="js-input" placeholder="type something here" style="margin-bottom:20px;" />
<div>
	<button class="js-subscribe-p1">Subscribe</button>
  	<button class="js-unsubscribe-p1">Unsubscribe</button>
    <div>
    	P1:<span class="js-p1"></span>
    </div>
</div>
<div>
  <button class="js-subscribe-p2">Subscribe</button>
  <button class="js-unsubscribe-p2">Unsubscribe</button>
  <div>
    	P2:<span class="js-p2"></span>
  </div>
</div>
<div>
  <button class="js-subscribe-p3">Subscribe</button>
  <button class="js-unsubscribe-p3">Unsubscribe</button>
  <div>
    	P3:<span class="js-p3"></span>
  </div>
</div>
<script>
class Observable {
  constructor() {
    this.observers = [];
  }
  subscribe(f) {
    this.observers.push(f);
  }
  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }
  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

const input = document.querySelector('.js-input');

const ps = document.querySelectorAll('span[class*=js-p]');
const subscribePs = document.querySelectorAll('[class*=js-subscribe-p]');
const unsubscribePs = document.querySelectorAll('[class*=js-unsubscribe-p]');
const updateP1 = text => ps[0].textContent = text;
const updateP2 = text => ps[1].textContent = text;
const updateP3 = text => ps[2].textContent = text;

const headingsObserver = new Observable();
headingsObserver.subscribe(updateP1);
headingsObserver.subscribe(updateP2);
headingsObserver.subscribe(updateP3);

subscribePs[0].addEventListener('click', () => headingsObserver.subscribe(updateP1));
unsubscribePs[0].addEventListener('click', () => headingsObserver.unsubscribe(updateP1));
subscribePs[1].addEventListener('click', () => headingsObserver.subscribe(updateP2));
unsubscribePs[1].addEventListener('click', () => headingsObserver.unsubscribe(updateP2));
subscribePs[2].addEventListener('click', () => headingsObserver.subscribe(updateP3));
unsubscribePs[2].addEventListener('click', () => headingsObserver.unsubscribe(updateP3));

input.addEventListener('keyup', e => {
  headingsObserver.notify(e.target.value);
});
</script>
</body>
</html>
```	

- Vue.js 에서는 옵저버 패턴을 이용하여 속성에 액세스 하거나 수정할 때 종속성 추적 및 변경 알림을 수행할 수 있다고 한다.
	- https://vuejs.org/v2/guide/reactivity.html
- 장점 
  - Subject 클래스와 Observer 클래스는 서로 독립적이므로 각각 독립적으로 재사용이 가능
  - Subject 클래스와 Observer 클래스간의 결합도가 낮다
  - [참조](https://kimsunzun.tistory.com/entry/Observer%EA%B0%90%EC%8B%9C%EC%9E%90%ED%8C%A8%ED%84%B4)