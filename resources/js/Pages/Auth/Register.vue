<template>

  <div>
      <nav-bar />
      <jet-authentication-card>
          <template #logo>
              <h1 class="text-center mb-4">تسجيل حساب</h1>
          </template>

          <div class="card-body mt-4">

              <jet-validation-errors class="mb-3" />

              <form @submit.prevent="submit">
                  <div class="form-group text-right">
                      <jet-label for="name" value="الاسم الكامل" />
                      <jet-input icon="user" id="name" type="text" v-model="form.name" required autofocus autocomplete="name" />
                  </div>

                  <div class="form-group text-right">
                      <jet-label for="email" value="البريد الاكتروني" />
                      <jet-input icon="at" id="email" type="email" v-model="form.email" required />
                  </div>

                  <div class="form-group text-right">
                      <jet-label for="password" value="كلمة السر" />
                      <jet-input icon="lock" id="password" modal-type="password" v-model="form.password" required autocomplete="new-password" />
                  </div>

                  <div class="form-group text-right">
                      <jet-label for="password_confirmation" value="تأكيد كلمة السر" />
                      <jet-input icon="lock" id="password_confirmation" modal-type="password" v-model="form.password_confirmation" required autocomplete="new-password" />
                  </div>

                  <div class="form-group" v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature">
                      <div class="custom-control custom-checkbox">
                          <jet-checkbox name="terms" id="terms" v-model:checked="form.terms" />

                          <label class="custom-control-label" for="terms">
                              I agree to the <a target="_blank" :href="route('terms.show')">Terms of Service</a> and <a target="_blank" :href="route('policy.show')">Privacy Policy</a>
                          </label>
                      </div>
                  </div>

                  <div class="mb-0">
                      <div class="d-flex justify-content-end align-items-baseline" style="direction: ltr">
                          <inertia-link :href="route('login')" class="text-muted mr-3 text-decoration-none">
                              مسجل من قبل ؟
                          </inertia-link>

                          <jet-button class="ml-4" :class="{ 'text-white-50': form.processing }" :disabled="form.processing">
                              تسجيل
                          </jet-button>
                      </div>
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
import JetCheckbox from "@/Jetstream/Checkbox";
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
    JetCheckbox,
    JetLabel,
    JetValidationErrors
  },

  data() {
    return {
      form: this.$inertia.form({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        terms: false,
      })
    }
  },

  methods: {
    submit() {
      this.form.post(this.route('register'), {
        onFinish: () => this.form.reset('password', 'password_confirmation'),
      })
    }
  }
}
</script>
