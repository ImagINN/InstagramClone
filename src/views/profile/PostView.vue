<template>
  <main>
    <text-cmp tag="h1">This is Profile post page.</text-cmp>
    <profile-header />
    <div class="mt-24">
      <side-bar />
    </div>
  </main>
</template>

<script>
import TextCmp from '@/components/TextCmp.vue';
import SideBar from '@/components/HomePgSideBarCmp.vue';
import ProfileHeader from '@/components/ProfileHeaderCmp.vue';

export default {
  name: 'ProfilePostView',
  components: {
    'text-cmp': TextCmp,
    'profile-header': ProfileHeader,
    'side-bar': SideBar,
  }
}
</script>

<style scoped></style>