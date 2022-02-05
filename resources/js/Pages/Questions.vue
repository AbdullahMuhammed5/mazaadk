<template>
    <app-layout>
        <div class="container">
            <div style="height: 250px" class="row justify-content-center align-items-center">
                <div class="col-12 col-md-6">
                    <h1 class="text-center">الاسئلة</h1>
                </div>
            </div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent">
                    <li class="breadcrumb-item"><a href="#">لوحة التحكم</a></li>
                    <li class="breadcrumb-item active" aria-current="page">الاسئلة</li>
                </ol>
            </nav>
        </div>
        <div class="container mt-5">
            <div class="card text-right">
                <div class="card-body">
                    <p>{{ question_now }} من {{ questions }}</p>
                    <h3 v-if="question">{{ question.content }}</h3>
                    <form action="">
                        <div class="row">
                            <div class="col-6 mt-4" v-if="question" v-for="n in question.answers">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        :id="'flexRadioDefault' + n.id"
                                        checked
                                        v-model="answer"
                                    />
                                    <label class="form-check-label" :for="'flexRadioDefault' + n.id">{{ n.content }}</label>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary mt-5" type="button" @click="nextQuestion">التالي</button>
                    </form>
                </div>
                <div v-if="question">
                    <button v-if="question.info" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Launch demo modal
                    </button>

                    <!-- Modal -->
                    <div v-if="question.info" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">معلومات</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body" v-if="question">
                                    {{ question.info ?? '' }}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">اغلاق</button>
                                </div>
                            </div>
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
    name: "Quistions",
    components: {AppLayout},
    data(){
        return {
            questions: 12,
            question_now: 1,
            question: null,
            answer: null,
        }
    },
    mounted() {
        this.questions = this.$page.props.questions.length
        this.question = this.$page.props.questions[this.question_now - 1]
        console.log(this.$page.props.questions)
    },
    methods: {
        nextQuestion()
        {
            if(this.questions > this.question_now) this.question_now++
            this.questions = this.$page.props.questions.length
            this.question = this.$page.props.questions[this.question_now - 1]
            console.log(this.$page.props.questions)
            this.response()
        },
        response()
        {
            console.log(this.answer)
        }
    }
}
</script>

<style scoped>

</style>
