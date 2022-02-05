<template>
    <v-container>
        <v-card flat color="transparent">
            <v-card-text>
                <v-card-title class="cyan--text">الأسئلة الشائعة</v-card-title>
                <v-card-text>
                    <v-expansion-panels>
                        <v-expansion-panel
                                class="mt-2 mb-2"
                                v-for="item in questions"
                                :key="i"
                        >
                            <v-expansion-panel-header>{{ item.question }}</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                {{ item.answer }}
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card-text>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "questions",
        data()
        {
            return {
                questions: [
                    {
                        question: 'هل تقبل الشيكات الشخصية للمشاركة في المزاد؟',
                        answer: 'لا يجب تقديم شيك مصرفي باسم شركة إبرام للمزادات أو حسب الشروط الخاصة بكل مزاد او التحويل البنكي لحساب إبرام للمزادات.',
                    },
                    {
                        question: 'من هم ملاك العقارات؟',
                        answer: 'العقارات المعروضة تمت من قبل وكلاء بيع قضائي أو مصفين قضائيين أو أفراد معرفّين أو جهة حكومية أو مملوكة للقاع الخاص',
                    },
                    {
                        question: 'هل يمكن العدول عن الشراء بعد انتهاء المزاد؟',
                        answer: 'لا',
                    },
                    {
                        question: 'متى موعد المزاد؟',
                        answer: 'كل مزاد عن أي أصل من الأصول المعروضة يحتوي بتفاصيله عن الموعد ومدته وانتهائه',
                    },
                    {
                        question: 'كيف يمكنني معرفة موقع العقارات المطروحة بالمزاد؟',
                        answer: 'توضح كل صفحة تفاصيل لكل عقار',
                    },
                    {
                        question: 'كيف يمكن استرداد تامين المزايدة بحال لم أفز به ؟',
                        answer: 'سيتم إعادته للحساب الذي تم التحويل منه أو بزيارة فرع إبرام للمزادات',
                    },
                    {
                        question: 'هل يمكن شراء أكثر من أصل أو سلعة ؟',
                        answer: 'نعم',
                    },
                    {
                        question: 'هل الشراء مسموح فقط للمواطنين ؟',
                        answer: 'مسموح للجميع سوى العقارات فيسمح لمواطني دول مجلس التعاون عدا مكة المكرمة والمدينة المنورة سوى ذلك فحسب نظام تملك الأجانب',
                    },
                    {
                        question: 'ما هي إجراءات الدفع ؟',
                        answer: 'شيك مصرفي حسب شروط كل مزاد وعند الفوز بأحد المزادات فيجب دفع باقي المبلغ خلال عشرة أيام كحد أقصى',
                    },
                    {
                        question: 'هل يمكنني الشراء بالنيابة ؟',
                        answer: 'نعم و يلزم تقديم وكالة شرعية',
                    },
                    {
                        question: 'ما هي الأسباب التي تستدعي تمديد المزاد ؟',
                        answer: 'في حالات وجود مشكلة فنية أو أي ظروف قاهرة',
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>