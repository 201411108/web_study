<template>
    <div id="monthlyIncome" class="container-fluid">
        <h4>Monthly Income</h4>
        <table class="table table-bordered">
            <th id="sort">Month</th>
            <th id="sort">Income</th>
            <!-- TODO :: 최신 5개만 가져오도록 코드 수정 -->
            <tr v-for="data in rawData" v-bind:key="data">
                <td>{{ data.month }}</td>
                <td>{{ data.income }}</td>
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
            rawData: [
                {
                    month: '3월',
                    income: '300만'
                },
                {
                    month: '4월',
                    income: '400만'
                },
                {
                    month: '5월',
                    income: '450만'
                },
                {
                    month: '6월',
                    income: '600만'
                },
                {
                    month: '7월',
                    income: '700만'
                },
            ]
        }
    },
}
</script>

<style scoped>
#sort {
    text-align: center;
}
</style>