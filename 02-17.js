const app = Vue.createApp({
    // data, functions 
    data(){
        return {
            title: ' The Final Empire 1',
            title2: 'The Final Empire 2',
            author: 'Brandon Sanderson',
            age : 0,
            count: 0
        }
    },

    methods: {
        increment() {
          this.count++
        }
      }


});
app.mount('#app')