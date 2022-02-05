<template>
  <div>
      <nav-bar />
      <jet-authentication-card>
          <template #logo>
              <h1 class="text-center mb-4">استعادة كلمة المرور</h1>

          </template>

          <div class="card-body">
              <div class="mb-2">
                  نسيت رقمك السري؟ لا مشكلة. فقط أخبرنا بعنوان بريدك الإلكتروني وسنرسل لك رابط إعادة تعيين كلمة المرور عبر البريد الإلكتروني الذي سيسمح لك باختيار عنوان جديد.
              </div>

              <div v-if="status" class="alert alert-success" role="alert">
                  {{ status }}
              </div>

              <jet-validation-errors class="mb-2" />

              <form @submit.prevent="submit">
                  <div class="form-group text-right">
                      <jet-label for="email" value="البريد الالكتروني" />
                      <jet-input icon="at" id="email" type="email" v-model="form.email" required autofocus />
                  </div>

                  <div class="d-flex justify-content-end mt-4">
                      <jet-button :class="{ 'text-white-50': form.processing }" :disabled="form.processing">
                          استعادة كلمة المرور
                      </jet-button>
                  </div>
              </form>
          </div>
      </jet-authentication-card>
  </div>
</template>

<script>
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard'
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo'
import JetButton from '@/Jetstream/Button'
import JetInput from '@/Jetstream/Input'
import JetLabel from '@/Jetstream/Label'
import JetValidationErrors from '@/Jetstream/ValidationErrors'
import NavBar from "../../Jetstream/NavBar";

export default {
  components: {
      NavBar,
    JetAuthenticationCard,
    JetAuthenticationCardLogo,
    JetButton,
    JetInput,
    JetLabel,
    JetValidationErrors
  },

  props: {
    status: String
  },

  data() {
    return {
      form: this.$inertia.form({
        email: ''
      })
    }
  },

  methods: {
    submit() {
      this.form.post(this.route('password.email'))
    }
  }
}
</script>
