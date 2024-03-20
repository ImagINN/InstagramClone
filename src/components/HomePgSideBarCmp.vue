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

        }
    }
}
</script>

<template>
    <div class="rounded-md border border-solid border-gray-300 mb-4">
        <div class="flex items-center text-left mx-2 my-2">
            <div class="mr-4">
                <avatar style="background: transparent;" :size="42" />
            </div>
            <div class="flex-1">
                <custom-text :tag="p">Charlie Hunnam</custom-text>
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