<template>
    <app-layout>
        <div class="container">
            <div style="height: 250px" class="row justify-content-center align-items-center">
                <div class="col-12 col-md-6">
                    <h1 class="text-center">النماذج</h1>
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
                <div class="col-12 col-md-3" v-for="quiz in $page.props.quizzes">
                    <div class="card" style="height: 150px;background-color: #F5F7FD;">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-6" style="margin-top: 50px">
                                <div class="card bg-light" style="height: 75px;margin-top: -50px">
                                    <div class="card-body">
                                        <i class="fas fa-fire fa-2x" style="color: #00C5CC"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-center">{{ quiz.title }}</h5>
                            <inertia-link :href="route('questions',{quizz_id : quiz.id})" class="btn btn-primary">اختبر الان</inertia-link>
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
    name: "Quizzes",
    components: {AppLayout}
}
</script>

<style scoped>

</style>
