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
  },
}
</script>

<template>
  <header class="main-header">
    <main-container class="header-inner">
      <!-- Logo -->
      <div>
        <RouterLink to="/" class="logo">
          Instagram
        </RouterLink>&nbsp;
      </div>

      <!-- Search -->
      <form class="search">
        <icn-search /><input type="text" placeholder="Search..">
      </form>

      <!-- Page Navigation -->
      <nav class="navigation">
        <RouterLink to="/">
          <icn-home-fill v-if="$route.name === 'Home'" />
          <icn-home-empty v-else />
        </RouterLink>&nbsp;

        <RouterLink to="/direct">
          <icn-direct-fill v-if="$route.name === 'Direct'" />
          <icn-direct-empty v-else />
        </RouterLink>&nbsp;

        <RouterLink to="/explore">
          <icn-explore-fill v-if="$route.name === 'Explore'" />
          <icn-explore-empty v-else />
        </RouterLink>&nbsp;

        <RouterLink to="/profile">
          <avatar :size="28" />
        </RouterLink>
      </nav>
    </main-container>
  </header>
</template>

<style scoped>
.main-header {
  z-index: 90;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  border-bottom: 1px solid rgb(var(--b6a), 1);
}

.header-inner {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 980px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
}

.search {
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
}

.navigation {
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
      margin-left: 20px;
    }
  }
}
</style>