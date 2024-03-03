<template>
  <main>
    <div class="home">
      <div class="time-line">
        <post />      
      </div>

      <div class="side-bar">
        <side-bar />
      </div>
    </div>
  </main>
</template>

<script>
import Post from '@/components/PostCmp.vue';
import SideBar from '@/components/HomePgSideBarCmp.vue';

export default {
  name: 'HomeView',
  components: {
    'post': Post,
    'side-bar': SideBar,
  }
}
</script>

<style scoped>
.home {
  max-width: 605px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 980px) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.side-bar {
  display: none;

  @media (min-width: 980px) {
    display: block;
  }
}
</style>