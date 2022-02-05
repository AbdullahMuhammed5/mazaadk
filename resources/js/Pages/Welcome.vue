<template>
    <div>
        <div>
            <nav class="navbar navbar-expand-md bg-special fixed-top-sm justify-content-start flex-nowrap navbar-dark">
                <div class="container">
                    <div class="navbar-nav flex-row ml-auto text-white">
                        ٢٨ شوال ١٤٤٢ هـ10:30:00 مساء
                    </div>
                    <ul class="navbar-nav flex-row mr-auto">
                        <li class="nav-item">
                            <a class="nav-link px-2" href="#"><i class="fab fa-facebook"
                                                                 style="font-size: 1.5em"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-2" href="#"><i class="fab fa-twitter"
                                                                 style="font-size: 1.5em"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-2" href="#"><i class="fab fa-whatsapp"
                                                                 style="font-size: 1.5em"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-2" href="#"><i class="fab fa-instagram" style="font-size: 1.5em"></i></a>
                        </li>
                    </ul>

                </div>
            </nav>
            <nav class="navbar navbar-expand-md bg-white shadow-1 navbar-light p-0">
                <inertia-link href="/" class="navbar-brand">
                    <img src="/logo.png" alt="">
                </inertia-link>
                <ul class="navbar-nav flex-row mr-auto ml-auto justify-content-center align-content-center">
                    <li class="nav-item ml-2 mr-2">
                        <inertia-link href="/" style="color: black;font-weight: bold">
                            الرئيسية
                        </inertia-link>
                    </li>
                    <li class="nav-item ml-2 mr-2">
                        <inertia-link :href="route('blog')" style="color: black;font-weight: bold">
                            الاخبار
                        </inertia-link>
                    </li>
                    <li class="nav-item ml-2 mr-2">
                        <inertia-link :href="route('page',{'slug' : 'about-us'})"
                                      style="color: black;font-weight: bold">
                            من نحن
                        </inertia-link>
                    </li>

                </ul>
                <ul v-if="canLogin" class="navbar-nav flex-row mr-auto">
                    <li v-if="$page.props.user" class="nav-item active">
                        <inertia-link href="/dashboard" class="text-muted">
                            <img src="/logo.png" alt="">
                        </inertia-link>
                    </li>
                    <template v-else>
                        <li class="nav-item ml-1 mr-1">
                            <inertia-link :href="route('login')" class="btn text-black bg-transparent border-0">
                                دخول
                            </inertia-link>
                        </li>

                        <li class="nav-item ml-1 mr-1" v-if="canRegister">
                            <inertia-link class="btn btn-primary bg-special-2 ml-4 text-white"
                                          :href="route('register')">
                                تسجيل
                            </inertia-link>
                        </li>

                    </template>

                </ul>
            </nav>
        </div>

        <div class="container-fluid my-5 pt-5 px-5">
            <div class="row justify-content-center px-4">
                <div class="col-md-12 col-lg-9 text-right">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-12 col-md-6">
                            <h1>نمي مهاراتك من خلال افضل الأسئلة المعدة لك خصيصا</h1>
                            <p class="text-muted">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
                                النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
                                إضافة إلى زيادة عدد الحروف التي يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر</p>
                            <div class="flex">
                                <a :href="route('login')" class="btn btn-primary ml-1 mr-1">اشترك الان</a>
                                <a :href="route('register')" class="btn btn-primary ml-1 mr-1">تجربة مجانية</a>
                            </div>
                            <h4 class="mt-3">انضم الي اكثر من 5000+ الف متدرب حول العالم</h4>
                        </div>
                        <div class="col-12 col-md-6">
                            <img src="/assets/welcome1.png" style="width: 100%" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="mb-4">
            <div class="row text-white text-center justify-content-center align-items-center"
                 style="background: #048C8A;height: 50px">
                <div class="col-12">
                    هذا النص مؤقت ويكمن ان يستبدل في نفس المساحة هذا النص مؤقت ويكمن ان يستبدل في نفس المساحة هذا النص
                    مؤقت ويكمن ان يستبدل في نفس المساحة
                </div>
            </div>
            <div style="height: 100px;background: #00C5CC"
                 class="row text-white text-center justify-content-center align-items-center">
                <div class="col-12 col-md-3">
                    كن مستعد دائما للاختبار
                </div>
                <div class="col-12 col-md-3">
                    أسئلة متنوعة في كافة المجالات
                </div>
                <div class="col-12 col-md-3">
                    احصل علي شهادة موثقة
                </div>
                <div class="col-12 col-md-3">
                    تعلم مهارات جديدة
                </div>
            </div>
        </section>
        <section>
            <h2 class="text-center mt-4 mb-4">خدمات مؤسسة تكامل التربية</h2>
            <div style="margin-top: 50px" class="row text-center justify-content-center align-items-center">
                <div class="col-12 col-md-2 p-4" v-for="service in services">
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
                            <h5 class="card-title">{{ service.name }}</h5>
                            <inertia-link :href="route('categories')" class="btn btn-primary">عرض الكل</inertia-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section style="margin-top: 50px">
            <h1 class="text-center mt-5 mb-5">عن مؤسسة تكامل التربية</h1>
            <div class="container">
                <div class="row justify-content-center align-items-center text-right">
                    <div class="col-12 col-md-6">
                        <h1>اكبر قاعدة بيانات للاسئلة تؤهلك للحصول علي شهادتك المهنية وبافضل الطرق التقنية</h1>
                        <p class="text-muted">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
                            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
                            التي يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر
                        </p>
                        <div>
                            <a href="" class="btn btn-primary ml-1 mr-1">اشترك الان</a>
                            <a href="" class="btn btn-primary ml-1 mr-1">تصفح خطط الاسعار</a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <img src="/assets/welcome2.png" style="width: 80%" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section>
            <h1 class="text-center mt-5 mb-5">اراء المعلمين والطلبة</h1>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 mt-4 mb-4" v-for="n in 2">
                        <div class="card">
                            <div class="card-body text-right">
                                <div>
                                    <img src="/assets/avatar.png" alt="">
                                    <p class="mt-4">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم توليد هذا
                                        النص من مولد النص العربى ويمكن ان يستبدل في نفس المساحة</p>
                                    <p><i style="color: #5CBFBC" class="fas fa-star" v-for="n in 5"></i></p>
                                    <p class="font-bold">محمد احمد علي</p>
                                    <small class="text-muted">معلم لغة عربية</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <app-footer/>
    </div>
</template>

<style scoped>

</style>

<script>

import AppFooter from "../Jetstream/AppFooter";

export default {
    components: {AppFooter},
    props: {
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String,
    },
    data() {
        return {
            services: [
                {
                    name: 'الاختبارات المهنية',
                    link: ''
                },
                {
                    name: 'الاختبارات التجريبية',
                    link: ''
                },
                {
                    name: 'القبول الجامعي للدراسات العليا في التخصصات التربوية',
                    link: ''
                },
                {
                    name: 'الخدمات الاكاديمية',
                    link: ''
                },
                {
                    name: 'المنصة التدريبية الرقمية',
                    link: ''
                },
            ]
        }
    }
}
</script>
