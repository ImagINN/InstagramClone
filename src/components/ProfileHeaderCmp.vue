<script>
import { RouterLink } from 'vue-router'
import MainContainer from '@/components/MainContainerCmp.vue';
import Avatar from '@/components/AvatarCmp.vue';
import CustomText from '@/components/TextCmp.vue';

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
        'custom-text': CustomText,
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
            post: {
                avatar: 'https://m.media-amazon.com/images/M/MV5BNWIzZTI1ODUtZTUzMC00NTdiLWFlOTYtZTg4MGZkYmU4YzNlXkEyXkFqcGdeQXVyNTExOTk5Nzg@._V1_UX32_CR0,0,32,44_AL_.jpg',
            }
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
        handleInput() { }
    }
}
</script>

<template>
    <header class="z-90 fixed inset-x-0 top-0 bg-white">
        <main-container
            class="header-inner h-44 flex items-center justify-center border-b border-solid border-slate-200 md:grid md:grid-cols-3 md:items-center my-4">
            <div class="flex items-center justify-center mb-4">
                <avatar class="items-center justify-center" :size="140" style="background: transparent;" />
            </div>
            <div class="flex justify-start items-start">
                <div class="grid grid-col-3 text-left items-start">
                    <div class="flex justify-center items-center">
                        <label class="font-semibold" for="">charlie_hunnam</label>
                    </div>
                    <div class="">
                        <button type="button">Profili Düzenle</button>
                    </div>
                    <div class="">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                                <g fill="none" fill-rule="evenodd">
                                    <path
                                        d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path fill="currentColor"
                                        d="M13.414 2.1a2 2 0 0 0-2.828 0L8.686 4H6a2 2 0 0 0-2 2v2.686l-1.9 1.9a2 2 0 0 0 0 2.828l1.9 1.9V18a2 2 0 0 0 2 2h2.686l1.9 1.9a2 2 0 0 0 2.828 0l1.9-1.9H18a2 2 0 0 0 2-2v-2.686l1.9-1.9a2 2 0 0 0 0-2.828l-1.9-1.9V6a2 2 0 0 0-2-2h-2.686zM12 3.516l1.9 1.9A2 2 0 0 0 15.313 6H18v2.686a2 2 0 0 0 .586 1.415l1.9 1.9l-1.9 1.899A2 2 0 0 0 18 15.314V18h-2.686a2 2 0 0 0-1.415.586l-1.9 1.9l-1.899-1.9A2 2 0 0 0 8.686 18H6v-2.686a2 2 0 0 0-.586-1.415L3.514 12l1.9-1.9A2 2 0 0 0 6 8.687V6h2.686a2 2 0 0 0 1.414-.586l1.9-1.9ZM10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8" />
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
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
        <div class="flex items-center justify-center mt-4">
            <div class="grid grid-cols-3 gap-32 mt-2">
                <RouterLink class="drop-shadow-md" to="/profile">
                    <div class="flex justify-center items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 20H4v-4h4zm0-6H4v-4h4zm0-6H4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4z" />
                        </svg>
                        <label class="text-lg ml-1" for="">POSTS</label>
                    </div>
                </RouterLink>
                <RouterLink class="drop-shadow-md" to="/explore">
                    <div class="flex justify-center items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48">
                            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="4">
                                <path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3" />
                                <path fill="currentColor"
                                    d="M20.5 28v-6.062l5.25 3.03L31 28l-5.25 3.031l-5.25 3.031z" />
                                <path d="M6 15h36m-9-9l-6 9m-6-9l-6 9" />
                            </g>
                        </svg>
                        <label class="text-lg ml-1">REELS</label>
                    </div>
                </RouterLink>
                <RouterLink class="drop-shadow-md" to="/">
                    <div class="flex justify-center items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="m8 9.524l.976.837l2.988 2.56a.325.325 0 0 0 .536-.246V4.5A1.5 1.5 0 0 0 11 3H5a1.5 1.5 0 0 0-1.5 1.5v8.175a.325.325 0 0 0 .536.247l2.988-2.56zM14 4.5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8.175a1.825 1.825 0 0 0 3.013 1.386L8 11.5l2.987 2.56A1.825 1.825 0 0 0 14 12.676z"
                                clip-rule="evenodd" />
                        </svg>
                        <label class="text-lg ml-1">SAVED</label>
                    </div>
                </RouterLink>
            </div>
        </div>
    </header>d
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