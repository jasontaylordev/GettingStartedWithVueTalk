<template>
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-sm-4">
        <TodoLists />
      </div>
      <div class="col-sm-8">
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoLists from '@/components/TodoLists.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'home',
  components: {
    TodoLists,
    TodoList
  }
}
</script>
