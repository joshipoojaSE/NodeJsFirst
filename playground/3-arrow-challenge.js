const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text:'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTaskToDo(){
        const taskToDo = this.tasks.filter((task) =>  task.completed === false );
        return taskToDo;
    }
};
console.log(tasks.getTaskToDo());