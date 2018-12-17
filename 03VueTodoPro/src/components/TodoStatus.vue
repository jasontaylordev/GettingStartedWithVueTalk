<template>
    <div>
        <p>{{ remaining }} item(s) remaining.</p>
    </div>
</template>

<script>
    export default {
        props: {
            todos: {
                type: Array,
                required: true
            },
        },
        computed: {
            remaining() {
                return this.todos.filter(todo => !todo.done).length;
            },
        }
    }
</script>

<style scoped>

</style>