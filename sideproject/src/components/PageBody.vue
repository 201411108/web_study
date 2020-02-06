<template>
    <div id="PageBody" class="container-fluid">
        This is Page Body.
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
</template>

<script>
import MonthlyIncome from './PageContents/MonthlyIncome.vue'
import TransactianlRecord from './PageContents/TransactianalRecord.vue'
import Account from './PageContents/Account.vue'

export default {
    name: 'PageBody',
    components: {
        MonthlyIncome,
        TransactianlRecord,
        Account
    }
}
</script>

<style>

</style>