# web_study

Front-end framework 학습 Repository

학습 주제 : Vue.js

기간 : 14th, Jan ~ 

## 1. Vue.js

Vue.js 학습

### 1-1. Vue Basic Book

Ref 책 내용을 따라가며 학습한 내용 정리

Ref : Do it! Vue.js 입문, 이지스 퍼블리싱

### 1-2. 30days

1-1에서 학습한 내용을 또 다른 Ref pdf 자료를 참고하며 다시 정리

Ref : thirty-days-of-vue-fullstackio, newline.co

## 2. Side project

배운 내용을 토대로 한 사이드 프로젝트 진행

주제 : 거래 내용 기록 페이지 제작

27th, Jan, 2020 ~ 16th, Mar, 2020

### project structure

sideproject
```
App
|-MonthlyIncome               : 월별 수입 표시(최근 5개 항목)
  |-MonthlyIncomeDetail       : 전체 월별 수입 표시(/monthlyincome)
|-TransactionalRecord         : 거래대장 표시(최근 5개 항목)
  |-TransactinalRecordDetail  : 전체 거래 대장 표시(/transactionalrecord)
  |-Account                   : 거래 명세서 표시, 거래 대장에서 1개 항목 클릭 시 세부 거래 명세서 표시(/account/:id)
|-PageFooter                  : footer
```
