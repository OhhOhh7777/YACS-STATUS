const app = Vue.createApp({
    // data, functions 
    data(){
        return {
            showTitle: false,
            title: ' The Final Empire 1',
            title2: 'The Final Empire 2',
            author: 'Brandon Sanderson',
            age : 45,
        }
    },

    methods: {
        changeTitle(){
            console.log("you clicked me")
            this.count--
        },
        toggleshowtitle() {
            this.showTitle = !this.showTitle;
          
        },
        handleEvent() {
            console.log("Event")
        }
    }


});
app.mount('#app')