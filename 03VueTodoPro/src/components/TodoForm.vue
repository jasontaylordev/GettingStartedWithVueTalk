<template>
    <form @submit.prevent="addTodo" class="mb-2">
        <input class="form-control" v-model="newTodo" placeholder="Add todo..." />
    </form>
</template>

<script>
    export default {
        data() {
            return {
                newTodo: null // The new todo to be added.
            }
        },
        methods: {
            addTodo() {
                if (!this.newTodo) return;

                this.$emit('todo-added', {
                    title: this.newTodo,
                    done: false
                });

                this.newTodo = null;
            }
        }
    }
</script>