<template>
    <app-layout>
        <div class="container">
            <div style="height: 250px" class="row justify-content-center align-items-center">
                <div class="col-12 col-md-6">
                    <h1 class="text-center">الاقسام</h1>
                </div>
            </div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent">
                    <li class="breadcrumb-item"><a href="#">لوحة التحكم</a></li>
                    <li class="breadcrumb-item active" aria-current="page">الاقسام</li>
                </ol>
            </nav>
        </div>
        <div class="container mt-5">
            <div class="row text-center justify-content-center align-items-center">
                <div class="col-12 col-md-3" v-for="category in $page.props.categories">
                    <div class="card" style="height: 150px;background-color: #F5F7FD;">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-6">
                                <div class="card bg-light" style="height: 75px;margin-top: -50px">
                                    <div class="card-body">
                                        <i class="fas fa-fire fa-2x" style="color: #00C5CC"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-center">{{ category.name }}</h5>
                            <inertia-link :href="route('exams',{'category_id' : category.id})" class="btn btn-primary">تصفح</inertia-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "../Layouts/AppLayout";
export default {
    name: "Categories",
    components: {AppLayout}
}
</script>

<style scoped>

</style>
