Vue.component('sibling-component', {
    props: ['propsdata2'],
    template: '<p>sibling component : {{propsdata2}}</p>',
});

Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{propsdata}}</p>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! passed from Parent Component',
        anotherMessage: "This will be go to Sibling Component"
    },
});