<template>
    <app-layout>
        <div v-if="$page.props.page" v-html="$page.props.page.body">
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "../Layouts/AppLayout";
export default {
    name: "Page",
    components: {AppLayout},
}
</script>

<style scoped>

</style>
