var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello vue.js',
        newData: 'This is new Data',
        uid: 10,
        flag: false
    },
    methods: {
        clickBtn() {
            console.log("hi")
        },
        anotherEvent() {
            alert("new event listener")
        }
    }
})