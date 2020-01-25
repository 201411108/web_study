<template>
    <section>
        <!-- 애니메이션 효과 적용 -->
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                <!-- startEdit에서 todoItem의 index를 modal로 넘겨주면 될듯! -->
                <span v-on:click="startEdit(index)">{{ todoItem }}</span>
                <span class="removeBtn" type="button" v-on:click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>

        <modal v-if="showModal" v-on:close="showModal = false">
            <!-- 모달 헤더 -->
            <h3 slot="header">수정</h3>
            <!-- 모달 바디 -->
            <input slot="body" type="text" v-model="editTodoItem" placeholder="Editing your to do jobs" v-on:keyup.enter="editTodo">
            <!-- 모달 푸터 -->
            <span slot="footer" v-on:click="showModal = false">
                할 일을 입력하세요.
                <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
        </modal>
    </section>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data() {
        return {
            index: 0,
            editTodoItem: '',
            showModal: false,
        }
    },
    props: ['propsdata'],
    methods: {
        removeTodo(todoItem, index) {
            this.$emit('removeTodo', todoItem, index)
        },
        startEdit(index) {
            this.showModal = !this.showModal
            this.index = index
        },
        editTodo() {
            if(this.editTodoItem != "") {
                var value = this.editTodoItem && this.editTodoItem.trim()
                var index = this.index
                // value랑 index만 보내서 app 인스턴스에서 index 값으로 수정하도록!
                this.$emit('editTodo', value, index)
                this.showModal = !this.showModal
                this.clearInput()
            } else {
                alert('수정할 내용을 입력하세요!')
            }  
        },
        clearInput() {
            this.editTodoItem = ''
            this.index = 0
        }
    },
    components: {
        Modal: Modal
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}

li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}

.list-enter-active, .list-leave-active {
    transition: all 1s;
}

.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>