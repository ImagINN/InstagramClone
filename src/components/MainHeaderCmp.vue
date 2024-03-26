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
  data() {
    return {
      searchQuery: '',
      items: [
        {
          id: 0,
          name: 'Brie_Larson',
          avatar: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/230638_v9_bb.jpg',
          isFollowed: false,
        },
        {
          id: 1,
          name: 'Chris_Hemsworth',
          avatar: 'https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg?crop=1xw:0.75xh;center,top&resize=1200:*',
          isFollowed: false,
        },
        {
          id: 2,
          name: 'Tom_Holland',
          avatar: 'https://media.vanityfair.com/photos/6481dc94bafc6505d771230f/1:1/w_4000,h_4000,c_limit/1495240060',
          isFollowed: false,
        },
        {
          id: 3,
          name: 'Robert_Downey_Jr',
          avatar: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX32_CR0,0,32,44_AL_.jpg',
        },
        {
          id: 4,
          name: 'Mark_Ruffalo',
          avatar: 'https://m.media-amazon.com/images/M/MV5BNWIzZTI1ODUtZTUzMC00NTdiLWFlOTYtZTg4MGZkYmU4YzNlXkEyXkFqcGdeQXVyNTExOTk5Nzg@._V1_UX32_CR0,0,32,44_AL_.jpg',
          isFollowed: false,
        },
        {
          id: 5,
          name: 'Chris_Evens',
          avatar: 'https://m.media-amazon.com/images/M/MV5BMWZlMzRkZmYtZTg0My00MGE2LWFhZWQtOTRmZGQxMWY5OTJhXkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UX32_CR0,0,32,44_AL_.jpg',
          isFollowed: false,
        },
      ]
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
    showDropdown() {
      return this.searchQuery.length >= 3 && this.filteredItems.length > 0;
    }
  },
  methods: {
    handleInput() {
      // Arama kutusuna her bir tuşa basıldığında bu yöntem çağrılır
      // Yukarıdaki computed özelliklerine dayanarak dropdown'un görünürlüğünü kontrol eder
    }
  }
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
      <form class="hidden md:block drop-shadow-md text-left">
        <input v-model="searchQuery" class="h-7 w-52 border border-solid border-slate-100 bg-gray-100 rounded-md px-5"
          type="text" placeholder="Search" @input="handleInput">
        <div v-if="showDropdown" class="absolute w-52 bg-white border border-gray-200 rounded-md shadow-lg mt-1">
          <a v-for="item in filteredItems" :key="item.id" href="/profile"
            class="flex py-2 text-center items-center text-gray-800 hover:bg-gray-200">
            <avatar class="ml-2 h-[34px] w-[34px]" :src="item.avatar" style="background: transparent;" :size="32" />
            <label class="ml-2" for="">{{ item.name }}</label>
          </a>
        </div>
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