const app = Vue.createApp({
    //data, functions to react to events we want
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: "Jack Reacher",
            author: "Lee Child",
            age: 32,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount("#app")

