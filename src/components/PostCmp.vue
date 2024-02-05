<script>
import Avatar from '@/components/AvatarCmp.vue';
import CustomText from '@/components/TextCmp.vue';
import IconMore from '@/components/icons/IconMore.vue';

export default {
    name: 'PostCmp',
    components: {
        'avatar': Avatar,
        'custom-text': CustomText,
        'icn-more': IconMore,
    }
}
</script>

<template>
    <div class="post">
        <!-- Header -->
        <header class="post-header">
            <div class="header-author">
                <avatar class="avatar-author" :size="42" />
                <div class="author">
                    <custom-text>gokhan_sal</custom-text>
                </div>
            </div>
            <div class="header-more">
                <button type="button">
                    <icn-more/>
                </button>
            </div>
        </header>

        <!-- Media -->
        <div class="post-media">
            <img src="https://sm.ign.com/t/ign_tr/news/i/insomniac-/insomniac-reveals-how-spider-man-2-handles-character-switchi_kdms.1280.jpg"
                alt="">
        </div>

        <!-- Actions -->

        <!-- View Count -->

        <!-- Comment List -->

        <!-- DateTime -->

        <!-- Comment Form -->
    </div>
</template>


<style scoped>
.story-avatar {
    margin-bottom: 15px;
    margin-right: 5px;
}
</style>