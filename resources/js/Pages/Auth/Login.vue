<template>

  <div>
      <nav-bar />
      <jet-authentication-card>
          <template #logo>
              <h1 class="text-center mb-4">تسجيل الدخول</h1>
          </template>

          <div class="card-body mt-4">
              <div class="row">
                  <div class="col-12 col-md-6">
                      <img src="/assets/login.png" style="width: 100%" alt="">
                  </div>
                  <div class="col-12 col-md-6">
                      <jet-validation-errors class="mb-3" />

                      <div v-if="status" class="alert alert-success mb-3 rounded-0" role="alert">
                          {{ status }}
                      </div>

                      <form @submit.prevent="submit">
                          <div class="form-group text-right">
                              <jet-label for="email" value="الايميل" />
                              <jet-input icon="user" id="email" type="email" v-model="form.email" required autofocus />
                          </div>

                          <div class="form-group text-right">
                              <jet-label for="password" value="كلمة السر" />
                              <jet-input icon="lock" id="password" modal-type="password" v-model="form.password" required autocomplete="current-password" />
                          </div>

                          <div class="form-group">
                              <div class="custom-control custom-checkbox">
                                  <jet-checkbox id="remember_me" name="remember" v-model:checked="form.remember" />

                                  <label class="custom-control-label" for="remember_me">
                                      تذكرني
                                  </label>
                              </div>
                          </div>

                          <div class="mb-0">
                              <div class="d-flex justify-content-end align-items-baseline" style="direction: ltr">
                                  <inertia-link v-if="canResetPassword" :href="route('password.request')" class="text-muted mr-3">
                                      نسيت كلمة السر ؟
                                  </inertia-link>

                                  <jet-button class="ml-4" :class="{ 'text-white-50': form.processing }" :disabled="form.processing">
                                      تسجيل الدخول
                                  </jet-button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </jet-authentication-card>
  </div>
</template>

<script>
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard'
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo'
import JetButton from '@/Jetstream/Button'
import JetInput from '@/Jetstream/Input'
import JetCheckbox from '@/Jetstream/Checkbox'
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

  props: {
    canResetPassword: Boolean,
    status: String
  },

  data() {
    return {
      form: this.$inertia.form({
        email: '',
        password: '',
        remember: false
      })
    }
  },

  methods: {
    submit() {
      this.form
          .transform(data => ({
            ... data,
            remember: this.form.remember ? 'on' : ''
          }))
          .post(this.route('login'), {
            onFinish: () => this.form.reset('password'),
          })
    }
  }
}
</script>
