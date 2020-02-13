// todo=footer 전역 컴포넌트 등록
Vue.component('todo-footer', {
    template: '<p>This is another global child component</p>'
});

// todo-list 지역 컴폰넌트 등록
var localComponent = {
    template: '<p>This is another local child component</p>'
};

new Vue({
    el: '#app',
    data: {
       message: 'This is a parent component'
    },
    // 지역 컴포넌트 등록
    components: {
        'todo-list': localComponent
    }
});