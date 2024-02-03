<template>
  <main>
    <h1>This is home page</h1>

    <text-cmp>Hello World!</text-cmp>
    <text-cmp class="a1" tag="p" size="small">Hello World!</text-cmp>
    <text-cmp class="a2" tag="p" size="xsmall">Hello World!</text-cmp>
    <text-cmp class="a3" tag="p" size="xxsmall">Hello World!</text-cmp>
    <icon-home-empty width="60" height="60"></icon-home-empty>
    <icon-comment></icon-comment>
  </main>
</template>

<script>
import TextCmp from '@/components/TextCmp.vue';
import IconHomeEmpty from '../components/icons/IconHomeEmpty.vue';
import IconComment from '../components/icons/IconComment.vue';

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'text-cmp': TextCmp,
    'icon-home-empty': IconHomeEmpty,
    'icon-comment': IconComment,
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