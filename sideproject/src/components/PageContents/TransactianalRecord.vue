<template>
    <div id="transactionalRecord" class="container-fluid">
        <h4>Transactional Record</h4>
        <table class="table table-bordered">
            <th id="sort">거래처</th>
            <th id="sort">날짜</th>
            <th id="sort">품목</th>
            <th id="sort">부위</th>
            <th id="sort">환자명</th>
            <th id="sort">단가</th>
            <th id="sort">수량</th>
            <th id="sort">금액</th>
            <th id="sort">접수 날짜</th>
            <!-- TODO :: 최신 5개만 가져오도록 코드 수정 -->
            <!-- <tr v-for="(income, month) in rawMonthIncome" v-bind:key="month">
                <td>{{ month }}</td>
                <td>{{ income }}</td>
            </tr> -->
        </table>
    </div>
</template>

<script>
export default {
    name: 'transactionalRecord',
    data() {
        return {
            // TODO :: 데이터를 어떻게 가져올까? 배열로 한다면 v-for가 아니라 함수로 해야할 것 같다.
            rawdata: {

            }
        }
    }
}
</script>

<style scoped>
#sort {
    text-align: center;
}
</style>