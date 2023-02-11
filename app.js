// creating a console log
console,console.log('hello VUE');

// controls anything within id app
const app = Vue.createApp({
    // data, functions 
    data(){
        return {
            title: ' The Final Empire 1',
            title2: 'The Final Empire 2',
            author: 'Brandon Sanderson'
        }
    }
});
app.mount('#app')
