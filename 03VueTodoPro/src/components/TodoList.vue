<template>
    <div>
        <todo-filter :defaultFilter="filter" @filter-selected="onFilterSelected" />
        <todo-items :filter="filter" :todos="todos" />        
        <todo-form @todo-added="onTodoAdded" />
        <todo-status :todos="todos" />
    </div>
</template>

<script>
    import TodoFilter from '@/components/TodoFilter.vue';
    import TodoItems from '@/components/TodoItems.vue';
    import TodoForm from '@/components/TodoForm.vue';
    import TodoStatus from '@/components/TodoStatus.vue';

    export default {
        components: {
            TodoFilter,
            TodoItems,
            TodoForm,
            TodoStatus
        },
        data() {
            return {
                todos: [
                    { id: 1, title: 'Do this thing.', done: false },
                    { id: 2, title: 'Do another thing.', done: false },
                    { id: 3, title: 'Do many, many things.', done: false },
                    { id: 4, title: 'This thing is done!', done: true }
                ],
                filter: 'All'
            }
        },
        methods: {
            onFilterSelected: function(selectedFilter) {
                this.filter = selectedFilter;
            },
            onTodoAdded: function(todo) {
                this.todos.push(todo);
            }
        }
    }
</script>