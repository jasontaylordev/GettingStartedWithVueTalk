<template>
    <nav class="nav nav-pills">
        <a class="nav-link"
            v-for="filter in filters"
            :key="filter"
            @click="selectFilter(filter)"
            :class="{ active: filter === activeFilter }"
            href="#">
            {{ filter }}
        </a>
    </nav>
</template>

<script>
    export default {
        props: {
            defaultFilter: {
                type: String,
                required: true
            },
        },
        data() {
            return {
                filters: [ 'All', 'Todo', 'Done' ],
                activeFilter: this.defaultFilter
            }
        },
        methods: {
            selectFilter: function(filter) {
                this.activeFilter = filter;
                this.$emit('filter-selected', this.activeFilter);
            }
        }
    }