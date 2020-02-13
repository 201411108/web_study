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

* Me : make js file for excel writing and writing parts

엑셀로 굳이 만들 필요 없이 거래 명세서와 거래 대장을 출력하게 하면 되지 않을까?

근데 엑셀로 만들 필요는 있다. 기록을 남기기 위해서?

* Bro : consists each component layout -> get data from excel files

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
