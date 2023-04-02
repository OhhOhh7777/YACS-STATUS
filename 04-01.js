const app = Vue.createApp({
    // data, functions 
    data(){
        return {
            books:[
                {title: 'A1111', author: '1111A', out: true},
                {title: 'B2222', author: '2222B', out: false},
                {title: 'C3333', author: '3333C', out: true}
            ]
        }
    },

    computed: {
        filterBooks(){
            return this.books.filter( (book) => book.out)
        }
    }


});
app.mount('#app')