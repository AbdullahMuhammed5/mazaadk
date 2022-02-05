<template>
    <app-layout>
        <h1 style="color: #048C8A">{{ $page.props.post.title }}</h1>
        <img :src="'/storage/' + $page.props.post.image" style="width: 100%" alt="">
        <div v-html="$page.props.post.body">

        </div>
    </app-layout>
</template>

<script>
import AppLayout from "../Layouts/AppLayout";
export default {
    name: "Post",
    components: {AppLayout}
}
</script>

<style scoped>

</style>
