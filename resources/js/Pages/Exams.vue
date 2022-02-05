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
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">اسم المجال</th>
                    <th scope="col">عدد النماذج</th>
                    <th scope="col">المبلغ المطلوب</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="exam in $page.props.exams">
                    <td>{{ exam.title }}</td>
                    <td>{{ exam.quizzes_count ?? '0' }}</td>
                    <td>{{ exam.price ?? 'مجانا' }}</td>
                    <td> <inertia-link :href="route('quizzes',{'exam_id': exam.id})" class="btn btn-primary">اختبر الان</inertia-link></td>
                </tr>
                </tbody>
            </table>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "../Layouts/AppLayout";
export default {
    name: "Exams",
    components: {AppLayout}
}
</script>

<style scoped>

</style>
