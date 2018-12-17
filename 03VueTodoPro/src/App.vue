<template>
  <div id="app">
    <site-nav></site-nav>
    <router-view/>
  </div>
</template>

<script>
  import SiteNav from '@/components/SiteNav.vue';

  export default {
    components: {
      SiteNav
    }
  }
</script>


<style>
</style>
