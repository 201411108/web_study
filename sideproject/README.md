# sideproject

치과기공 거래명세 관리 페이지

### Project composition

```
App
|-PageTitle                 : 메뉴항목 표시
|
|-PageBody                  : 컨텐츠 표시
  |-MonthlyIncome           : 월별 수입 표시
  |-TransactionalRecord     : 거래대장 표시
  |-Account                 : 거래명세서 표시
|
|-PageFooter                : footer
```

### TODO works

1. write excelFileReader.js

2. add functions for each components : parse needed information at each component

3. deals exceptions

* Me : make js file for excel reading

* Bro : consists each component layout

---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
