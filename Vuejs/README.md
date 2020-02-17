## Vue.js Study

### Vue Basic Book

Do it! Vue.js 입문, 이지스 퍼블리싱 책에 나오는 내용들을 학습함.

6개 학습 부분으로 나누어져 있다.

1. chapter 2

CDN 방식으로 Vue를 사용하는 방법과 기본 뷰 인스턴스 실습

* CDN 방식으로 Vue 사용하기

head 또는 body 태그 내에 삽입하여 vue를 설치하지 않고 사용할 수 있다.

두 태그의 차이는 페이지를 불러오는 시점의 차이이다. CDN 링크는 공식 사이트에서 확인할 수 있다.

```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

* 기본 뷰 인스턴스 생성

script 태그 내에서 기본 뷰 인스턴스를 생성할 수 있다.

[chapter2/index.html](https://github.com/201411108/web_study/blob/master/Vuejs/Vue%20Basic%20Book/chapter2/index.html)


2. chapter 3

뷰 인스턴스 라이프 사이클, 전역/지역 컴포넌트 학습

부모-자식 컴포넌트 간 데이터/동작 전달하는 방법, props, $emit(), eventbus

* 3-1. 뷰 인스턴스의 라이프 사이클

뷰 인스턴스는 특정한 라이프 사이클을 가지며 해당 라이프 사이클에서 수행하는 적절한 동작을 정의하면 좀 더 효율적으로 동작하는 페이지를 만들 수 있다.

[chapter3/chapter3-1.html](https://github.com/201411108/web_study/blob/master/Vuejs/Vue%20Basic%20Book/chapter3/chapter3-1.html)


* 3-2. 전역/지역 컴포넌트

name 속성이 정의되어 있지 않고 전체 영역을 차지하는 컴포넌트를 전역 컴포넌트라고 한다.

[chapter3/chapter3-2-1.html](https://github.com/201411108/web_study/blob/master/Vuejs/Vue%20Basic%20Book/chapter3/chapter3-2-1.html)

지역 컴포넌트를 만들어 components 속성에 넣어 다른 컴포넌트의 하위 요소로 삽입할 수 있다.

[chapter3/chapter3-2-2.html](https://github.com/201411108/web_study/blob/master/Vuejs/Vue%20Basic%20Book/chapter3/chapter3-2-2.html)

* 3-3. 컴포넌트 간 통신

v-bind와 props 속성을 사용해서 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전송할 수 있다.

[chapter3/chapter3-3-1.html](https://github.com/201411108/web_study/blob/master/Vuejs/Vue%20Basic%20Book/chapter3/chapter3-3-1.html)

$emit()을 사용해서 하위 컴포넌트에서 상위 컴포넌트에 있는 함수를 호출하여 사용할 수 있다.

[chapter3/chapter3-3-2.html](https://github.com/201411108/web_study/blob/master/Vuejs/Vue%20Basic%20Book/chapter3/chapter3-3-2.html)

eventBus 객체를 사용해서 같은 레벨의 컴포넌트간 데이터 통신, 함수 사용을 할 수 있다.

[chapter3/chapter3-3-3.html](https://github.com/201411108/web_study/blob/master/Vuejs/Vue%20Basic%20Book/chapter3/chapter3-3-3.html)

3. chapter 4

Contains Vue router practices

4. chapter 5

Contains Vue attributes practices

5. chapter 5-vue-project

Contains practices that make vue project by vue-cli

6. vue-todo

Practice of vue-project

### 30days

These contents are from the pdf "thirty-days-of vuejs" from newline.co

