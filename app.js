const app = Vue.createApp({
    data() {
        return{
            enteredGoal: '',
            tasks: [],            
        }
      },
    methods: {
        addTasks(){
            this.tasks.push(this.enteredGoal)
        },

    },
});
app.mount('#assignment');