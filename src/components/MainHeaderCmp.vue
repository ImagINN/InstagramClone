<script>
import { RouterLink } from 'vue-router'
import MainContainer from '@/components/MainContainerCmp.vue';
import Avatar from '@/components/AvatarCmp.vue';

import IconHomeEmpty from '@/components/icons/IconHomeEmpty.vue';
import IconHomeFill from '@/components/icons/IconHomeFill.vue';
import IconSearch from '@/components/icons/IconSearch.vue';
import IconDirectEmpty from '@/components/icons/IconDirectEmpty.vue';
import IconDirectFill from '@/components/icons/IconDirectFill.vue';
import IconExploreEmpty from '@/components/icons/IconExploreEmpty.vue';
import IconExploreFill from '@/components/icons/IconExploreFill.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';

export default {
  name: 'MainHeader',
  components: {
    'RouterLink': RouterLink,
    'main-container': MainContainer,
    'avatar': Avatar,
    'icn-home-empty': IconHomeEmpty,
    'icn-home-fill': IconHomeFill,
    'icn-search': IconSearch,
    'icn-direct-empty': IconDirectEmpty,
    'icn-direct-fill': IconDirectFill,
    'icn-explore-empty': IconExploreEmpty,
    'icn-explore-fill': IconExploreFill,
    'icn-instagram': IconInstagram
  },
}
</script>

<template>
  <header class="z-90 fixed inset-x-0 top-0 bg-white border-b border-solid border-slate-100">
    <main-container class="header-inner h-16 flex items-center justify-center md:grid md:grid-cols-3 md:items-center">
      <!-- Logo -->
      <div class="flex items-center drop-shadow-lg">
        <icn-instagram class="mr-1 drop-shadow-lg" />
        <RouterLink to="/" class="logo text-2xl font-bold drop-shadow-lg">
          Instagram Clone
        </RouterLink>&nbsp;
      </div>

      <!-- Search -->
      <form class="hidden md:block text-center drop-shadow-md">
        <input class="h-7 w-52 border border-solid border-slate-100 bg-gray-100 rounded-md px-5" type="text"
          placeholder="Search">
      </form>

      <!-- Page Navigation -->
      <nav class="z-90 fixed left-0 right-0 bottom-0 bg-white border-t border-solid 
      border-slate-100 h-48 flex items-center justify-around md:flex md:justify-end md:h-auto md:border-0 md:static">
        <RouterLink to="/" class="mr-4 drop-shadow-md">
          <icn-home-fill v-if="$route.name === 'Home'" />
          <icn-home-empty v-else />
        </RouterLink>

        <RouterLink to="/direct" class="mr-4 drop-shadow-md">
          <icn-direct-fill v-if="$route.name === 'Direct'" />
          <icn-direct-empty v-else />
        </RouterLink>

        <RouterLink to="/explore" class="mr-4 drop-shadow-md">
          <icn-explore-fill v-if="$route.name === 'Explore'" />
          <icn-explore-empty v-else />
        </RouterLink>

        <RouterLink class="drop-shadow-md" to="/profile">
          <avatar :size="28" style="background: transparent;" />
        </RouterLink>
      </nav>
    </main-container>
  </header>
</template>

<style scoped>
/* .main-header {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  border-bottom: 1px solid rgb(var(--b6a), 1);
} */

/* .header-inner {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 980px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
} */

/* .logo {
  font-size: 1.6rem;
  font-weight: bold;
} */

/* .search {
  display: none;

  @media (min-width: 980px) {
    display: block;
    text-align: center;

    input {
      height: 28px;
      width: 215px;
      border: 1px solid rgb(var(--b6a), 1);
      background-color: rgb(var(--b3f), 1);
      border-radius: 4px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
} */

/* .navigation {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  border-top: 1px solid rgb(var(--b6a), 1);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 980px) {
    height: auto;
    border: 0;
    position: static;
    justify-content: flex-end;

    a {
      margin-left: 15px;
    }
  }
} */

@media (min-width: 980px) {
  .md\:flex {
    display: flex;
  }

  .md\:justify-end {
    justify-content: flex-end;
  }

  .md\:h-auto {
    height: 20px;
  }

  .md\:border-0 {
    border: 0;
  }

  .md\:static {
    position: static;
  }
}
</style>