<script>
import { RouterLink } from 'vue-router'
import Avatar from '@/components/AvatarCmp.vue';
import Media from '@/components/MediaCmp.vue';
import CustomText from '@/components/TextCmp.vue';
import IconMore from '@/components/icons/IconMore.vue';
import IconDirectEmpty from '@/components/icons/IconDirectEmpty.vue';
import IconComment from '@/components/icons/IconComment.vue';
import IconLikeEmpty from '@/components/icons/IconLikeEmpty.vue';
import IconLikeFill from '@/components/icons/IconLikeFill.vue';
import IconSaveEmpty from '@/components/icons/IconSaveEmpty.vue';
import IconSaveFill from '@/components/icons/IconSaveFill.vue';
import IconEmoji from '@/components/icons/IconEmoji.vue';

export default {
    name: 'PostCmp',
    components: {
        'RouterLink': RouterLink,
        'avatar': Avatar,
        'media': Media,
        'custom-text': CustomText,
        'icn-more': IconMore,
        'icn-direct-empty': IconDirectEmpty,
        'icn-comment': IconComment,
        'icn-like-empty': IconLikeEmpty,
        'icn-like-fill': IconLikeFill,
        'icn-save-empty': IconSaveEmpty,
        'icn-save-like': IconSaveFill,
        'icn-emoji': IconEmoji,
    },
    data() {
        return {
            maxLength: 200,
            showMoreModal: false,
            posts: [
                {
                    type: Object,
                    id: 0,
                    name: 'Brie_Larson',
                    avatar: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/230638_v9_bb.jpg',
                    location: 'Sacramento, Kaliforniya, ABD',
                    media: 'https://m.media-amazon.com/images/I/71RtdERAARL._AC_UF1000,1000_QL80_.jpg',
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque repellendus minus. Qui velit dicta ad earum, est ut illo similique reprehenderit et dolore nesciunt tempora neque delectus cumque fuga!",
                    followText: '',
                    isFollowed: false,
                    likeCount: 1524,
                    isLike: false,
                    commentCount: 537,
                    showButton: true,
                    isFullTextShow: false,
                    isSaved: false,
                    postedDate: new Date("2024-02-15"),
                },
                {
                    type: Object,
                    id: 1,
                    name: 'Chris_Hemsworth',
                    avatar: 'https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg?crop=1xw:0.75xh;center,top&resize=1200:*',
                    location: 'Christianization of Scandinavia, Asgard',
                    media: 'https://i.pinimg.com/736x/07/8b/eb/078beb9edc742de1e737d33557ead007.jpg',
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque repellendus minus. Qui velit dicta ad earum, est ut illo similique reprehenderit et dolore nesciunt tempora neque delectus cumque fuga!",
                    followText: '',
                    isFollowed: false,
                    likeCount: 123,
                    isLike: false,
                    commentCount: 999,
                    showButton: true,
                    isFullTextShow: false,
                    isSaved: false,
                    postedDate: new Date("2022-01-20"),
                },
                {
                    type: Object,
                    id: 2,
                    name: 'Tom_Holland',
                    avatar: 'https://media.vanityfair.com/photos/6481dc94bafc6505d771230f/1:1/w_4000,h_4000,c_limit/1495240060',
                    location: 'Queens, New York City',
                    media: 'https://rukminim2.flixcart.com/image/850/1000/l0pm3680/poster/f/o/p/large-spiderman-comic-wallpaper-on-fine-art-hd-picture-on-24x36-original-imagcfwjjwtcdvvj.jpeg?q=20&crop=false',
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque repellendus minus. Qui velit dicta ad earum, est ut illo similique reprehenderit et dolore nesciunt tempora neque delectus cumque fuga!",
                    followText: '',
                    isFollowed: false,
                    likeCount: 123,
                    isLike: false,
                    commentCount: 999,
                    showButton: true,
                    isFullTextShow: false,
                    isSaved: false,
                    postedDate: new Date("2022-01-20"),
                },
                {
                    type: Object,
                    id: 3,
                    name: 'Robert_Downey_Jr',
                    avatar: 'https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX32_CR0,0,32,44_AL_.jpg',
                    location: 'Long Island, New York',
                    media: 'https://w0.peakpx.com/wallpaper/878/783/HD-wallpaper-iron-man-comics-marvel-tony-stark.jpg',
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque repellendus minus. Qui velit dicta ad earum, est ut illo similique reprehenderit et dolore nesciunt tempora neque delectus cumque fuga!",
                    followText: '',
                    isFollowed: false,
                    likeCount: 123,
                    isLike: false,
                    commentCount: 999,
                    showButton: true,
                    isFullTextShow: false,
                    isSaved: false,
                    postedDate: new Date("2022-01-20"),
                },
                {
                    type: Object,
                    id: 4,
                    name: 'Mark_Ruffalo',
                    avatar: 'https://m.media-amazon.com/images/M/MV5BNWIzZTI1ODUtZTUzMC00NTdiLWFlOTYtZTg4MGZkYmU4YzNlXkEyXkFqcGdeQXVyNTExOTk5Nzg@._V1_UX32_CR0,0,32,44_AL_.jpg',
                    location: 'Dayton, Ohio',
                    media: 'https://i.pinimg.com/736x/b6/0d/48/b60d480284f2d8000675445356e6fd6e.jpg',
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque repellendus minus. Qui velit dicta ad earum, est ut illo similique reprehenderit et dolore nesciunt tempora neque delectus cumque fuga!",
                    followText: '',
                    isFollowed: false,
                    likeCount: 123,
                    isLike: false,
                    commentCount: 999,
                    showButton: true,
                    isFullTextShow: false,
                    isSaved: false,
                    postedDate: new Date("2022-01-20"),
                },
                {
                    type: Object,
                    id: 5,
                    name: 'Chris_Evens',
                    avatar: 'https://m.media-amazon.com/images/M/MV5BMWZlMzRkZmYtZTg0My00MGE2LWFhZWQtOTRmZGQxMWY5OTJhXkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_UX32_CR0,0,32,44_AL_.jpg',
                    location: 'USA, Washington DC',
                    media: 'https://i.pinimg.com/originals/aa/78/88/aa7888e32eb660b228597aeb03a86654.jpg',
                    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque repellendus minus. Qui velit dicta ad earum, est ut illo similique reprehenderit et dolore nesciunt tempora neque delectus cumque fuga!",
                    followText: '',
                    isFollowed: false,
                    likeCount: 123,
                    isLike: false,
                    commentCount: 999,
                    showButton: true,
                    isFullTextShow: false,
                    isSaved: false,
                    postedDate: new Date("2022-01-20"),
                },
            ],
        };
    },
    mounted() {
        document.addEventListener('click', this.closeDropdownOnClickOutside);
    },
    methods: {
        toggleText(id) {
            this.posts[id].isFullTextShow = !this.posts[id].isFullTextShow;
        },
        truncatedText(id) {
            return this.posts[id].isFullTextShow ? this.posts[id].content : this.posts[id].content.substring(0, this.maxLength) + "...";
        },
        toggleFollow(id) {
            this.posts[id].isFollowed = !this.posts[id].isFollowed;
        },
        getFollowStatus(id) {
            return this.posts[id].isFollowed ? 'Takibi Bırak' : 'Takip Et';
        },
        buttonText(id) {
            return this.posts[id].isFullTextShow ? "" : "devamı";
        },
        liked(id) {
            if (!this.posts[id].isLike) {
                this.posts[id].likeCount++;
            } else {
                this.posts[id].likeCount--;
            }
            this.posts[id].isLike = !this.posts[id].isLike
        },
        toggleSave(id) {
            this.posts[id].isSaved = !this.posts[id].isSaved;
        },
        getPostedDate(id) {
            const currentDay = new Date().getTime();
            const timeDifference = currentDay - this.posts[id].postedDate.getTime();
            const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            if (dayDifference < 7) {
                return dayDifference.toString() + 'g';
            } else if (dayDifference < 365) {
                return (parseInt(dayDifference / 7)).toString() + 'h';
            } else {
                return (parseInt(dayDifference / 365)).toString() + 'y';
            }
        },
    },
}
</script>

<template>
    <!-- Post -->
    <div class="rounded-md border border-solid border-gray-300 mb-4" v-for="post in posts">
        <!-- Header -->
        <header class="flex h-[60px] items-center">
            <!-- Header Author -->
            <div class="flex items-center">
                <!-- Avatar Author -->
                <avatar class="ml-2 h-[44px] w-[44px]" :src="post.avatar" :size="42" />
                <!-- Author -->
                <div class="ml-2">
                    <!-- Author Info -->
                    <div class="grid items-center text-center" style="grid-template-columns: 1fr 50px 1fr;">
                        <div class="username">
                            <custom-text tag="b">
                                {{ post.name }}
                            </custom-text>
                        </div>
                        <!-- Date Time -->
                        <div class="ml-1">
                            <!-- Dot -->
                            <custom-text class="h-1 w-1 mx-[2px] mb-[2px] bg-zinc-500 rounded-full inline-block" />
                            <!-- Date -->
                            <custom-text class="mx-1 text-neutral-800" size="small">
                                {{ getPostedDate(post.id) }}
                            </custom-text>
                            <custom-text class="h-1 w-1 mx-[2px] mb-[2px] bg-zinc-500 rounded-full inline-block" />
                        </div>
                        <div class="text-left">
                            <button type="button" class="text-sky-500" @click="toggleFollow(post.id)">
                                <custom-text tag="b">
                                    {{ getFollowStatus(post.id) }}
                                </custom-text>
                            </button>
                        </div>
                    </div>
                    <div>
                        <custom-text size="xsmall">{{ post.location }}</custom-text>
                    </div>
                </div>
            </div>
            <!-- Header More -->
            <div class="ml-auto mr-2">
                <button type="button" @click="showMoreModal = !showMoreModal">
                    <icn-more />
                </button>
            </div>
        </header>

        <!-- Show More Model -->
        <div v-if="showMoreModal" x-show="showModal"
            class="fixed inset-0 bg-gray-500 bg-opacity-25 flex items-center justify-center"
            @click="showMoreModal = false">
            <!-- Modal Content -->
            <div @click.stop class="bg-white py-2 rounded-xl shadow-md w-96">
                <!-- Modal Body -->
                <div class="grid grid-cols-1 gap-y-1 justify-center items-center text-center text-lg">
                    <button class="hover:bg-gray-200 text-red-600 font-semibold">Şikayet Et</button>
                    <button class="hover:bg-gray-200">Favorilere ekle</button>
                    <button class="hover:bg-gray-200">Gönderiye git</button>
                    <button class="hover:bg-gray-200">Paylaş...</button>
                    <button class="hover:bg-gray-200">Bağlantıyı kopyala</button>
                    <button class="hover:bg-gray-200">Bu hesap hakkında</button>
                    <button @click="showMoreModal = !showMoreModal"
                        class="hover:bg-gray-200 text-gray-800 font-semibold">
                        Cancel
                    </button>
                </div>
                <!-- Modal Footer -->
                <!-- <div class="mt-2 flex justify-center ">
                    <button @click="showModal = !showModal"
                        class="hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded">
                        Cancel
                    </button>
                </div> -->
            </div>
        </div>

        <!-- Media -->
        <div class="mb-2 flex justify-center">
            <media :src="post.media" :size="615" />
        </div>

        <!-- Actions -->
        <div class="h-10 flex items-center ml-2">
            <button class="mr-4" type="button" v-on:click="liked(post.id)">
                <icn-like-fill v-if="post.isLike" />
                <icn-like-empty v-else />
            </button>
            <button class="mr-4" type="button">
                <icn-comment />
            </button>
            <RouterLink class="flex items-center justify-center text-center" to="/direct">
                <button class="mr-4" type="button">
                    <icn-direct-empty />
                </button>
            </RouterLink>
            <button type="button" class="ml-auto mr-2" @click="toggleSave(post.id)">
                <icn-save-like v-if="post.isSaved" />
                <icn-save-empty v-else />
            </button>
        </div>

        <!-- View Count -->
        <div class="view-count mb-1 ml-1 flex justify-start items-center text-center">
            <avatar class="avatar-author p-0 mr-1" :size="16" style="background: transparent;" />
            <custom-text tag="b">{{ post.likeCount }} beğenme</custom-text>
        </div>

        <!-- Content -->
        <div class="mb-2 ml-2">
            <custom-text tag="b">
                gokhan_sal
            </custom-text>
            <custom-text>{{ truncatedText(post.id) }}</custom-text>
            <button type="button" class="text-slate-700" v-if="post.showButton && !post.isFullTextShow"
                v-on:click="toggleText(post.id)"><custom-text tag="b">{{
        buttonText(post.id) }}</custom-text>
            </button>
        </div>

        <!-- Comment List -->
        <div class="comment-list">
            <button type="button" class="mb-2 text-slate-700 ml-2">
                <custom-text tag="b">{{ post.commentCount }} yorumun tümünü gör</custom-text>
            </button>
        </div>

        <!-- Comment Form -->
        <div class="comment-form flex items-center mb-2 ml-2">
            <button type="button" class="add-comment text-slate-700">
                <custom-text tag="b">Yorum ekle...</custom-text>
            </button>
            <button class="emoji ml-auto mr-2"><icn-emoji width="20px" height="20px" /></button>
        </div>
    </div>
</template>


<style scoped>
/* .post {
    border-radius: 3px;
    border: 1px solid rgb(var(--b6a), 1);
    margin-bottom: 16px;
}

.section {
    padding-left: 16px;
    padding-right: 16px;
    margin-left: 4px;
} */

/* .post-header {
    height: 60px;
    display: flex;
    align-items: center;

    .header-author {
        display: flex;
        align-items: center;

        .author {
            margin-left: 8px;

            .author-info {
                display: grid;
                grid-template-columns: 1fr 50px 1fr;
                align-items: center;
                text-align: center;

                .dot {
                    height: 4px;
                    width: 4px;
                    margin-right: 2px;
                    margin-left: 2px;
                    margin-bottom: 2px;
                    background-color: #676767;
                    border-radius: 50%;
                    display: inline-block;
                }

                .date {
                    margin-left: 4px;
                    margin-right: 4px;
                    color: rgb(var(--i1d), 1);
                }

                .follow {
                    text-align: left;

                    .follow-btn {
                        color: #0095f6;
                    }
                }

                .date-time {
                    margin-left: 4px;
                }
            }
        }
    }

    .header-more {
        margin-left: auto;
    }
} */

/* .post-media {
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
} */

/* .action-buttons {
    height: 40px;
    display: flex;
    align-items: center;

    button {
        margin-right: 16px;
    }

    .action-save {
        margin-left: auto;
        margin-right: 0;
    }
} */

/* .story-avatar {
    margin-bottom: 16px;
    margin-right: 4px;
}

.view-count {
    margin-bottom: 4px;
    display: flex;
    justify-content: flex-start;
    margin-left: 0;
} */

/* .post-content {
    margin-bottom: 8px;

    .show-more-content {
        color: #545454;
    }
} */

/* .show-comments {
    margin-bottom: 8px;
    color: #545454;
} */

/* .comment-form {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    .add-comment {
        color: #545454;
    }

    .emoji {
        margin-left: auto;
    }
} */
</style>