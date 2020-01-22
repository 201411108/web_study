<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- 즉각적인 반응을 위해 propsdata 사용 -->
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo" v-on:editTodo="editTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
// 컴포넌트 불러오기
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'app',
  data () {
    return {
      todoItems: []
    }
  },
  created() {
        // 로컬 스토리지에 데이터가 존재할 경우 결과를 반영하기 위한 배열에 추가
        if(localStorage.length > 0) {
            for(var i = 0; i < localStorage.length; i++) {
                this.todoItems.push(localStorage.key(i))
            }
        }
    },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem)
      this.todoItems.push(todoItem)
    },
    clearAll() {
      localStorage.clear()
      this.todoItems = []
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1)
    },
    editTodo(todoItem) {
      // TODO :: 넘겨온 것을 받아서 수정해야 하는데... 어떻게 수정해야 할까?
      alert(todoItem)
    }
  },
  // 컴포넌트 등록
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

body {
    text-align: center;
    background-color: #F6F6F8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
