<template>
    <div class="avatar">
        <img :src="src" :alt="alt" :width="size" :height="size">
    </div>
</template>

<script>
export default {
    name: 'AvatarCmp',
    props: {
        src: {
            type: String,
            default: "https://www.twistedmagazine.com/wp-content/uploads/2023/10/charlie-hunnam.png",
        },
        alt: {
            type: String,
        },
        size: {
            type: Number,
        }
    }
}
</script>

<style scoped>
.avatar {
    display: inline-flex;
    padding: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);

    img {
        border-radius: inherit;
        border: 2px solid white;
    }
}
</style>