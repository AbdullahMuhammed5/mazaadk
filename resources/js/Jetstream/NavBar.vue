<template>
    <div>
        <nav class="navbar navbar-expand-md bg-white shadow-1 navbar-light p-0">
            <inertia-link  href="/" class="navbar-brand">
                <img src="/logo.png" alt="">
            </inertia-link>
            <ul class="navbar-nav flex-row mr-auto">
                <li v-if="$page.props.user" class="nav-item active">
                    <inertia-link  href="/dashboard" class="text-muted">
                        <img src="/logo.png" alt="">
                    </inertia-link>
                </li>
                <template v-else>
                    <li class="nav-item ml-1 mr-1">
                        <inertia-link :href="route('login')" class="btn text-black bg-transparent border-0">
                            دخول
                        </inertia-link>
                    </li>

                    <li class="nav-item ml-1 mr-1">
                        <inertia-link class="btn btn-primary bg-special-2 ml-4 text-white"  :href="route('register')">
                            تسجيل
                        </inertia-link>
                    </li>

                </template>

            </ul>

        </nav>
    </div>
</template>

<script>
export default {
    props: ['page'],
    name: "NavBar"
}
</script>

<style scoped>

</style>
