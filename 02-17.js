const app = Vue.createApp({
    // data, functions 
    data(){
        return {
            showTitle: false,
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
        },
        toggleshowtitle() {
          this.showTitle = !this.showTitle;
          
        }
      }


});
app.mount('#app')