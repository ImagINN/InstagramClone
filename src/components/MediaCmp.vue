<template>
    <div class="media">
        <img class="inline-flex w-full h-full object-cover" :src="src" :alt="alt"
            :style="{ width: size + 'px', height: (size * 0.75) + 'px' }">
    </div>
</template>

<script>
export default {
    name: 'MediaCmp',
    props: {
        src: {
            type: String,
            default: "https://www.twistedmagazine.com/wp-content/uploads/2023/10/charlie-hunnam.png",
        },
        alt: {
            type: String,
            default: 'Görsel'
        },
        size: {
            type: Number,
            // default: 600
        }
    }
}
</script>

<style scoped>
/* .avatar {
    display: inline-flex;
    padding: 2px;
    border-radius: 999px;
    background: rgb(175, 175, 175)

    img {
        border-radius: inherit;
        border: 2px solid white;
    }
} */
</style>