<template>
    <app-layout>
        <div class="container">
            <div class="card text-right">
                <div class="card-body text-center">
                    <h3 >النماذح المسجل فيها</h3>
                    <p>لا توجد اي نماذح</p>
                    <inertia-link :href="route('categories')">تصفح</inertia-link>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import Welcome from '@/Jetstream/Welcome'

    export default {
        components: {
            AppLayout,
            Welcome,
        },
    }
</script>
