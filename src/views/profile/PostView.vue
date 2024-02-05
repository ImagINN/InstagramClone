<template>
    <main>
      <text-cmp tag="h1">This is Profile post page.</text-cmp>
    </main>
  </template>
  
  <script>
  import TextCmp from '@/components/TextCmp.vue';
  
  export default {
    name: 'ProfilePostView',
    components: {
      'text-cmp': TextCmp,
    }
  }
  </script>
  
  <style scoped>
  
  </style>