<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <PageTitle></PageTitle> -->
    <!-- PageTitle 대신 nav 바로 대체 -->
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/monthlyincome">Monthly Income</router-link> | 
      <router-link to="/transactionalrecord">TransActinal Record</router-link>
    </div>
    <!-- PageBody 대신 PageBody 내용을 포함 -->
    <!-- <PageBody></PageBody> -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <MonthlyIncome></MonthlyIncome>
            </div>
            <div class="col-md-4">
                <TransactianlRecord></TransactianlRecord>
            </div>
            <div class="col-md-4">
                <Account></Account>
            </div>
        </div>
    </div>
    <!-- TODO :: 세부 항목 보여주기 -->
    <router-view/>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
// import PageTitle from './components/PageTitle.vue'
// import PageBody from './components/PageBody.vue'
import MonthlyIncome from './components/PageContents/MonthlyIncome.vue'
import TransactianlRecord from './components/PageContents/TransactianalRecord.vue'
import Account from './components/PageContents/Account.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'app',
  components: {
    // PageTitle,
    // PageBody,
    PageFooter,
    MonthlyIncome,
    TransactianlRecord,
    Account
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
