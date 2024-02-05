<script>
import { RouterLink } from 'vue-router'
import MainContainer from '@/components/MainContainerCmp.vue';

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
      <div>
        <RouterLink to="/" class="logo">
          Instagram
        </RouterLink>&nbsp;
      </div>

      <form class="search">
        <icn-search/><input type="text" placeholder="Search..">
      </form>

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

        <RouterLink to="/profile">Profile</RouterLink>
      </nav>
    </main-container>
  </header>
</template>

<style scoped>
.main-header {
  border-bottom: 1px solid rgb(var(--b6a), 1);
}

.header-inner {
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
}

.search {
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

  icn-search {
    height: 24px;
    width: 24px;
  }
}

.navigation {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    margin-left: 20px;
  }
}
</style>