<script>
// eslint-disable-next-line no-unused-vars
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeaderCmp.vue';
import MainContainer from '@/components/MainContainerCmp.vue';

export default {
  name: 'App',
  components: {
    'main-header': MainHeader,
    'main-container': MainContainer,
  }
}
</script>

<template>
  <main-header />

  <main class="main pt-[80px]">
    <main-container>
      <RouterView />
    </main-container>
  </main>

</template>

<style scoped>
/* .main {
  padding-top: 40px;
} */
</style>
