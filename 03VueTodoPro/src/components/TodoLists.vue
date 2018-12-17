<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="list in lists" :key="list.id">{{ list.title }}</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                lists: [
                    { id: 1, title: 'MIT' },
                    { id: 2, title: 'Shopping' },
                ]
            }
        },
    }
</script>

<style scoped>

</style>