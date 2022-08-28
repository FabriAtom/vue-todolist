const todo = [
    {
        text: 'lavare la macchina',
        done: true,
    },
    {
        text: 'giocare a carte',
        done: false,
    },
    {
        text: 'asciugare i panni',
        done: true,
    },
    {
        text: 'fare la doccia',
        done: false,
    },
]

const app = new Vue({
    el: '#app',
    data: {
        todo: todo,
        classiTodos: 'todo',
        newTodo: '',
    },
    methods: {
        toggleDoneOf(todo) {
            todo.done = !todo.done
        }
    }
})


// todo.forEach(element => {
//     console.log(element)
// });


