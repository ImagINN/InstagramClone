<template>
    <component :is="tag" :class="size">
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'span'
        },
        size: {
            type: String,
            default: 'normal', // normal:14, small:12, xsmall:11, xxsmall:10
            validator(value) {
                return ['normal', 'small', 'xsmall', 'xxsmall'].indexOf(value) != -1
            }
        }
    }
}
</script>

<style scoped>
.normal {}

.small {
    font-size: 12px;
}

.xsmall {
    font-size: 11px;
}

.xxsmall {
    font-size: 10px;
}
</style>