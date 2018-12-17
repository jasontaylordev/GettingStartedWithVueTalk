<template>
    <div>
        <ul class="list-group mb-2">
            <li class="list-group-item" v-for="(todo, index) in filteredTodos" v-bind:key="todo.id">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" :id="'todo' + index" v-model="todo.done" />
                    <label class="form-check-label" :for="'todo' + index" :class="{ done: todo.done }">{{ todo.title }}</label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            todos: {
                type: Array,
                required: true
            },
            filter: {
                type: String,
                required: true
            }
        },
        computed: {
            filteredTodos() {
                if (this.filter === 'All') {
                    return this.todos;
                }

                if (this.filter === 'Todo') {
                    return this.todos.filter(todo => !todo.done);
                }

                if (this.filter === 'Done') {
                    return this.todos.filter(todo => todo.done);
                }
            }
        },
    }
</script>