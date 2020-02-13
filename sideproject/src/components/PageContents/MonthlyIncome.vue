<template>
    <div id="monthlyIncome" class="container-fluid">
        <h4>Monthly Income</h4>
        <table class="table table-bordered">
            <th id="sort">Month</th>
            <th id="sort">Income</th>
            <!-- TODO :: 최신 5개만 가져오도록 코드 수정 -->
            <tr v-for="(income, month) in rawMonthIncome" v-bind:key="month">
                <td>{{ month }}</td>
                <td>{{ income }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'monthlyIncome',
    data() {
        return {
            // TODO :: 데이터를 어떻게 가져올 것인가 -> Vuex?
            rawMonthIncome: {
                '3월' : '300만',
                '4월' : '400만',
                '5월' : '450만',
                '6월' : '500만',
                '7월' : '600만',
                '8월' : '700만'
            },
        }
    },
}
</script>

<style scoped>
#sort {
    text-align: center;
}
</style>