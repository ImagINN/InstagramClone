<template>
  <main>
    <h1>This is home page</h1>

    <text-cmp>Hello World!</text-cmp>
    <text-cmp class="a1" tag="p" size="small">Hello World!</text-cmp>
    <text-cmp class="a2" tag="p" size="xsmall">Hello World!</text-cmp>
    <text-cmp class="a3" tag="p" size="xxsmall">Hello World!</text-cmp>
  </main>
</template>

<script>
import TextCmp from '@/components/TextCmp.vue';

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'text-cmp': TextCmp,
  }
}
</script>

<style scoped>
.a1 {
  color: rgba(var(--a72), 1);
}

.a2 {
  color: rgba(var(--ba8), 1);
  
}

.a3 {
  color: rgba(var(--ba8), 1);
  
}
</style>