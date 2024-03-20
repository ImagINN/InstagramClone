<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
}
</script>

<template>
    <component :is="`post-modal-${post.id}`" :id="post.id">
        <div class="bg-white py-2 rounded-xl shadow-md w-9/12 h-3/4">
            <div class="grid grid-cols-5 gap-y-1 justify-center items-center text-center text-lg">
                <div class="flex justify-center col-span-3">
                    <media :src="post.media" :size="615" />
                </div>
                <div class="flex justify-center bg-blue-700 col-span-2">
                    <custom-text tag="b">Yorumlar</custom-text>
                </div>
            </div>
        </div>
    </component>
</template>

<style scoped></style>
