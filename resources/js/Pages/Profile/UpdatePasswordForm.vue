<template>
  <jet-form-section @submitted="updatePassword">
    <template #title>
        تحديث كلمة المرور
    </template>

    <template #description>
        تأكد من أن حسابك يستخدم كلمة مرور طويلة وعشوائية للبقاء آمنًا.
    </template>

    <template #form>
      <jet-action-message :on="form.recentlySuccessful">
          تم الحفظ.
      </jet-action-message>

      <div class="w-75">
        <div class="form-group">
          <jet-label for="current_password" value="كلمة السر الحالية" />
          <jet-input id="current_password" modal-type="password"
                     :class="{ 'is-invalid': form.errors.current_password }" v-model="form.current_password" ref="current_password" autocomplete="current-password" />
          <jet-input-error :message="form.errors.current_password" class="mt-2" />
        </div>

        <div class="form-group">
          <jet-label for="password" value="كلمة السر الجديدة" />
          <jet-input id="password" modal-type="password"
                     :class="{ 'is-invalid': form.errors.password }" v-model="form.password" autocomplete="new-password" />
          <jet-input-error :message="form.errors.password" class="mt-2" />
        </div>

        <div class="form-group">
          <jet-label for="password_confirmation" value="تأكيد كلمة المرور" />
          <jet-input id="password_confirmation" modal-type="password"
                     :class="{ 'is-invalid': form.errors.password_confirmation }" v-model="form.password_confirmation" autocomplete="new-password" />
          <jet-input-error :message="form.errors.password_confirmation" class="mt-2" />
        </div>
      </div>
    </template>

    <template #actions>
      <jet-button :class="{ 'text-white-50': form.processing }" :disabled="form.processing">
        حفظ
      </jet-button>
    </template>
  </jet-form-section>
</template>

<script>
import JetActionMessage from '@/Jetstream/ActionMessage'
import JetButton from '@/Jetstream/Button'
import JetFormSection from '@/Jetstream/FormSection'
import JetInput from '@/Jetstream/Input'
import JetInputError from '@/Jetstream/InputError'
import JetLabel from '@/Jetstream/Label'

export default {
  components: {
    JetActionMessage,
    JetButton,
    JetFormSection,
    JetInput,
    JetInputError,
    JetLabel,
  },

  data() {
    return {
      form: this.$inertia.form({
        current_password: '',
        password: '',
        password_confirmation: '',
      }),
    }
  },

  methods: {
    updatePassword() {
      this.form.put(route('user-password.update'), {
        errorBag: 'updatePassword',
        preserveScroll: true,
        onSuccess: () => this.form.reset(),
        onError: () => {
          if (this.form.errors.password) {
            this.form.reset('password', 'password_confirmation')
            this.$refs.password.focus()
          }

          if (this.form.errors.current_password) {
            this.form.reset('current_password')
            this.$refs.current_password.focus()
          }
        }
      })
    },
  },
}
</script>
