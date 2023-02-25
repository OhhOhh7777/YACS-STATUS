const app = Vue.createApp({
    // data, functions 
    data(){
        return {
            title: ' The Final Empire 1',
            title2: 'The Final Empire 2',
            author: 'Brandon Sanderson',
            age : 45,
            count: 0
        }
    },

    methods: {
        increment() {
          this.count++
        },
        changeTitle(){
          console.log("you clicked me")
          this.count--
        }
      }


});
app.mount('#app')