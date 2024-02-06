<script>
import { RouterLink } from 'vue-router'
import Avatar from '@/components/AvatarCmp.vue';
import CustomText from '@/components/TextCmp.vue';
import IconMore from '@/components/icons/IconMore.vue';
import IconDirectEmpty from '@/components/icons/IconDirectEmpty.vue';
import IconComment from '@/components/icons/IconComment.vue';
import IconLikeEmpty from '@/components/icons/IconLikeEmpty.vue';
import IconLikeFill from '@/components/icons/IconLikeFill.vue';
import IconSaveEmpty from '@/components/icons/IconSaveEmpty.vue';
import IconSaveFill from '@/components/icons/IconSaveFill.vue';


export default {
    name: 'PostCmp',
    components: {
        'RouterLink': RouterLink,
        'avatar': Avatar,
        'custom-text': CustomText,
        'icn-more': IconMore,
        'icn-direct-empty': IconDirectEmpty,
        'icn-comment': IconComment,
        'icn-like-empty': IconLikeEmpty,
        'icn-like-fill': IconLikeFill,
        'icn-save-empty': IconSaveEmpty,
        'icn-save-like': IconSaveFill,
    },
    data() {
        return {
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque repellendus minus. Qui velit dicta ad earum, est ut illo similique reprehenderit et dolore nesciunt tempora neque delectus cumque fuga!",
            maxLength: 200,
            isFullTextShown: false,
            showButton: {
                type: Boolean,
                default: true
            }
        };
    },
    computed: {
        truncatedText() {
            return this.isFullTextShown ? this.content : this.content.substring(0, this.maxLength) + "...";
        },
        buttonText() {
            return this.isFullTextShown ? "Gizle" : "devamı";
        }
    },
    methods: {
        toggleText() {
            this.isFullTextShown = !this.isFullTextShown;
        }
    }
}
</script>

<template>
    <div class="post">
        <!-- Header -->
        <header class="post-header section">
            <div class="header-author">
                <avatar class="avatar-author" :size="42" />
                <div class="author">
                    <div class="author-info">
                        <div>
                            <custom-text tag="b">
                                gokhan_sal
                            </custom-text>
                        </div>

                        <div class="date-time">
                            <custom-text size="small"><custom-text class="dot" />&nbsp;5g</custom-text>
                        </div>
                    </div>
                    <div>
                        <custom-text size="xsmall">Montreal, Quebec</custom-text>
                    </div>
                </div>

            </div>
            <div class="header-more">
                <button type="button">
                    <icn-more />
                </button>
            </div>
        </header>

        <!-- Media -->
        <div class="post-media">
            <img src="https://sm.ign.com/t/ign_tr/news/i/insomniac-/insomniac-reveals-how-spider-man-2-handles-character-switchi_kdms.1280.jpg"
                alt="">
        </div>

        <!-- Actions -->
        <div class="action-buttons section">
            <button type="button">
                <icn-like-empty />
            </button>

            <button type="button">
                <icn-comment />
            </button>

            <RouterLink to="/direct">
                <button type="button">
                    <icn-direct-empty />
                </button>
            </RouterLink>

            <button type="button" class="action-save">
                <icn-save-empty />
            </button>
        </div>

        <!-- View Count -->
        <div class="view-count section">
            <avatar class="avatar-author" :size="15" style="background: transparent;" />
            <custom-text tag="b">1.362 beğenme</custom-text>
        </div>

        <!-- Content -->
        <div class="post-content section">
            <custom-text tag="b">
                gokhan_sal
            </custom-text>
            <custom-text>{{ truncatedText }}</custom-text>
            <button type="button" v-if="showButton && !isFullTextShown" v-on:click="toggleText"><custom-text tag="b">{{
                buttonText }}</custom-text></button>
        </div>

        <!-- Comment List -->

        <!-- Comment Form -->
    </div>
</template>


<style scoped>
.post {
    border-radius: 3px;
    border: 1px solid rgb(var(--b6a), 1);
}

.section {
    padding-left: 16px;
    padding-right: 16px;
}

.post-header {
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
                grid-template-columns: 1fr 1fr;
                align-items: center;
            }
        }

        .date-time {
            margin-left: 4px;

            .dot {
                height: 4px;
                width: 4px;
                margin-bottom: 2px;
                background-color: #676767;
                border-radius: 50%;
                display: inline-block;
            }
        }
    }

    .header-more {
        margin-left: auto;
    }
}

.post-media {
    margin-bottom: 8px;
}

.action-buttons {
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
}

.story-avatar {
    margin-bottom: 16px;
    margin-right: 4px;
}

.view-count {
    margin-bottom: 4px;
    display: flex;
    justify-content: flex-start;
}

.post-content {
    margin-bottom: 8px;
    margin-left: 4px;
}
</style>