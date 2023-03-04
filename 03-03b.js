const app = Vue.createApp({
    // data, functions 
    data(){
        return {
            showTitle: false,
            books:[
                {title: 'A1111', author: '1111A'},
                {title: 'B2222', author: '2222B'},
                {title: 'C3333', author: '3333C'}
            ]
        }
    },

    methods: {
        
      }


});
app.mount('#app')