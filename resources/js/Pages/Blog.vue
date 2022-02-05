<template>
    <app-layout>
        <div class="row">
            <div class="col-12 col-md-4 mt-4 mb-4" v-for="post in $page.props.posts">
                <inertia-link :href="route('post',{'id':post.id})" style="text-decoration: none !important;">
                    <div class="card">
                        <img :src="'/storage/' + post.image" style="width: 100%" alt="">
                        <div class="card-header">
                            <h3 style="text-decoration: none;color: #048C8A">{{ post.title }}</h3>
                        </div>
                        <div class="card-body" style="text-decoration: none;">
                            {{ post.excerpt }}
                        </div>
                    </div>
                </inertia-link>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "../Layouts/AppLayout";
export default {
    name: "Blog",
    components: {AppLayout}
}
</script>

<style scoped>

</style>
