<template>
    <div class="inputBox shadow">
        <!-- 엔터키를 눌러도 입력되도록 설정 -->
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>

        <!-- 모달 기능 추가 -->
        <modal v-if="showModal" v-on:close="showModal = false">
            <!-- 모달 헤더 -->
            <h3 slot="header">경고</h3>
            <!-- 모달 푸터 -->
            <span slot="footer" v-on:click="showModal = false">
                할 일을 입력하세요.
                <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    // Vue 개발자 도구에서 값의 변동 확인 가능
    data() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        addTodo() {
            // input 태그 내용이 비어 있지 않을 때
            if(this.newTodoItem != "") {
                // 앞 뒤 공백을 제거한 뒤
                var value = this.newTodoItem && this.newTodoItem.trim()
                // 로컬 스토리지에 저장, 바로 반영되도록 연결(이벤트 전달)
                this.$emit('addTodo', value)
                // input 태그 초기화
                this.clearInput()
            } else {
                this.showModal = !this.showModal
            }
        },
        clearInput() {
            this.newTodoItem = ''
        }
    },
    components: {
        Modal: Modal
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0
}
.addBtn {
    color: white;
    vertical-align: middle;
}
</style>