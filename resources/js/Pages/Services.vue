<template>
    <app-layout>
        <div class="container">
            <div style="height: 250px" class="row justify-content-center align-items-center">
                <div class="col-12 col-md-6">
                    <h1 class="text-center">الخدمات</h1>
                </div>
            </div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent">
                    <li class="breadcrumb-item"><a href="#">لوحة التحكم</a></li>
                    <li class="breadcrumb-item active" aria-current="page">الاقسام</li>
                    <li class="breadcrumb-item active" aria-current="page">الخدمات</li>
                </ol>
            </nav>
        </div>
        <div class="container mt-5">
            <div class="row text-center justify-content-center align-items-center">
                <div class="col-12 col-md-3" v-for="service in $page.props.services">
                    <div class="card" style="height: 150px;background-color: #F5F7FD;">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-6" style="margin-top: 50px">
                                <div class="card bg-light">
                                    <div class="card-body">
                                        <img :src="'/storage/' + service.image" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title text-center">{{ service.title }}</h5>
                            <button type="button" class="btn btn-primary" data-mdb-toggle="modal"
                                    data-mdb-target="#exampleModal">اطلب الان</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">طلب الخدمة</h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-mdb-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
                            اغلاق
                        </button>
                        <button type="button" class="btn btn-primary">ارسال</button>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from "../Layouts/AppLayout";
import Button from "../Jetstream/Button";
export default {
    name: "Services",
    components: {Button, AppLayout}
}
</script>

<style scoped>

</style>
