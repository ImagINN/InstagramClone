<script>
import Avatar from '@/components/AvatarCmp.vue';
import CustomText from '@/components/TextCmp.vue';

export default {
    name: "HomeSideBar",
    components: {
        'avatar': Avatar,
        'custom-text': CustomText,
    },
    data() {
        return {
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
        }
    },
    methods: {
        toggleFollow(id) {
            this.items[id].isFollowed = !this.items[id].isFollowed;
        },
        getFollowStatus(id) {
            return this.items[id].isFollowed ? 'Takibi Bırak' : 'Takip Et';
        },
    }
}
</script>

<template>
    <div class="rounded-md border border-solid border-gray-300 mb-4">
        <div v-for="item in items" class="flex items-center text-left mx-2 my-2">
            <div class="mr-2">
                <avatar class="ml-2 h-[52px] w-[52px]" :src="item.avatar" style="background: transparent;" :size="50" />
            </div>
            <div class="ml-2">
                <custom-text :tag="p">{{ item.name }}</custom-text>
                <custom-text class="h-1 w-1 mx-1 mb-[2px] bg-zinc-500 rounded-full inline-block" />
            </div>
            <div class="text-left">
                <button type="button" class="text-sky-500" @click="toggleFollow(item.id)">
                    <custom-text tag="b">
                        {{ getFollowStatus(item.id) }}
                    </custom-text>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* .side-bar {
    border-radius: 3px;
    border: 1px solid rgb(var(--b6a), 1);
    margin-bottom: 16px;

    .content {
        display: grid;
        grid-template-columns: 45px 1fr;
        align-items: center;
        text-align: left;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
} */
</style>