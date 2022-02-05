<template>
    <footer class="text-right bg-special text-white">
        <!-- Section: Social media -->
        <!-- Section: Social media -->

        <!-- Section: Links  -->
        <section class="pa-2">
            <div class="container text-center text-md-start mt-5 pt-2">
                <!-- Grid row -->
                <div class="row mt-3">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-right">
                        <!-- Content -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>عن المنصة
                        </h6>
                        <p>
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لقد تم توليد هذا النص من مولد النص العربى ويمكن ان يستبدل في نفس المساحة
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-right">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            روابط مهمة
                        </h6>
                        <p>
                            <inertia-link class="text-reset" :href="route('dashboard')">
                                الرئيسية
                            </inertia-link>
                        </p>
                        <p>
                            <inertia-link class="text-reset" :href="route('page',{'slug' : 'about-us'})">
                                من نحن
                            </inertia-link>
                        </p>
                        <p>
                            <inertia-link class="text-reset" :href="route('services')">
                                خدماتنا
                            </inertia-link>
                        </p>
                        <p>
                            <inertia-link class="text-reset" :href="route('services')">
                                تواصل معنا
                            </inertia-link>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-right">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            الاقسام
                        </h6>
                        <p>
                            <inertia-link href="#!" class="text-reset">الاختبارات المهنية</inertia-link>
                        </p>
                        <p>
                            <inertia-link href="#!" class="text-reset">الاختبارات التجريبية</inertia-link>
                        </p>
                        <p>
                            <inertia-link href="#!" class="text-reset">الخدمات الاكاديمية</inertia-link>
                        </p>
                        <p>
                            <inertia-link href="#!" class="text-reset">القبول الجامعي للدراسات العليا في التخصصات التربوية</inertia-link>
                        </p>
                        <p>
                            <inertia-link href="#!" class="text-reset">المنصة التدريبية الرقمية</inertia-link>
                        </p>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-right">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            تواصل معنا
                        </h6>
                        <p><i class="fas fa-home me-3"></i>13 شارع الملك سلطان ,, مكة,, المملكة العربية السعودية</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            mail@tkamel.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i>+0947948487477484</p>
                        <p><i class="fas fa-print me-3"></i>+0947948487477484</p>
                    </div>
                    <!-- Grid column -->
                </div>
                <!-- Grid row -->
            </div>
        </section>
        <!-- Section: Links  -->

        <!-- Copyright -->
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2021
        </div>
        <!-- Copyright -->
    </footer>
</template>

<script>
export default {
    name: "AppFooter"
}
</script>

<style scoped>

</style>
