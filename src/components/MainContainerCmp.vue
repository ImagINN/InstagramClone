<script>
export default {
    name: 'MainContainer',
    components: {

    }

}
</script>

<template>
    <div class="container">
        <slot>

        </slot>
    </div>
</template>

<style scoped>
.container {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
}
</style>