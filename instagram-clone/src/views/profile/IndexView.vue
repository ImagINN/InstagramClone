<template>
  <main>
    <text-cmp tag="h1">This is Profile index page.</text-cmp>

    <div class="wrapper">
      <nav>
        <RouterLink to="/profile">Post</RouterLink>&nbsp;&nbsp;|
        <RouterLink to="/profile/save">Save</RouterLink>&nbsp;&nbsp;|
        <RouterLink to="/profile/reels">Reels</RouterLink>&nbsp;&nbsp;|
        <RouterLink to="/profile/tag">Tag</RouterLink>&nbsp;&nbsp;|
      </nav>
    </div>

    <RouterView />
  </main>
</template>
  
<script>
import TextCmp from '@/components/TextCmp.vue';

export default {
  name: 'ProfileView',
  components: {
    'text-cmp': TextCmp,
  }
}
</script>
  
<style scoped></style>