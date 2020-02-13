# sideproject

치과기공 거래명세 관리 페이지

### Project composition

```
App
|-MonthlyIncome               : 월별 수입 표시(최근 5개 항목)
  |-MonthlyIncomeDetail       : 전체 월별 수입 표시(/monthlyincome)
|-TransactionalRecord         : 거래대장 표시(최근 5개 항목)
  |-TransactinalRecordDetail  : 전체 거래 대장 표시(/transactionalrecord)
  |-Account                   : 거래 명세서 표시, 거래 대장에서 1개 항목 클릭 시 세부 거래 명세서 표시(/account/:id)
|-PageFooter                  : footer
```

---

## project start

### Project setup
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
