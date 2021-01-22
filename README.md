* 이 블로그는 jekyll 3.8.5 , minima 테마로 만들어 졌습니다.
* 개발 환경은 windows10 입니다.

* bundle 설치
```text
bundle install
```
* jekyll server start
```text
bundle exec jekyll serve
``` 
* jekyll build clean
```text
bundle exec jekyll clean
``` 
* jekyll build
```text
bundle exec jekyll build -d ../master
```
* 배포용 빌드
```text
cross-env JEKYLL_ENV=production jekyll build -d ../master
```

* 배포용 빌드 - 에러 발생시
```text
bundle exec cross-env JEKYLL_ENV=production jekyll build -d ../master
```

* cross-env가 안깔려 있으면
```text
npm i -g cross-env
```
* git push
```text
git push origin source
git push origin master
```
-------------------------------------------------------
## 참조 URL
* Liquid 문법
> https://shopify.github.io/liquid/

* jekyll document 
> https://jekyllrb-ko.github.io/docs/home/ (v.3.8.1, 한글)
> https://jekyllrb.com/docs/ (v.3.8.5, 영어)

* pagination
> https://github.com/timble/jekyll-pagination
